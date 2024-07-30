import { env } from 'process'

/* Cloudinary keys */
export const CLOUDINARY_KEY = env.CLOUDINARY_KEY as string
export const CLOUDINARY_SECRET = env.CLOUDINARY_SECRET as string
export const CLOUDINARY_NAME = env.CLOUDINARY_NAME as string

/* Firebase keys */
export const FIREBASE_API_KEY = env.FIREBASE_API_KEY as string
export const FIREBASE_APP_ID = env.FIREBASE_APP_ID as string
export const FIREBASE_SENDER_ID = env.FIREBASE_SENDER_ID as string
