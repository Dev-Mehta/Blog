import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  trustHost: true,
  providers: [
    GitHubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
});
