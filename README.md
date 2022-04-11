# My GiHub Portfolio

A fun way to show my repositories and display information about me.
This is the source code of my [GitHub Pages](https://cuncunfacu.github.io)

## Website Content
### Home Page Section
This page introduces some of my GitHub projects. You can switch languages between English and Spanish. The site's content is stored in Firestore.

### Project Detail Section
This page renders the Markdown, from the `README.md` file of the repository, and gives it a personalized style. 

## Deployment and Environments
This repo is integrated with two environments.

### Staging environment
The hosting of the staging environment is handled by Netlify. When a Commit is pushed to the branch: `staging`, an automatic build and deployment is triggered.

### Production environment
The hosting of the production environment is handled by Github Pages. [Github Pages CLI](https://www.npmjs.com/package/gh-pages-cli) is used to deploy the build. The source of the production build is pushed to the `gh-pages` branch


## Stacks used
+ React & Typescript
+ Redux
+ Netlify (For hosting staging environment)
+ Github Pages (For hosting production environment)
+ Firebase
