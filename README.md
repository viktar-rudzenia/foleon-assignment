# Foleon assignment

## Link to application

[Link to the deployed application](https://foleon-assignment.vercel.app/)

## Project overview. Stack

[Next.js](https://www.npmjs.com/package/next) 14 (App Router approach)

[TypeScript](https://www.npmjs.com/package/typescript) v5

Styles approach: module [SCSS](https://www.npmjs.com/package/sass)

Linters and formatters: [eslint](https://www.npmjs.com/package/eslint) and [prettier](https://www.npmjs.com/package/prettier)

Component library: [Ant Design](https://www.npmjs.com/package/antd)

API: [SWR](https://www.npmjs.com/package/swr?activeTab=readme) with [Axios](https://www.npmjs.com/package/axios) fetcher

Tests: [Cypress](https://www.npmjs.com/package/cypress) for e2e tests, [Jest](https://www.npmjs.com/package/jest) and [Testing library](https://www.npmjs.com/package/@testing-library/react) for unit tests

## Setup instructions. How to start project locally?

Install dependencies

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to run tests?

### To run unit tests use

```bash
npm run test
```

or

```bash
npm run test:watch
```

### To run cypress tests use

1. Run the project locally

```bash
npm run dev
```

2. Run Cypress

```bash
npm run cypress:open
```

## Evaluation Criteria Details

## Acceptance Criteria

### 1. Display a list of (my) publications

> Yes, I have developed a '/publications' Page that lists all publications with the following features:

> 1. Pagination for easy navigation through large lists

> 2. Search functionality to find publications by name

> 3. Filtering by identifier for precise results

> 4. Visual indicators for loading, error handling, and notifications when no publications are found

### 2. Filter the publications

> Yes, I have implemented a filtering feature for publications based on their identifier, located at the top of the `/publications` page. To enhance performance and user experience, I also added debounce functionality to the input, which reduces the frequency of filter updates as users type.

### 3. Search the publications by name

> Yes, I have implemented a search feature for publications by name, available on the `/publications` page. This functionality includes debounce to improve performance by reducing the frequency of search queries as users type.

### 4. Display a publication’s information

>  have implemented functionality to display each publication’s information, including its image and name, on the /publications page. Users can click on a publication to open a modal that provides additional details.

## Notes Criteria

### 5. Currently, the API V2 doesn’t return images (or screenshots) from a publication. It is ok to ignore screenshots/images in your design

> I have taken into account that the API V2 does not return images or screenshots. To ensure a better user experience, I display a placeholder image in the absence of a publication’s icon.

### 6. Expect our clients to have a high number of resources. Therefore pagination is recommended

> Yes, I have implemented pagination to handle a high volume of resources. The feature includes the ability to adjust the number of elements displayed per page, addressing various edge cases that may arise.

### 7. In a normal story, we would ask our design department to create designs. However, in this specific situation, you can come up with something yourself, or take inspiration from this link

> I created my own design for the project. I used Foleon’s logo and background color from their website to ensure the app has a nice and consistent look.

## Project features

> Designed the application architecture to be scalable and maintainable, adhering to the latest web standards.

> Implemented a "Not Found" page to handle unknown routes and provide users with informative feedback.

> Added an Error page to manage application errors gracefully and avoid displaying a blank screen to users.

> Configured an Axios instance to include a Bearer token in the Authorization header for all requests, ensuring secure communication.

> Created a layout folder to organize and manage the Footer, Header, and Content components effectively.

> Established a styles folder to consolidate mixins, variables, and functions into a single file, with configuration for importing into all .scss files.

> Ensured that search and filter inputs are always visible at the top of the publications page, preventing any overlap and maintaining accessibility.

> Positioned pagination controls consistently at the bottom of the publications page, allowing users to navigate between pages and adjust the number of displayed items.

> Addressed all edge cases related to loading and error states when fetching data from the API.

> Integrated Jest with Testing Library for unit tests and Cypress for end-to-end (e2e) tests to ensure comprehensive test coverage.

> etc.