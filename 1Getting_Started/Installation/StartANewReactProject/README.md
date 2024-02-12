These are from documentation

Can I use React without a framework? 

You can definitely use React without a framework—that’s how you’d use React for a part of your page. However, if you’re building a new app or a site fully with React, we recommend using a framework.

Here’s why.

Even if you don’t need routing or data fetching at first, you’ll likely want to add some libraries for them. As your JavaScript bundle grows with every new feature, you might have to figure out how to split code for every route individually. As your data fetching needs get more complex, you are likely to encounter server-client network waterfalls that make your app feel very slow. As your audience includes more users with poor network conditions and low-end devices, you might need to generate HTML from your components to display content early—either on the server, or during the build time. Changing your setup to run some of your code on the server or during the build can be very tricky.

Types of React Framework:

1. Production-grade React frameworks 
These frameworks support all the features you need to deploy and scale your app in production and are working towards supporting our full-stack architecture vision. All of the frameworks we recommend are open source with active communities for support, and can be deployed to your own server or a hosting provider.


    Production-grade React frameworks for React

    1. Next.js 
    Next.js’ Pages Router is a full-stack React framework. It’s versatile and lets you create React apps of any size—from a mostly static blog to a complex dynamic application. To create a new Next.js project, run in your terminal:

    npx create-next-app@latest

    Next.js is maintained by Vercel. You can deploy a Next.js app to any Node.js or serverless hosting, or to your own server. Next.js also supports a static export which doesn’t require a server.

    2. Remix 
    Remix is a full-stack React framework with nested routing. It lets you break your app into nested parts that can load data in parallel and refresh in response to the user actions. To create a new Remix project, run:

    npx create-remix

    Remix is maintained by Shopify. When you create a Remix project, you need to pick your deployment target. You can deploy a Remix app to any Node.js or serverless hosting by using or writing an adapter.

    3. Gatsby 
    Gatsby is a React framework for fast CMS-backed websites. Its rich plugin ecosystem and its GraphQL data layer simplify integrating content, APIs, and services into one website. To create a new Gatsby project, run:

    npx create-gatsby

    Gatsby is maintained by Netlify. You can deploy a fully static Gatsby site to any static hosting. If you opt into using server-only features, make sure your hosting provider supports them for Gatsby.

    4. Expo (for native apps) 
    Expo is a React framework that lets you create universal Android, iOS, and web apps with truly native UIs. It provides an SDK for React Native that makes the native parts easier to use. To create a new Expo project, run:

    npx create-expo-app

    Expo is maintained by Expo (the company). Building apps with Expo is free, and you can submit them to the Google and Apple app stores without restrictions. Expo additionally provides opt-in paid cloud services.

2. Bleeding-edge React frameworks 

    Bleeding-edge React frameworks 
    As we’ve explored how to continue improving React, we realized that integrating React more closely with frameworks (specifically, with routing, bundling, and server technologies) is our biggest opportunity to help React users build better apps. The Next.js team has agreed to collaborate with us in researching, developing, integrating, and testing framework-agnostic bleeding-edge React features like React Server Components.

    These features are getting closer to being production-ready every day, and we’ve been in talks with other bundler and framework developers about integrating them.
