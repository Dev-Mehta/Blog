import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">Welcome to SimplifiedWeb!</div>
        <div 
          className="primary-content">
          <details>
          <summary class="about-me-header">About Me</summary>
          <p>
          Hello I am Dev Mehta.
          </p>
          <p>
          I am a Full Stack Django Web Developer & Part-time Blogger.I developed a certain likeliness towards coding ever since I wrote my first Hello World script in Python. I love learning new technologies and sharing the most I can. I am mostly developing Web Projects in Django or Android Projects in Java.
          </p>
          </details>
          <details>
          <summary class="about-me-header">Links</summary>
          <p><a href="https://github.com/Dev-Mehta/" id="github"><i id="githubIcon" i class='bx bxl-github'></i>GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/dev-mehta-3bb43120a/"><i class='bx bxl-linkedin'></i>LinkedIn</a></p>
          </details>
          <script>
          document.querySelector("#github").onmouseenter = () => document.querySelector("#githubIcon").classList.add('bx-tada');
          document.querySelector("#github").onmouseleave = () => document.querySelector("#githubIcon").classList.remove('bx-tada');
          </script>
        </div>
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </div>
    )}
  />
)