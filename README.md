# Womanly Mag
[![Build Status](https://travis-ci.org/rfarine/womanlymag-new.svg?branch=master)](https://travis-ci.org/rfarine/womanlymag-new)

## Setup

1) Clone this repo!

2) Install Yarn: `npm install yarn --global`

3) Create a `.env` file in the root directory and grab your environment variables from a fellow dev. All variables included in `.env.example` are required. Staging/production builds will fail if these environment variables are not included in Netlify. So, if you ever add a required environment variable, make sure you add it to Netlify!

## Develop

Run `yarn develop`.

Visit `http://localhost:8000/`.

If you'd like to see the GraphQL schema, check out `http://localhost:8000/___graphql`.

## Code Quality

### Testing

We use [Jest](https://facebook.github.io/jest/) to test our components.

When developing, it's best to run `yarn tdd` (continuous test runs) in one pane alongside your dev server. TDD, babay. Make sure to keep writing tests as you add components/pages.

When committing code, we use [Husky](https://github.com/typicode/husky) pre-commit hooks to run `yarn test` (a single test run) as well as `yarn format` (more on that in the following section.)

### Prettier

We use [Prettier](https://github.com/prettier/prettier) to create consistently formatted code. As mentioned above, it's automatically run when committing, but if you're curious and want to see it in action, run `yarn format`.

## Deploy to Staging

Coming soon.

## Deploy to Production

Coming soon.