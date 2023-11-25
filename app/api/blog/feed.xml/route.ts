import Rss from "rss";
import { allBlogs } from "contentlayer/generated";

const siteUrl = 'https://simplifiedweb.netlify.app';

export async function GET(request: Request) {
    try {
        const feed = new Rss({
            title: "Dev Mehta",
            description: "Developer, writer, and creator.",
            feed_url: `${siteUrl}/api/blog/feed.xml`,
            site_url: siteUrl,
            language: "en",
        });

        allBlogs.forEach((post) => {
            feed.item({
                title: post.title,
                description: post.summary,
                url: `${siteUrl}/${post.slug}`,
                date: post.publishedAt,
            });
        });

        return new Response(feed.xml(), {
            status: 200,
            headers: {
                'Content-Type': 'application/xml'
            }
        })
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        return new Response('Error generating RSS feed', { status: 500 });
    }
}