import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db("champions-trophy");
        const collection = db.collection("top-bowlers");

        const { id } = params;
        const updateData = await req.json();

        const validFields = ["pos", "team", "name", "wickets", "matches"];
        const filteredUpdateData = {};

        for (const key of validFields) {
            if (updateData[key] !== undefined) {
                filteredUpdateData[key] = updateData[key];
            }
        }

        if (Object.keys(filteredUpdateData).length === 0) {
            return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
        }

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: filteredUpdateData }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "Bowler not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Bowler updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating Bowler:", error);
        return NextResponse.json({ error: "Failed to update Bowler" }, { status: 500 });
    }
}
