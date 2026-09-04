export default function robots() {
  const baseUrl = "https://aarambhgrow.group";

  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: ["/api/", "/admin/"],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
