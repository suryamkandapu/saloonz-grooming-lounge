import server from "../dist/server/server.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetRoot = path.join(__dirname, "../dist/client/assets");

const mimeTypes: Record<string, string> = {
  ".css": "text/css",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

function getMimeType(filePath: string) {
  return mimeTypes[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";
}

async function serveAsset(pathname: string, res: any) {
  const normalized = path.normalize(path.join(assetRoot, pathname));
  if (!normalized.startsWith(assetRoot)) return false;

  try {
    const file = await fs.readFile(normalized);
    res.writeHead(200, {
      "Content-Type": getMimeType(normalized),
      "Cache-Control": "public, max-age=31536000, immutable",
    });
    res.end(file);
    return true;
  } catch {
    return false;
  }
}

async function toWebRequest(req: any) {
  const host = req.headers.host ?? "localhost";
  const url = new URL(req.url ?? "", `http://${host}`);
  return new Request(url.href, {
    method: req.method,
    headers: req.headers as any,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req,
  });
}

export default async function handler(req: any, res: any) {
  const host = req.headers.host ?? "localhost";
  const url = new URL(req.url ?? "", `http://${host}`);

  if (url.pathname.startsWith("/assets/")) {
    const served = await serveAsset(url.pathname.slice(8), res);
    if (served) return;
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const request = await toWebRequest(req);
  const response = await server.fetch(request, undefined, undefined);
  res.writeHead(response.status, Object.fromEntries(response.headers.entries()));

  if (response.body) {
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } else {
    res.end();
  }
}
