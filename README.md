<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** techsavagery, tests-cypress, twitter_handle, email, Tech Savagery: Tests - Cypress, Functional tests built to showcase the features and value of the Cypress.io testing framework.
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="">
    <img src="" alt="Logo" width="516" height="120">
  </a> -->

  <h3 align="center">LaDell Erby Personal Website</h3>

  <p align="center">
    Next.js app built to house my portfolio. This app will return Contact Info, Resume Widgets, Downloadable Resume, and.... EasterEggs! 
    <br />
    <a href="https://github.com/ladellerby/me"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ladellerby.com">View Demo</a>
    ·
    <a href="https://github.com/ladellerby/me/issues">Report Bug</a>
    ·
    <a href="https://github.com/ladellerby/me/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-from-scratch">Getting Started</a>
      <ul>
        <li><a href="#project-initialization">Project Initialization</a></li>
        <li><a href="#steup-chakra-ui">Setup Chakra-UI</a></li>
        <li><a href="#installing-json-resume">Installing JSON Resume</a></li>
        <li><a href="#setting-up-wordpress-graphql-integration">Setting up WordPress GraphQL Integration</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

### Built With

- [Next.js](https://nextjs.org/)
- [WordPress](https://wordpress.com/)
- [WPGraphQL](https://www.wpgraphql.com//)
- [ultiamte-react-resume](https://github.com/welovedevs/react-ultimate-resume)
- [tsParticle](https://github.com/matteobruni/tsparticles)
- [JSON Resume](https://jsonresume.org/)
- [Standard Resume Theme](https://www.npmjs.com/package/jsonresume-theme-standard-resume)
- [JSON Resume Exporter](https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ladellerby/me.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   <!-- Getting Started from Scratch -->

## Getting Started from Scratch

### Project Initialization

1. Create Blank Repo
2. Install Next.js typescript example `npx create-next-app --example with-typescript {project-name}`

### Setup Chakra-UI

1. Install Chakra-UI dependencies `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion @chakra-ui/theme-tools @chakra-ui/icons`
2. Add base component to import chakra theme provider in pages/\_app.tsx

```
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps } : any) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
```

3. Add theme overrides [Setup Custom Chakra Theme](https://chakra-ui.com/docs/theming/customize-theme)

```
// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })
// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}
```

### Installing JSON Resume

1. Install JSONResume `npm install -g resume-cli`
2. Install JSONResume theme `npm install -g jsonresume-theme-standard-resume`
3. Initialize the resume `resume init`
4. Validate resume creation and theme `resume serve -t standard-resume`
5. Export resume from LinkedIn and convert to JSON Resume format [JSON Resume Exporter](https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec)

### Setting up WordPress GraphQL Integration

1. Install the following plugins in your WP instance.
   [WPGraphQL](https://github.com/wp-graphql/wp-graphql/releases): This enables the GraphQL server.
   [WPGraphQL for ACF (advanced custom fields)](https://github.com/wp-graphql/wp-graphql-acf): To access these custom fields via the API. Must download from the zip from github and install manually.
   [WPGraphiQL](https://github.com/wp-graphql/wp-graphiql) - Installed w/WPGraphQL has a nice IDE to test GraphQL queries to use in Next.js
2. Create api.ts file in /utils to setup API requests to our WordPress GraphQL server.

```
const API_URL = process.env["WORDPRESS_API_URL"]!;

async function fetchAPI(query: any, { variables }: any = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPosts(preview: any) {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
            }
          }
        }
      }
      `
  );

  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  return data?.posts;
}

export async function getPost(slug: any) {
  const data = await fetchAPI(
    `
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data;
}

export default fetchAPI;
```

3. Create a pages/blog directory to hold our general blog landing page and template that is used to generate all blog post instances.
4. Create a [BlogCard.tsx](https://github.com/ladellerby/me/blob/master/components/ui/cards/BlogCard.tsx) component to display the important blog details at a glance at on /blog page.
5. Create a [BlogCardGrid.tsx](https://github.com/ladellerby/me/blob/master/components/ui/grids/BlogGrid.tsx) component to display all BlogCard components in a responsive format.
6. Create an index.tsx inside `pages/blog/` for the blog post landing page
7. Add BlogGrid component to [`pages/blog/index.tsx`](https://github.com/ladellerby/me/blob/master/pages/blog/index.tsx)
8. Create a [slug].tsx file in pages/blog. This is the template that will generate weach individual blog page.
9. Adjust the GetAllPosts GraphQL query to match your needs using the GraphiQL IDE and update it in utils/api.ts

```
query AllPosts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        id
        date
        title
        slug
        excerpt
        tags(last: 10) {
          edges {
            node {
              name
              slug
            }
          }
        }
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
      }
    }
  }
}
```

[![GrapiQL IDE Example](https://api.ladellerby.com/wp-content/uploads/2021/03/GraphiQLIDE-Display.png)](https://github.com/wp-graphql/wp-graphiql)

10. Map the API response to your interface type and populate teh props for the BlogPage componment using getStaticProps() method.

### Setting Up Storybook

1. Run `npx sb init` at the root of your directory.
2. Create a `Main.stories.tsx` file in stories directory.
3. Add a component to the file so that it shows up in the storybook ui
4. Run `npm run storybook` to start the interactive UI
5. Add more features [Storybook Add On Setup](https://storybook.js.org/docs/react/configure/storybook-addons)

### Setting up CI/CD

1. Create Digital Ocean Droplet Server + Deploy Node.js App w/ Node, Nginx, pm2, and Lets Encrypt [Guide](https://gitlab.com/TechSavagery/business/-/wikis/Deploy-Next.js-to-Ubuntu-20.04-Digital-Ocean-Droplet)
2. Create a github workflow directory at the root of the project `mkdir .github/workflows`
3. Create a file for your first action in `code {name-of-action}.yaml`

```
on:
  push: # The git action that will trigger this run
    branches: [ master ] # The branch that is listening for the push

jobs:
  deploy:
    runs-on: ubuntu-latest # server operating system that action will run on
    steps:
      - name: Deploy dev.ladellerby.com
        uses: appleboy/ssh-action@v0.1.2 # Public action used to ssh into your Digital Ocean droplet and deploy the latest changes.
        with:
          host: ${{secrets.SSH_HOST}}
          username: ${{ secrets.SSH_USERNAME }}
          password: ${{ secrets.SSH_PASSWORD }}
          script: | # bash script used to pull changes, build, and restart application.
            cd ~/me/
            git pull
            npm install
            npm run build
            pm2 restart dev-me
```

4. Create necessary secret files [GitHub Secrest Management](https://docs.github.com/en/actions/reference/encrypted-secrets)
5. Deploy these changes to the master branch in your repo and sit back to watch the magic.

### Sound Board Component

```
import { useColorModeValue, HTMLChakraProps, chakra } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";

import React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionButtonProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
const MotionButton: React.FC<MotionButtonProps> = motion(chakra.div);

const SoundPad = () => {
  const bg = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("gray.900", "white");
  return (
    <MotionButton
      zIndex={99}
      borderWidth="1px"
      borderColor={color}
      height={["325px", "325px", "325px", "325px"]}
      width={["325px", "325px", "325px", "325px"]}
      bg={bg}
      borderRadius="12px"
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: [0.5, 1, 1, 0.5, 0.5],
      }}
    ></MotionButton>
  );
};

export default SoundPad;

```

<!-- USAGE EXAMPLES -->

## Usage

<!--Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_-->

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/ladellerby/me/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@ladellerby](https://twitter.com/ladellerby) - ladellerby@techsavagery.net

Project Link: [https://github.com/ladellerby/me](https://github.com/ladellerby/me)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/techsavagery/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/techsavagery/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/techsavagery/repo.svg?style=for-the-badge
[forks-url]: https://github.com/techsavagery/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/techsavagery/repo.svg?style=for-the-badge
[stars-url]: https://github.com/techsavagery/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/techsavagery/repo.svg?style=for-the-badge
[issues-url]: https://github.com/techsavagery/repo/issues
[license-shield]: https://img.shields.io/github/license/techsavagery/repo.svg?style=for-the-badge
[license-url]: https://github.com/techsavagery/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/techsavagery
