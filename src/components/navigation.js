import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import ThemeChanger from "../components/themeChanger";

import styled from "styled-components";
const MobileMenu = styled.div`
  .mobile-menu-container {
    border-radius: 50%;
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 999;
  }
  .mobile-menu-container .circle {
    background-color: var(--btn-hover-text-color);
    border-radius: 50%;
    -khtml-border-radius: 50%;
    z-index: 99;
    height: 55px;
    width: 55px;
    transition: all 0.3s ease-in-out;
  }
  nav.mobile-menu ul {
    visibility: hidden;
    position: fixed;
    right: 15px;
    bottom: 50px;
    z-index: 100;
    transform: translateY(10px);
    transition: transform 0.5s ease-in-out;
    background: var(--input-bg);
    list-style-type: none;
  }
  nav.mobile-menu ul li {
    margin: 15px 0;
    text-align: right;
  }
  nav.mobile-menu ul li a {
    transition: opacity 0.7s ease-in-out;
  }
  nav.mobile-menu ul li a:hover {
    text-decoration: none;
  }
  nav.mobile-menu button {
    background-color: var(--mobile-nav-bg);
    border: 0;
    border-radius: 50%;
    padding: 0;
    height: 57px;
    width: 57px;
    text-align: center;
    position: fixed;
    bottom: 14px;
    right: 14px;
    z-index: 100;
  }
  
  nav.mobile-menu button .line {
    background-color: var(--mobile-nav-fg);
    display: block;
    margin: 4px auto;
    height: 2px;
    width: 20px;
    transition: transform 0.3s ease-in-out;
  }
  .mobile-menu-container.open .circle {
    transform: translateX(50px) scale(14);
    background: var(--input-bg);
    border: 1px solid var(--btn-hover-text-color);
  }
  .mobile-menu-container.open .mobile-menu ul {
    visibility: visible;
    transform: translateY(0);
    background: var(--input-bg);
  }
  .mobile-menu-container.open nav.mobile-menu ul li a {
    opacity: 1;
    color: var(--btn-text-color);
  }
  .mobile-menu-container.open .mobile-menu button .line.line-top {
    transform: translateY(3px) rotate(225deg);
    transform-origin: center;
  }
  .mobile-menu-container.open .mobile-menu button .line.line-bottom {
    transform: translateY(-3px) rotate(-225deg);
    transform-origin: center;
  }
  @media only screen and (max-width: 1023px) {
    .mobile-menu-container {
      display: block;
    }
    .navigation {
      display: none;
    }
  }
`;
export default function Navigation() {
  const query = useStaticQuery(graphql`
    query navigationQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              thumbnail
            }
          }
        }
      }
    }
  `);
  const latestPost = query.allMarkdownRemark.edges[0].node;
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <MobileMenu>
        <nav className="navigation">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
        <div
          className={
            navOpen ? "mobile-menu-container open" : "mobile-menu-container"
          }
        >
          <nav className="mobile-menu">
            <ul style={{maxWidth: '220px'}}>
              <li style={{textAlign: 'left'}} className="navigation-link">
                <Link to={latestPost.frontmatter.path}>
                  {latestPost.frontmatter.title}
                </Link>
              </li>
              <li className="navigation-link">
                <Link to="/about">About Me</Link>
              </li>
              <li className="navigation-link">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="navigation-link">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
            <button onClick={() => setNavOpen(!navOpen)}>
              <span className="line line-top"></span>
              <span className="line line-bottom"></span>
            </button>
          </nav>
          <div className="circle"></div>
        </div>
      </MobileMenu>
      <ThemeChanger />
    </div>
  );
}
