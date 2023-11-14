export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://simplifiedweb.netlify.app/sitemap.xml',
    host: 'https://simplifiedweb.netlify.app',
  };
}
