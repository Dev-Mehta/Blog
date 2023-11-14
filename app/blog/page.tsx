import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';
import { getViewsCount } from 'lib/metrics';
import { Suspense } from 'react';
const parsedDate = (strDate) => {
  var strSplitDate = String(strDate).split(' ');
  var date = new Date(strSplitDate[0]);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <p><span className='text-neutral-600 dark:text-neutral-400'>published on {parsedDate(post.publishedAt)},</span> <Views slug={post.slug} /></p>
              </Suspense>
            </div>
          </Link>
        ))}
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} trackView={false} />;
}
