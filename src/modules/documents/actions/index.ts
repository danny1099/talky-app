'use server'
import { revalidatePath } from 'next/cache'
import { collection, query, getDocs, addDoc } from 'firebase/firestore'
import { uploadFilePDF, uploadFileDoc } from '@/modules/documents/services'
import { filesAccepted, fileExtension } from '@/modules/documents/helpers'
import { extractText } from '@/modules/documents/helpers/text-extractor'
import type { Result, Document } from '@/modules/documents/types'
import { db } from '@/lib/database'

export const uploadFile = async (formData: FormData): Promise<Result> => {
  const file = formData.get('file') as File
  const fileType = fileExtension(file.name)
  const isFileAccepted = filesAccepted(file.name)
  const arrayBuffer = await file.arrayBuffer()

  /* Check file type */
  if (!isFileAccepted) {
    return {
      error: 'File type not recognized',
      status: 'error'
    } as Result
  }

  /* Define upload service uploadFileDoc or uploadFilePDF */
  const uploadFileServices = fileType === 'pdf' ? uploadFilePDF : uploadFileDoc

  return uploadFileServices(formData)
    .then(async (result) => {
      /* Save file to database */
      const textContent = await extractText({ file: arrayBuffer })
      const newDocument = { ...result, initial_content: textContent }
      const uploadResult = await addDoc(collection(db, 'documents'), newDocument)

      /* prepare response */
      const response: Result = { data: { id: uploadResult?.id, ...result }, status: 'success' }
      revalidatePath('/private/ws/documents')

      return response
    })
    .catch((error) => {
      console.log(error)
      return { error: error.message as string, status: 'error' } as Result
    })
}

export const getAllDocuments = async () => {
  try {
    const q = query(collection(db, 'documents'))
    const data = await getDocs(q).then((r) =>
      r.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as Document
      })
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
