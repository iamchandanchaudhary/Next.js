# Next.js
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

It also automatically configures lower-level tools like bundlers and compilers. You can instead focus on building your product and shipping quickly.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.


## Important Links
- Read Documentation: [Click Here](https://nextjs.org/docs)
- Installation: [Click Here](https://nextjs.org/docs/app/getting-started/installation)

``` terminal
npx create-next-app@latest my-app --yes
cd my-app
npm run dev
```

or For Custom Settings

``` terminal
npx create-next-app@latest
cd my-app
npm run dev
```

## Important Points
  - **Next.js:** Next.js is Framework of React.js to bulid Full-Stck Application.
  - **Route:** Next.js Contain inbuild routing function & the route will creaded by only placing it on the folder with the name `page.tsx`. Next.js will automatic detect it.
  - **"use client":** Next.js is by default run on server side & `"use client"` will allow us to run our next app on client side without showing server side details. You can run your client side component in Your Server Side component by placing them into different components
  - **ZOD Package:**- It is used in Next.js to Create Schema Validation (Zod is a TypeScript-first validation library. Define a schema and parse some data with it. You'll get back a strongly typed, validated result.)
  - In Next.js Database Server didn't run always, It run on the basis of demand. That's why you have to create a check if the database is not created create it & if created so start the database.