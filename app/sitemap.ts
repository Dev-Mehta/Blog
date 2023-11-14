import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://simplifiedweb.netlify.app/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blog'].map(
    (route) => ({
      url: `https://simplifiedweb.netlify.app${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
