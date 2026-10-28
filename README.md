# Joshua Fulmer — Portfolio

Design leadership portfolio. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

**Live site:** [joshua-fulmer-portfolio.vercel.app](https://joshua-fulmer-portfolio.vercel.app)

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Link in bio (`/links`)

Hidden page for TikTok and YouTube bios. Also reachable at `/go` and `/bio`. Not in the nav, sitemap, or search (noindex).

- Links, order, labels, and on/off flags: `src/lib/links.config.ts`
- Latest YouTube episode comes from the channel RSS feed once `YOUTUBE_CHANNEL_ID` is set. Falls back to a static card otherwise.
- Bio URLs: `https://joshuafulmer.com/links?src=tiktok` and `https://joshuafulmer.com/links?src=youtube`. The `src` value becomes `utm_campaign` on internal links.
