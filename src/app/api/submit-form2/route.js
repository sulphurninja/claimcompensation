import dbConnect from '../../../lib/dbConnect';
import Form2 from '../../../models/form2Model';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await dbConnect();
        const data = await req.json();
        // const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('remote-addr') || '';

        const newForm = new Form2({
            name: data.name,
            email: data.email,
            number: data.number,
            product: data.product,
            ipAddress: data.ipAddress,
        });

        await newForm.save();

        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error saving form data:', error);
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}
