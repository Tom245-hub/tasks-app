# Tasks App

Live:

## Run the project

- clone repository:
- npm run install
- npm run dev

## Project structure

- components/FormElements - reusable components
- components/Icons - reusable compoennts (SVG)
- components/UI - reusable components
- components/Templates - components with data from context
- types - TypeScript types
- context - context provider

## Approach

- I used Context to manage state between template components to avoid prop drilling if we expand the project.
- I separated reusable components so that we can use them in another components if we expand the project.
- I used React Fragment in components even if there is only one child, because in my opinion this aproach is more readable.

## Additional features

- Buttons with hover effect.
- Pressing icon trash deletes the task.
- Pressing enter on input text adds new task.
- If list is empty app displays the information about it.

## The project can be expanded with functions

- Confirm Popup after press delete icon.
- Input text validation.
- Tasks count on the buttons: show all(12), hide complated (3).
- Edit task popup.
