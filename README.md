This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Folder structure and it's explanantion

### App Folder

It is root where the next js look for paths.

layout.js is the starting point. import bootstrap in this or anyother npm package which is globally used

page.js which falls directly under it.

### Lib folder

contains registry file which registers the css in js libraries

### Components Folder

list of reusable components

### Any app/[named] folder

routable if it contains page.js
