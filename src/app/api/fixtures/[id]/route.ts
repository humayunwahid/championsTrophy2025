import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db("champions-trophy");
        const collection = db.collection("fixtures");

        const { id } = params;
        const updateData = await req.json();

        // Ensure we have at least one field to update
        const validFields = ["result", "permalink", "status", "time"];
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
            return NextResponse.json({ error: "Fixture not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Fixture updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating fixture:", error);
        return NextResponse.json({ error: "Failed to update fixture" }, { status: 500 });
    }
}
