# A starter CRA professional React 17 project with must-have ReactJS libraries template

An opinionated starter [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with must-have ReactJS libraries including:

  - React v17
  - Type Checker - TypeScript
  - Preprocessors - Sass/SCSS
  - State management - Redux Toolkit, Recoil
  - CSS Framework - Material-UI
  - Styled Components
  - Router - React Router
  - Unit Testing - Jest & Enzym + Sinon
  - Folder structure
  - Generate templates
  - Format & Lint - ESLint & Prettier
  - Useful utilities - Lodash, Moment, Classnames

Custom Templates, format, and ESlint configurations.
The original Create React App README available [here](./README_CRA.md).

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

After working & reviewing projects and libraries that help get the job done with React, it’s hard to stay natural and not to form an opinion one way or another.

For example, when using the package manager what should you use: yarn or npm. When it comes to CSS preprocessor: Saas/SCSS, PostCSS, Less or Stylus, or maybe others. CSS Frameworks: use the main ones; Bootstrap or MaterialUI or a different one. The list goes on and on.

Another challenge I observe is that many libraries are not very easy to migrate to once you start without them so although you may not need them today, it may be worth looking into starting on the right foot.

The idea here is to help you set up CRA with the selection of certain opinionated libraries that will help you get the job done from a small project to a larger enterprise level.

To become a true professional React developer is more than just knowing the React library itself. There are tools, libraries, and others that you are expected to know as React is not a framework. React is a JavaScript library developed by Facebook just to handle the user interface and nothing more.

To help figure out the pieces that will turn react into a full-blown framework, check out the roadmap below;

![Image of Must know lib](https://miro.medium.com/max/700/1*-A9vh80AqLKLIyV4HIA02g.png)
Photo Credit: https://github.com/adam-golab/react-developer-roadmap

## Run Scripts

Inside the project directory run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `yarn fix` - fix lints issues according to style guide set.
- `yarn format` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `yarn isready` - will check if the code is ready for showtime (production), run lint, format and build.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.

## Unit Testing

Unit Testing is supported with [Enzyme](https://airbnb.io/enzyme/) that works with [Jest](https://github.com/facebook/jest).  Additionally, [Sinon](https://github.com/sinonjs/sinon) - a standalone test spies, stubs and mocks that works with Enzyme & Jest.  

Jest and Sinon serve the same purpose. So why add Sinon? 
The answer is that there are times that you may find one framework more natural and easier to work for the specific test you need than the other so it wouldn’t hurt to have both.

You can compare the list of APIs on Jest (https://jestjs.io/docs/en/api) and Sinon (https://sinonjs.org/releases/v9.2.0/)


The 'src/setupTests.ts' file is already configured to work with enzyme using the enzyme react adapter. 

For snapshot -- update 'package.json';

`` 
  "jest": {
    "snapshotSerializers": ["enzyme-to-json/serializer"]
  }
``

Note: remember to update / delete 'src/App.test.tsx' in case you update 'App.tsx'

For instance to check if a component you added
include in App.tsx;

import { shallow } from "enzyme";
import Calculator from "./components/SomeComponent/SomeComponent";

test('should render SomeComponent', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(SomeComponent);
  expect(calculator.exists()).toBe(true);
})

You can read more about unit testing: [hello-jest-enzyme-ts](https://medium.com/react-courses/unit-testing-react-typescript-app-with-jest-jest-dom-enzyme-11f52487aa18) 

To run the tests: 

`$ yarn test # or npm run test`

## Eslint configurations

Lint is set according to Airbnb style guide — as part of their style guide. Feel free to tweak `.eslintrc`.

## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your code style.

## Configure Components Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) help speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

## Where to go from here?

Read this article that breaks down the libraries that were added to this project and why they were added.
- [View on Medium](https://medium.com/react-courses/setting-up-professional-react-project-with-must-have-reactjs-libraries-2020-9358edf9acb3)
- [Are you learning React?](https://github.com/EliEladElrom/react-tutorials)
- [Visit my site EliElrom.com](https://elielrom.com)

Happy coding ✌


