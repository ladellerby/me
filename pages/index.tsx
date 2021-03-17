import React from "react";
import Layout from "../components/layouts/Layout";
import HomeHero from "../components/sections/HomeHero";

const IndexPage = () => {
  return (
    <div>
      <Layout title="Home | LaDell Erby">
        <HomeHero
          title="LaDell Erby"
          subtitle="Web Engineer: Converting visions into seamless web experiences one byte and at a
          time."
          ctaLink1="/about"
          ctaText1="About Me"
          ctaLink2="/blog"
          ctaText2="Blogs"
        />
      </Layout>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
        #tsparticles {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          bottom: 0;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};
export default IndexPage;
