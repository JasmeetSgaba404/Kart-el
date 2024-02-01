import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({

    cname: {
        type: String,
        required: true
    },
    cemail: {
        type: String,
        required: true
    },
    cmessage: {
        type: String,
        required: true
    }
},
{ timestamps: true }
)

export default mongoose.model("contact", contactSchema);