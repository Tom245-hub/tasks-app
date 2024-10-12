# Tasks App

## First run application

- clone repository
- npm run install
- npm run dev

## Project structure

- components/FormElements - reusable components
- components/Icons - reusable compoennts (SVG)
- components/UI - reusable components
- components/Templates - components with data from context
- types
- context - context provider

tmpUid - temporary UID generated in the frontend application. After saving to the database it will have an ID (number).

## Approach

- I used Context to manage state between template components to avoid prop drilling if we expand the project
- I separated reusable components so that we can use them in another components if we expand the project
- I used React Fragment in components even if there is only one child, because in my opinion this aproach is more readable
