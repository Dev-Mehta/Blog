[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%Dev-Mehta%2FBlog)

# simplifiedweb.netlify.app

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Planetscale](https://planetscale.com)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/Dev-Mehta/Blog.git
cd Blog
pnpm install
pnpm run setup # Remove all of my personal information
pnpm dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/Dev-Mehta/Blog/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/Dev-Mehta/Blog/blob/main/LICENSE.txt) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.
