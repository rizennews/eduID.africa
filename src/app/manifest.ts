import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "eduID.africa — Sovereign Academic Digital Identity Federation",
    short_name: "eduID.africa",
    description: "Pan-African sovereign digital identity federation for higher education and research.",
    start_url: "/en",
    display: "standalone",
    background_color: "#060D1A",
    theme_color: "#060D1A",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  };
}
