# YATC - Yet Another Twitter Clone

An extremely basic twitter clone. Currently supports posting with a 280 character limit, and that's it. So the obvious TO-DOs that might come in the future (in order of the liklihood that I'll actually come back to implement them) are:

- Replies
- Likes
- Account creation/management (currently users are authenticated and stored through Clerk)
- Follows and personalized feeds
- Embedded media

This is a [T3 Stack](https://create.t3.gg/) project, so it uses the following tools:

- [Next.js](https://nextjs.org)
- [Clerk](https://https://clerk.com/) handles authentication, which is exclusively OAuth for now. Also a user store. Uses the following providers:
  - Github
  - Google
- [Prisma](https://prisma.io) as an ORM, the datastore is provided by [Planetscale](https://planetscale.com/), a servless MySQL platform.
- [Tailwind CSS](https://tailwindcss.com) for styling
- [tRPC](https://trpc.io) for a typesafe API
