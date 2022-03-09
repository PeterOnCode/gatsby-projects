# Gatsby projects

## Creating an Agency Site

## Resources

1. [Springer Link][springer-gatsby]
2. [Nabendu the writer][nabendu]
3. [Source code on GitHub][github-apress-foundation-gatsby-projects]

### The Setup

1. Install [Gatsby][github-gatsby] globally

    ```shell
    npm install -g gatsby-cli
    ```
       

2. Create new Gatsby site

    ```shell
    gatsby new agencyDemo https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```
3. run
    
    ```shell
    gatsby develop
   ```

### Creating the Home Page

1. Create files and folders

   ```shell
   mkdir src/styles
   cd styles
   touch global.css
   ```
2. `src/styles/global.css`

   ```css
   html {
       box-sizing: border-box;
       font-size: 10px;
       font-weight: 400;
       letter-spacing: 0.075em;
       margin: 0;
   }
   
   *, *:before, *:after {
       box-sizing: inherit;
   }
   
   body {
       font-family: "Open Sans", Helvetica, sans-serif;
       padding: 0;
       margin: 0;
   }
   
   a {
       text-decoration: none;
   }
   ```
3. `src/gatsby-browser.js`

   ```js
   import "./src/styles/global.css"
   ```
4. Install some dependencies for [styled-components][styled-components]

   ```shell
   npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
   ```   
   - [gatsby-plugin-styled-components][npmjs-gatsby-plugin-styled-components] 

5. Include in  `gatsby-config.js`

   ```shell
   module.exports = {   
      plugins: ['gatsby-plugin-styled-components']
   }
   ```
   
### Creating the Index Page

1. `src/pages/index.js`

   ```js
   import React from "react"
   import { Link } from "gatsby"
   import { Banner, TextWrapper, MoreText } from "../styles/IndexStyles"
   
   export default () => (
     <div style={{ position: "relative" }}>
       <Banner></Banner>
       <TextWrapper>
         <div>
           <h2>GeekyHacker</h2>
           <p>
             One stop for <br />
             All your development <br />
             And design needs
           </p>
           <Link to="/works">Our Works</Link>
         </div>
       </TextWrapper>
       <MoreText>Learn More</MoreText>
     </div>
   )
   ```
2. Upload the `banner.jpg` image to the `static` folder. 

3. Write the styled components, `src/styles/IndexStyles.js`

   ```js
   import styled from "styled-components"

   const Banner = styled.div`
      content: "";
      display: block;
      height: 100vh;
      width: 100%;
      background-image: url('banner.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      filter: grayscale(100%) blur(2px);
   `
   ```
4. We will center the text. We need to use the positioning system, as we are showing the text over an image. (`src/styles/IndexStyles.js`)

   ```js
   // ...
   const TextWrapper = styled.div`
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
      div {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
      }
   `
   // ...
   ```
5. Add some styles to the `h2`, `p`, and `a` tags in `src/styles/global.css`

   ```css
   h2 {
       font-size: 5rem;
       opacity: 1;
       padding: 0.35em 1em;
       border-top: 2px solid white;
       border-bottom: 2px solid white;
       text-transform: uppercase;
       margin: 0;
   }
   p {
       text-transform: uppercase;
       text-align: center;
       letter-spacing: 0.225em;
       font-size: 2.5rem;
   }
   a {
       background-color: #ed4933;
       box-shadow: none;
       color: #ffffff;
       border-radius: 3px;
       border: 0;
       cursor: pointer;
       font-size: 1.5rem;
       font-weight: 600;
       letter-spacing: 0.225em;
       padding: 1.8rem 0.8rem;
       text-align: center;
       text-decoration: none;
       text-transform: uppercase;
   }
   ```
6. Add the style for the `Learn More text`, in `src/styles/IndexStyles.js`

   ```js
   const MoreText = styled.div`
     position: absolute;
     color: #ffffff;
     text-align: center;
     text-transform: uppercase;
     letter-spacing: 0.225em;
     font-weight: 600;
     font-size: 1.2rem;
     z-index: 1;
     left: 50%;
     bottom: 10%;
     transform: translate(-50%, -50%);
     &:after {
       content: "";
       display: block;
       height: 2rem;
       width: 2rem;
       left: 50%;
       position: absolute;
       margin: 1em 0 0 -0.75em;
       background-image: url("arrow.svg");
       background-size: cover;
       background-repeat: no-repeat;
       background-position: center;
     }
   `
   ```

---

[springer-gatsby]: https://link.springer.com/book/10.1007/978-1-4842-6558-1
[nabendu]: https://nabendu82.github.io
[github-gatsby]: https://github.com/gatsbyjs/gatsby
[github-apress-foundation-gatsby-projects]: https://github.com/Apress/foundation-gatsby-projects
[styled-components]: https://styled-components.com/docs
[npmjs-gatsby-plugin-styled-components]: https://www.npmjs.com/package/gatsby-plugin-styled-components
