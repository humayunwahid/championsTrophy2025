import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db("champions-trophy");
        const collection = db.collection("standings");

        const { id } = params;
        const updateData = await req.json();

        // List of allowed fields to update
        const validFields = ["played", "won", "lost", "tied", "points", "net_rr"];
        const filteredUpdateData: Record<string, any> = {};

        for (const key of validFields) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }

        if (Object.keys(filteredUpdateData).length === 0) {
            return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
        }

        // Update only the provided fields
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: filteredUpdateData }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "Standing not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Standing updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating standing:", error);
        return NextResponse.json({ error: "Failed to update standing" }, { status: 500 });
    }
}
