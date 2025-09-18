import React, { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadataQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      siteUrl: string;
    };
  };
}

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const data = useStaticQuery<SiteMetadataQuery>(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const { title, description, author, siteUrl } = data.site.siteMetadata;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
      </Helmet>
      <main>{children}</main>
      <footer style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--color-muted)" }}>
        © {new Date().getFullYear()} {author}. Built with Gatsby &amp; TypeScript.
      </footer>
    </>
  );
};

export default Layout;
