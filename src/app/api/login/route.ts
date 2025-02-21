import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Parse request JSON
        const body = await req.json();
        const { username, password } = body;

        // Debugging logs (check if data is received correctly)
        console.log("Received Data:", body);

        // Ensure environment variables are set
        if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
            console.error("Missing environment variables: ADMIN_USERNAME or ADMIN_PASSWORD");
            return NextResponse.json({ success: false, message: "Server error: Missing credentials" }, { status: 500 });
        }

        // Validate credentials
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            console.log("Authentication successful");
            return NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
        } else {
            console.warn("Authentication failed: Invalid credentials");
            return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
        }
    } catch (error) {
        console.error("Error processing login request:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
