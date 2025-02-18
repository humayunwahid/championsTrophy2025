import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db('champions-trophy');
        const collection = db.collection('teams');

        // Find the team by the dynamic ID from the URL
        const team = await collection.findOne({ country: params.id });  // Assuming "teamId" is the field that matches the ID in the URL

        if (!team) {
            return NextResponse.json({ error: 'Team not found' }, { status: 404 });
        }

        return NextResponse.json(team);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}