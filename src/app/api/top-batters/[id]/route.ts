import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db("champions-trophy");
        const collection = db.collection("top-batters");

        const { id } = params;
        const updateData = await req.json();

        const validFields = ["pos", "team", "player_name", "player_image", "runs", "innings"];
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
            return NextResponse.json({ error: "Batter not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Batter updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating batter:", error);
        return NextResponse.json({ error: "Failed to update batter" }, { status: 500 });
    }
}
