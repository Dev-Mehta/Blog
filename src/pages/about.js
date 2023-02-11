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
			<h1>Welcome to SimplifiedWeb,</h1>
			<p>
				Hello there! My name is Dev, and I am a Full Stack Django Web Developer and Part-time Blogger. 
			<p/>
			<p>
				I have a deep love for coding that started with my first "Hello World" script in Python. I am constantly learning and exploring new technologies, and I am always eager to share my knowledge with others.
			</p>
			<p>
				I have expertise in Django and Java, and I use these skills to develop web and mobile applications that are both functional and user-friendly. As a Full Stack Django Web Developer, I have the ability to work on both the front-end and back-end of web applications, making me a valuable asset in the tech industry.
			</p>
			<p>
				In addition to my passion for coding, I am also a part-time blogger. I love to share my experiences and knowledge with others, and I believe that by sharing my skills, I can help others grow in their careers and learn from my expertise.
			</p>
			<p>
				Stay tuned for my latest updates, tutorials, and insights into the world of web development. I am excited to share my journey with you and to help you grow in your own career.
			</p>
			<p>
				Thank you for visiting my page, and I hope you enjoy my content!
			</p>
			<p>Don't hesitate to <a href="mailto:devbmehta04@gmail.com">mail me</a> if you have any queries.
			</p>
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
  