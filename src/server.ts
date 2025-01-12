import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Define el contenido estático
const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  let path = url.pathname === "/" ? "/index.html" : url.pathname;

  try {
    // Cargar archivos desde la carpeta `dist`
    const file = await Deno.readFile(`./dist${path}`);
    const contentType = getContentType(path);
    return new Response(file, { status: 200, headers: { "content-type": contentType } });
  } catch {
    return new Response("404: Not Found", { status: 404 });
  }
};

// Obtener el tipo de contenido según el archivo
function getContentType(path: string): string {
  const ext = path.split(".").pop();
  switch (ext) {
    case "html":
      return "text/html";
    case "js":
      return "application/javascript";
    case "css":
      return "text/css";
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

console.log("Server running on http://localhost:8000");
serve(handler);
