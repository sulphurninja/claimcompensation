import dbConnect from '../../../lib/dbConnect';
import Form from '../../../models/formModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();

    const newForm = new Form({
      productLiability: data.productLiability,
      isAttorneyHelping: data.isAttorneyHelping,
      caseDescription: data.caseDescription,
      hospitalization: data.hospitalization,
      yearOfInjury: data.yearOfInjury,
      bestTimeToCall: data.bestTimeToCall,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      zipCode: data.zipCode,
      address: data.address,
    });

    await newForm.save();

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
