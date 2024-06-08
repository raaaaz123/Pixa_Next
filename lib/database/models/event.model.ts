import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document{
    _id: String;
    title: string;
    description?: string;
    location?: string;
    imageUri: string;
    category: Schema.Types.ObjectId;
}
const EventSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, },
  location: { type: String,},
 imageUri: { type: String, required: true },
 category: {type:Schema.Types.ObjectId,ref:'Category'}

});

const Event = models.Event || model('Event',EventSchema);

export default Event;
