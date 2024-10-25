import dbConnect from '../../../lib/dbConnect';
import Form from '../../../models/formModel';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect();
        const forms = await Form.find({});

        return NextResponse.json({ forms }, { status: 200 });
    } catch (error) {
        console.error('Error fetching form data:', error);
        return NextResponse.json({ error: 'Failed to fetch forms' }, { status: 500 });
    }
}
