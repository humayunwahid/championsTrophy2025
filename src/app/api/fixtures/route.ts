
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';


export const dynamic = 'force-dynamic'; // Ensures no caching in Next.js 13+
export const fetchCache = 'force-no-store'; // Disable API caching

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('champions-trophy');
        const collection = db.collection('fixtures');
        const data = await collection.find({}).toArray();

        // Return response with explicit cache prevention headers
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                Pragma: 'no-cache',
                Expires: '0',
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}

