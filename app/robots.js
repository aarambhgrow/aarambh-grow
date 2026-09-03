export default function robots() {
  const baseUrl = "https://aarambhgrow.group";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}