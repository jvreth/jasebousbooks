[![Netlify Status](https://api.netlify.com/api/v1/badges/2a236ca4-8a7a-42c9-b15f-28a2d887da9b/deploy-status)](https://app.netlify.com/sites/jasebousbooks/deploys)

# Jasebousbooks Book blog

## Dependencies

- [gatsbyJS](https://www.gatsbyjs.org/)
- [yarn](https://yarnpkg.com/)

## Get the repo running

1. Clone the repo
2. In the root directory run `yarn install`
3. Run `gatsby develop` for developing and watching

## 💫 Deploy

[Netlify](https://netlify.com/)

### Frontmatter

| Variable    | Description | Value       |
| ----------- | ----------- | ----------- |
| title       | Title       | string |
| date        | date when the pos is written |  date  |
| description | short description of the post | string  |
| thumbnail   | Image within the blog post |  image path  |
| category    | Category of the post |  string  |
| rating      | If it's a review the rating of the book | float |
| arc         | If it's a review and a arc  | boolean |
