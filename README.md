# Gatsby projects

## Creating an Agency Site

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
[github-gatsby]: https://github.com/gatsbyjs/gatsby
[styled-components]: https://styled-components.com/docs
[npmjs-gatsby-plugin-styled-components]: https://www.npmjs.com/package/gatsby-plugin-styled-components