export default function manifest() {
  return {
    name: "caropedia",
    short_name: "caropedia",
    description:
      "Caropedia is a car encyclopedia that provides information about cars and their specifications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/appImages/black-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/appImages/black-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
