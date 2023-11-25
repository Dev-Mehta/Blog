import {Feed} from "feed";
import matter from "gray-matter";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
const siteUrl = 'https://simplifiedweb.netlify.app';
import {remark} from "remark"
import html from "remark-html"

const markdownToHtml = (markdown) => 
    remark().use(html).processSync(markdown).toString();

export async function GET(request: Request) {
    const feed = new Feed({
        title: `SimplifiedWebs's blog feed`,
        description: "Developer, Writer & Creator",
        id: siteUrl,
        link: siteUrl,
        language: "en",
        generator: 'Next.js using Feed',
        feedLinks: {
          rss2: `${siteUrl}/api/blog/feed.xml`,
        },
        copyright: "All rights reserved Dev Mehta"
      })
  
  allBlogs.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
  allBlogs.forEach((post) => {
    const frontmatter = matter(post.body.raw);
    feed.addItem({
      title: post.title,
      description: post.summary,
      link: `${siteUrl}/${post.slug}`,
      date: new Date(post.publishedAt),
      content: markdownToHtml(frontmatter.content), 
    });
  });
  
  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}