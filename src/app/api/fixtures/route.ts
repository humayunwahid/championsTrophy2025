
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';


export const fetchCache = 'force-no-store';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('champions-trophy');
        const collection = db.collection('fixtures');
        const data = await collection.find({}).toArray();

        // Return response with no-cache headers
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}

