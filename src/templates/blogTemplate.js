import React, { useEffect } from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Prism from "prismjs"
import loadLanguages from "prismjs/components/index.js"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  useEffect(()=> {
    Prism.highlightAll();
  })
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html,tableOfContents, fields } = markdownRemark
  const img = "http://simplifiedweb.netlify.app" + frontmatter.thumbnail
  const url = "https://simplifiedweb.netlify.app" + frontmatter.path
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <link rel="canonical" href={url} />
        <meta name="title" content={frontmatter.title} />
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={fields.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={img} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta property="twitter:description" content={frontmatter.description} />
        <meta property="twitter:image" content={img} />

        // <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.js"></script>
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
              <h1 className="post-title" style={{backgroundColor: 'rgba(0,0,0,0.6)', padding: '8px', borderRadius: '8px'}}>{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
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