This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=jonattfin_forrest-clone2)](https://sonarcloud.io/summary/new_code?id=jonattfin_forrest-clone2)

The building blocks for this app can be seen in storybook at this url: https://629e38adc84b50004a0c06fc-ciypykolfj.chromatic.com/?path=/story/pages-about-us--banner-component

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Other opinionated decisions

- pages are split by "features", and all the components / images / styles stay within that feature folder "page" for better coupling.
- Typescript is used for clarity & to catch errors at compiletime.
- Prisma is used for the ORM and Postgresql is used for data storage (right now just for projects). The Postgresql database is hosted in Heroku.
- pages are loaded in a lazy fashion "by demand" to minimize the loading time.
- the components are split by the "smart/not smart" rule, and usually per page there's only one smart component which does the api calls, all the others just render what they receive as props.
- Storybook is used to render components "out of the box" and to build them in isolation. Also those components are snapshot tested.
- For the integration tests we're using cypress.js with cucumber.js and the features/scenarios are written in Gerkin.
- The style & icons are based on material ui and based on styled components.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
