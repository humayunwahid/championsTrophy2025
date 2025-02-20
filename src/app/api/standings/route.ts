import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// Disable Next.js API route caching
export const fetchCache = 'force-no-store';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('champions-trophy');
        const collection = db.collection('standings');

        // Fetch data from the database
        let data = await collection.find({}).toArray();

        // Sorting logic
        data.sort((a, b) => {
            // First, sort by points in descending order
            if (b.points !== a.points) {
                return b.points - a.points;
            }
            
            // If points are equal, sort by net run rate (converted to number)
            const netRR_A = parseFloat(a.net_rr);
            const netRR_B = parseFloat(b.net_rr);
            
            return netRR_B - netRR_A; // Higher net run rate comes first
        });

        // Return response with no-cache headers
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch data' },
            { status: 500 }
        );
    }
}