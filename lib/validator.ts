import * as z from "zod"

export const eventFormSchema = z.object({
 prompt: z.string().min(3, 'Title must be at least 3 characters'),
  nprompt: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  gender: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  url1: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url()
})