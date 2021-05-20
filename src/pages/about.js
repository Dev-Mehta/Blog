import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({ data: { site } }) => {
	return (
	  <Layout>
		<Helmet>
		  <title>About Me — {site.siteMetadata.title}</title>
		  <meta
			name="description"
			content={"About page of " + site.siteMetadata.description}
		  />
		</Helmet>
		<div>
		<h1 className="headline">Welcome to SimplifiedWeb,</h1>
		<p className="primary-content">Your number one source for all programming related articles. We're dedicated to giving you the very best of programming content, with a focus on easily consumable content, notes pdf to refer them later, and the best in-class support for providing content.
		When I first started out, my passion for writing and providing valuable content to people drove me to create this blog so that SimplifiedWeb can offer you some of the best articles available over the internet.
		I hope you enjoy my articles as much as I enjoy offering them to you. If you have any questions or comments, please don't hesitate to <Link to="/contact">contact me</Link>.
		</p>
		<Link to="/contact" className="button -secondary">Get in Touch &rarr;</Link>
		</div>
	  </Layout>
	);
  };
  export default AboutPage;
  export const pageQuery = graphql`
	query AboutPageQuery {
	  site {
		siteMetadata {
		  title
		  description
		}
	  }
	}
  `;
  