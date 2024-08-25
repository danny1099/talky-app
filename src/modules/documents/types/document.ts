export interface Document {
  id: string
  url: string
  pages: number
  format: string
  initial_content?: string
  created_at: string
  filename: string
  owner_id?: string
}

export type NewDocument = Omit<Document, 'id' | 'owner_id'>

export type Result = {
  data?: Document
  error?: string
  status: 'success' | 'error' | 'pending'
}
