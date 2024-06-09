import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  prompt: string;
  nprompt?: string;
  gender?: string;
  createdAt: Date;
url1: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string, name: string }
  organizer: { _id: string, firstName: string, lastName: string }
}

const EventSchema = new Schema({
  prompt: { type: String, required: true },
  nprompt: { type: String },
  gender: { type: String },
  createdAt: { type: Date, default: Date.now },
  url1: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;