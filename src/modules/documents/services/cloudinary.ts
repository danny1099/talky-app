import { uuid } from 'short-uuid'
import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_KEY, CLOUDINARY_SECRET, CLOUDINARY_NAME } from '@/config/env'
import { textCapitalize } from '@/modules/common/utils'
import { type NewDocument } from '@/modules/documents/types'

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
})

/* prettier-ignore */
export const uploadFilePDF = async (formData: FormData): Promise<NewDocument> => {
  const file = formData.get('file') as File
  const fileName = textCapitalize(file.name)
  const arrayBuffer = await file.arrayBuffer()
  const unit8Array = new Uint8Array(arrayBuffer)

  return new Promise((resolve, reject) => {
    cloudinary
      .uploader
      .upload_stream({ upload_preset: 'ml_default', folder: 'talky-app', filename_override: `${uuid().substring(0, 8) + '_' +  fileName}`}, (error, result) => {
        if (result) {
          const { secure_url, format, pages, created_at } = result
          const data = {
            url: secure_url,
            pages,
            format,
            filename: fileName,
            created_at,
          } as NewDocument

          return resolve(data)
        };
        reject(error);      
      }).end(unit8Array)
    })
}
