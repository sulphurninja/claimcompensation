import mongoose from 'mongoose';

const form2Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    ipAddress: String,
    product: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Form2 = mongoose.models.Form2 || mongoose.model('Form2', form2Schema);
export default Form2;
