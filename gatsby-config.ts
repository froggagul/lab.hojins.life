import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Hojin Lab",
    description:
      "Personal research website featuring publications, projects, and curriculum vitae for Hojin.",
    siteUrl: "https://lab.hojins.life",
    author: "Hojin"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet"
  ]
};

export default config;
