import React, { useEffect } from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html,tableOfContents, fields } = markdownRemark
  const img = "http://simplifiedweb.netlify.app" + frontmatter.thumbnail
  const url = "http://simplifiedweb.netlify.app" + frontmatter.path
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <link rel="canonical" href={url} />
        <meta property="og:image" content={img}/>
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="text/html" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content={fields.keywords}/>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: tableOfContents }}
          />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}



export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(
      absolute: true
      pathToSlugField: "frontmatter.title") 
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
      fields{
        keywords
      }
    }
  }
`