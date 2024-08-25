import { uuid } from 'short-uuid'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { textCapitalize } from '@/modules/common/utils'
import { fileExtension } from '@/modules/documents/helpers'
import { NewDocument } from '@/modules/documents/types'
import { storage } from '@/lib/database'

/* prettier-ignore */
export const uploadFileDoc = async (formData: FormData): Promise<NewDocument> => {
  const file = formData.get('file') as File
  const fileName = textCapitalize(file.name)
  const fileExt = fileExtension(file.name)
  
  /* convert file to ArrayBuffer */
  const arrayBuffer = await file.arrayBuffer()
  const unit8Array = new Uint8Array(arrayBuffer)
  const storageRef = ref(storage, `files/${ uuid().substring(0, 8) + '_' +  fileName}`)

  /* upload file to firebase */
  const snapshot = await uploadBytes(storageRef, unit8Array).then((snapshot) => snapshot.metadata)
  const fileUrl = await getDownloadURL(storageRef)

  /* get file metadata from firebase */
  const data: NewDocument = {
    url: fileUrl,
    pages: 0,
    format: fileExt as string,
    filename: fileName,
    created_at: snapshot.timeCreated,
  }

  /* return data from firebase */
  return data
}
