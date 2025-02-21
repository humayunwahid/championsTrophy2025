import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { promisify } from "util";

const mkdirAsync = promisify(fs.mkdir);
const renameAsync = promisify(fs.rename);

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

export async function POST(req: Request) {
  try {
    // Set up formidable to parse the form data
    const form = new formidable.IncomingForm();
    const uploadDir = path.join(process.cwd(), "public/assets/img/uploads"); // Corrected path

    form.uploadDir = uploadDir; // Set upload directory
    form.keepExtensions = true;

    // Ensure the upload directory exists
    if (!fs.existsSync(uploadDir)) {
      await mkdirAsync(uploadDir, { recursive: true });
    }

    return new Promise((resolve, reject) => {
      form.parse(req as any, async (err, fields, files) => {
        if (err) {
          console.error("Formidable error:", err);
          return reject(NextResponse.json({ error: "File parsing failed" }, { status: 400 }));
        }

        const file = files.file;
        if (!file) {
          return resolve(NextResponse.json({ error: "No file uploaded" }, { status: 400 }));
        }

        const fileData = Array.isArray(file) ? file[0] : file;
        const tempPath = fileData.filepath;
        const newFilename = `${Date.now()}-${fileData.originalFilename}`;
        const newFilePath = path.join(uploadDir, newFilename);

        await renameAsync(tempPath, newFilePath);

        const fileUrl = `/assets/img/uploads/${newFilename}`; // Corrected URL path

        resolve(NextResponse.json({ url: fileUrl }, { status: 200 }));
      });
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
