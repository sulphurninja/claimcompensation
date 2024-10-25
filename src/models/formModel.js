import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  productLiability: String,
  isAttorneyHelping: String,
  caseDescription: String,
  hospitalization: String,
  yearOfInjury: String,
  bestTimeToCall: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  zipCode: String,
  ipAddress: String,
  address: String,
}, { timestamps: true });

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);
export default Form;
