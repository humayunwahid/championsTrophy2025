import express from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files
  server.use("/public", express.static(path.join(__dirname, "public")));

  // Custom API route (Optional)
  server.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from custom server!" });
  });

  // Default Next.js routing
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
