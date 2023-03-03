import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";
import { ThemeConsumer } from "styled-components";
import themeChanger from "./themeChanger";
import { Helmet } from "react-helmet";
import MailChimpForm from "./MailChimpForm";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <>
    <Helmet>
      <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css" />
    </Helmet>
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <Link to="/"><img src="/profile_pic.png" />{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
        </header>
        {children}
        <MailChimpForm />
        <footer className="site-footer">
          <p>
            &copy; 2021 - {new Date().getFullYear()} SimplifiedWeb &bull; Crafted with{" "}
            <span role="img" aria-label="tea">
              ☕
            </span>{" "}
            by <a href="https://github.com/Dev-Mehta/">Dev Mehta</a>
          </p>
        </footer>
      </div>
    </>
  );
};
