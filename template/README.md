# CRA-MHL
## A Professional Starter Create React App (CRA) with Must-Have Libraries (MHL) Template

[![Build Status](https://travis-ci.org/EliEladElrom/cra-template-must-have-libraries.svg?branch=main)](https://travis-ci.org/EliEladElrom/cra-template-must-have-libraries)
[![Coverage Status](https://coveralls.io/repos/github/EliEladElrom/cra-template-must-have-libraries/badge.svg?branch=main)](https://coveralls.io/github/EliEladElrom/cra-template-must-have-libraries?branch=main)
![test](https://github.com/EliEladElrom/cra-template-must-have-libraries/workflows/test/badge.svg)
![CI](https://github.com/EliEladElrom/cra-template-must-have-libraries/workflows/CI/badge.svg)
![build](https://github.com/EliEladElrom/cra-template-must-have-libraries/workflows/build/badge.svg)
[![npm version](https://badge.fury.io/js/cra-template-must-have-libraries.svg)](https://badge.fury.io/js/cra-template-must-have-libraries)
[![GitHub issues](https://img.shields.io/github/issues/EliEladElrom/cra-template-must-have-libraries)](https://github.com/EliEladElrom/cra-template-must-have-libraries/issues)
[![DeepScan grade](https://deepscan.io/api/teams/11491/projects/14393/branches/266604/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11491&pid=14393&bid=266604)
[![codecov](https://codecov.io/gh/EliEladElrom/cra-template-must-have-libraries/branch/main/graph/badge.svg?token=6HEUnw0uTD)](undefined) - [Get Badges](https://medium.com/react-courses/set-an-ultimate-react-automated-dev-ci-cycle-with-husky-jest-puppeteer-github-actions-codecov-46b923c4f8e3)

A very opinionated starter [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with Must-Have Libraries (MHL) including:

  - React v17.0.2
  - Type Checker - TypeScript ^4.2.3
  - Preprocessors - Sass/SCSS
  - State management - Redux Toolkit, Recoil
  - CSS Framework - Material-UI
  - CSS-in-JS Modules — Styled Components
  - Router - React Router
  - Unit Testing - Jest & Enzyme + Sinon
  - E2E Testing - Jest & Puppeteer
  - Folder structure
  - Generate templates
  - Format & Lint - ESLint & Prettier
  - Useful utilities - Moment, Classnames, Serve, react-snap, React-Helmet, Analyzer Bundle, react-uuid.

Custom Templates, format, and ESLint configurations.
The original Create React App README available [here](./README_CRA.md).

If you want to generate HTML in the server check [NEXT-MHL](https://github.com/EliEladElrom/next-must-have-libraries)

## Usage

```bash
yarn create react-app your-project-name --template must-have-libraries
```

Or;

```bash
npx create-react-app your-project-name --template must-have-libraries
```

`npx` package runner tool installs the most recent stable version of CRA from npm. (npx comes out of the box with npm 5.2+)

`--template` parameter points to this template, note that `cra-template-` prefix will be omitted.

## What are React Developer must know libraries and why do I need them?

Create-React-App (CRA) is a great starter project for React, you can be up and running quickly. It includes vanilla flavor packages and other opinionated packages. Additionally, it has an option to include templates or you can create your own template.

CRA already made some decisions for us, for example; build tools: Webpack over Rollup or Parcel. Task Runners npm scripts over gulp. CSS, JS, and Jest as the default, and so on.

After working & reviewing projects and libraries that help get the job done with React, it’s hard to stay neutral and not to form an opinion one way or another.

For example, when using the package manager what should you use: yarn or npm. When it comes to CSS preprocessor: Saas/SCSS, PostCSS, Less or Stylus, or maybe others. CSS Frameworks: use the main ones; Bootstrap or MaterialUI or a different one. The list goes on and on.

Another challenge I observe is that many libraries are not very easy to migrate to once you start without them so although you may not need them today, it may be worth looking into starting on the right foot.

The idea here is to help you set up CRA with the selection of certain opinionated libraries that will help you get the job done from a small project to a larger enterprise level.

## Run Scripts

Inside the project directory run using `npm` or `yarn`:

- `start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `test` - launches the test runner in the interactive watch mode.
- `build` - builds the app for production to the `build` folder. 
- `build:serve` - run a local static build using the production build using serve library. Install `npm install -g serve`.
- `build:profile` - profiling production build. 
- `eject` - exposes content of `react-script` package
- `lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `fix` - fix lints issues according to style guide set.
- `format` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `isready` - will check if the code is ready for showtime (production), run lint, format and build.
- `test:e2e` - run e2e integration testing with the help of Jest & Puppeteer.
- `test:e2e-watch` - same as test:e2e just with a watcher.
- `test:e2e-alone` - stand-alone e2e integration testing NodeJS script for testing using Puppeteer.
- `test:debug` - debug your jest tests using the debugger statement, more info [here](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).
- `coverage` - this test is to create a coverage report at needs extra setting in order to work as expected.
- `analyze` - source-map-explorer to Analyzer Bundle.
- `analyzer` - uses cra-bundle-analyzer to Analyzer Bundle.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.

## Docker

Docker hub: [https://hub.docker.com/repository/docker/elieladelrom/cra-template-must-have-libraries](https://hub.docker.com/repository/docker/elieladelrom/cra-template-must-have-libraries)

Check project running: http://localhost:8080/

````
$ docker run -p 8080:80 elieladelrom/cra-template-must-have-libraries
````

## Need bootstrap?

If you need bootstrap. Just add;
```
$ yarn add bootstrap
```
Uncomment import in index.tsx; 
```
import 'bootstrap/dist/css/bootstrap.css';
```

More here: https://create-react-app.dev/docs/adding-bootstrap

## Router + State Management

Router via React Router v5.2.0 and is set on 'AppRouter.tsx' and included in 'index.tsx', read [here](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b).

The code is set for [Recoil](https://medium.com/react-courses/integrate-recoil-with-typescript-to-share-your-state-across-react-components-8cf1a3910fae) or [Redux Toolkit](https://medium.com/react-courses/instant-learn-react-redux-toolkit-with-a-simple-minimalistic-example-3c63c296ed65) you pick.

## Unit Testing

Unit Testing supported with [Enzyme](https://airbnb.io/enzyme/) that works with [Jest](https://github.com/facebook/jest).  Additionally, [Sinon](https://github.com/sinonjs/sinon) - a standalone test spies, stubs and mocks that works with Enzyme & Jest.  

Jest and Sinon serve the same purpose. So why add Sinon? 
The answer is that there are times that you may find one framework more natural and easier to work for the specific test you need than the other so it wouldn’t hurt to have both.

You can compare the list of APIs on Jest (https://jestjs.io/docs/en/api) and Sinon (https://sinonjs.org/releases/v9.2.0/)


The 'src/setupTests.ts' file is already configured to work with enzyme using the enzyme react adapter. 

For snapshot -- update 'package.json';

```
// package.json
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
```

Note: remember to update / delete 'src/App.test.tsx' in case you update 'App.tsx'

For instance to check if a component you added
include in App.tsx;

```
import { shallow } from "enzyme";
import Calculator from "./components/SomeComponent/SomeComponent";

test('should render SomeComponent', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(SomeComponent);
  expect(calculator.exists()).toBe(true);
})
```

You can read more about unit testing: [hello-jest-enzyme-ts](https://medium.com/react-courses/unit-testing-react-typescript-app-with-jest-jest-dom-enzyme-11f52487aa18) 

To run the tests: 

`$ yarn test`

## Coverage

To set coverage we can use Jest. Jest allow us to create reports in different format and set where we want to collect these reports from (or not collect them from), as well as ensure the coverageThreshold. Take a look at my 'package.json' settings;

To get testing coverage report, you need to include the following settings in your 'package.json' file; 

```
// package.json
"jest": {
  "coverageReporters": [
    "json",
    "text",
    "html",
    "lcov"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*/*.d.ts",
    "!src/**/*/Loadable.{js,jsx,ts,tsx}",
    "!src/**/*/types.ts",
    "!src/**/store.ts",
    "!src/index.tsx",
    "!src/serviceWorker.ts",
    "!<rootDir>/node_modules/",
    "!**/templates/**",
    "!**/template/**"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    }
  }
```

In this example, I am enforcing 50% 'coverageThreshold', when I set these it can ensure that I am testing in within my threshold or get an error. That can come handy, because we can set these setting to ensure that every single function, statement, lines and branches get at least 50% or even set it to 100% test coverage.

## E2E Testing

E2E testing provided by Jest & Puppeteer.  Check the E2E folder for stand-alone and testing app.test.tsx component.  You can read more about it [here](https://medium.com/react-courses/deliver-quality-software-reduce-qa-load-integrate-end-to-end-e2e-testing-on-cra-react-a20486a39ac2?sk=c9610ea9812363b262f141f1c30ae445).

To run the E2E stand-alone and Jest & Puppeteer tests run;

`$ yarn test:e2e`

And;

`$ yarn test:e2e-alone`

## Eslint configurations

Lint set according to Airbnb style guide — as part of their style guide. Feel free to tweak `.eslintrc`.

## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your code style.

## Configure Components Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) help speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

## Debugging and Profiling

There are many options to debug such as using this run script and placing `debugger` statements
```$ yarn test:debug```. Read how on how to debug the App in [this article](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).

For Profiling you can use methods such as Chrome DevTools or the `<Profile>` Component. Here is an example;
````
// src/AppRouter.tsx

import { Profiler } from 'react'

const AppRouter: FunctionComponent = () => {
  return (
    <Profiler onRender={(id, phase, actualTime, baseTime, startTime, commitTime) => {
      console.log(`${id}'s ${phase} phase:`);
      console.log(`Actual time: ${actualTime}`);
      console.log(`Base time: ${baseTime}`);
      console.log(`Start time: ${startTime}`);
      console.log(`Commit time: ${commitTime}`);
    }}>
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
    </Profiler>
  )
}
````

Read more about profiling options [here](https://medium.com/react-courses/4-ways-to-profile-your-react-app-75b740e39ab2?sk=9e73055e0f3d99caddb0f4f229f4b160).

## Optimizing

- Prerender - almost static pages using `react-snap`. See comments in: `src/index.tsx`;
- Precache - src/index.tsx > `serviceWorker.register()`
- Analyzer Bundle - `yarn add -D cra-bundle-analyzer` -> Create the report: `npx cra-bundle-analyzer`

Read more about optimizing in [this article](https://medium.com/react-courses/optimize-react-app-best-optimzing-techniques-i-wish-i-knew-before-i-wrote-my-first-line-of-code-2b4651f45a48).

## Analyzing the Bundle Size

‘bundle-analyzer’ (https://github.com/svengau/cra-bundle-analyzer), is my prefer bundle analyzer, it's more colorful and includes all the bundles in one page instead of calling them one by one with source-map-explorer.

Install (yarn add --dev cra-bundle-analyzer) & you use the run script:
````
$ yarn analyzer
````

Other option is to use source-map-explorer (yarn add  --dev source-map-explorer);
````
$ yarn analyze
````

## Cost

Adding all these libraries from this project comes with a cost of 87 kb out of the gate (54 kb of that for Recoil).  

<b>Important</b> - if you don't use Recoil - remove it:

`$ yarn remove recoil`

React v17 costs are a split between React library itself parsed cost 129.17KB that is broken down to parsed 8.67kb (or 2.4 gzipped) and the React DOM parsed 120.5kb (or 38kb gzipped).

If you can use help with your React project or have a burning question, or an issue in your project that needs help with, I invite you to hire me as your [Coach](https://elielrom.com). My strategy is 100% results-oriented. If you want to sample how I work 1-on-1, let’s schedule a one-time deep dive [Consultation](https://elielrom.com/CoachingHourly).
Additionally, [I will tutor you in react, javascript, typescript, mongodb, node, d3.](https://www.fiverr.com/elieladelrom/tutor-you-in-react-javascript-typescript-mongodb-node-d3) 

## Where to go from here?

- [Take the interactive d3 and React Course](https://www.udemy.com/course/integrating-d3js-with-react/?referralCode=4C1ADE35AB8633B90205)
- [Take the Digital Course & get a 40 pages React book](https://www.udemy.com/course/getting-started-react17-with-must-have-libraries/?referralCode=3E6A9B9D8EBB48A913A9)
- [View the article on Medium](https://medium.com/react-courses/setting-up-professional-react-project-with-must-have-reactjs-libraries-2020-9358edf9acb3)
- [Visit my site EliElrom.com](https://elielrom.com)
- [Learning React?](https://github.com/EliEladElrom/react-tutorials)

If you like this library, don't be shy to star it 🙏