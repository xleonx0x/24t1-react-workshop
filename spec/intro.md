# 👋 Hello World! 🌎
*This exercise covers the basics of creating/installing a react project, navigating through the directory structure, and how to run your web app.*

## Setting up
Usually we create a react app using a **react based framework**. A framework is essentially a structure you can build your software on so you aren’t starting with an empty directory. For simplicity we will not start with one, and are instead going to use a tool called [Vite](https://vitejs.dev/).

In the terminal, enter
```
$ npm create vite@latest [YOUR_PROJECT_NAME_HERE] -- --template react
$ cd  [YOUR_PROJECT_NAME_HERE]
```

To run the application, first run `npm i` to install all the project dependencies, then `npm run dev`, and copy paste the link http://localhost:5173/ into your browser to view the app! Every time you make changes, the page will automatically refresh when you save so you don't need to manually reload the page every time :)

```
$ npm i
    ...
$ npm run dev

  VITE v5.0.11  ready in 833 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
Note that localhost means that we are running a local server, so your site will stop working after you have terminated the connection with `^C` or `^D`.

## Directory Structure
Depending on the framework used for your project, your directory structure may look a little bit different, but will usually contain the following files or directories:

| File/dir           | Description                                                                                                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| App.jsx            | Your project’s main hub! Usually will contain some routes to different pages.                                                                                                     |
| index.css          | Any global styling can be found here (basically css that will show up on all your pages)                                                                                          |
| types.ts           | Depending on the scope of your project, this might be a directory with a few files in it. But this contains any interfaces or types that you may need to use to pass data around. |
| assets/            | Any media you might use in your `.tsx` files!                                                                                                                                     |
| components/ props/ | Reusable chunks of code + styling that you have broken your page down into. Props are literally just components that take in ‘properties’.                                        |
| pages/             | The main pages that your ‘app’ has. Usually you would have a route in `App.tsx` to each page.                                                                                     |

Note that since Vite is not a framework, some of these files/directories are missing, but you should put your code inside the `src` directory (and optionally make subdirectories to organise your exercises).

## File anatomy
Open `src/App.jsx`, you should be greeted by some pre-written code; don't worry about what it does yet, but this can give you a general idea of how a **component** is laid out.

![1-1-1](./images/1-1-1.png)

In React, you'll mainly be working with `.jsx` files, this stands for **J**ava**S**cript **X**ML. Basically, it allows you to combine markup and javascript together, rather than putting them in seperate files. We will go further into this later :)

## [TASK 1.1] Hello World!
⚠️ You should clone this repository for this, and the subsequent exercises. `App.jsx` will be setup differently for easier use, and instead you'll mainly be working in `src/exercises/`.

You have been given an empty page, your task is to sucessfully render "Hello World", such that your page looks somewhat like this:

![1-1-2](./images/1-1-2.png)

**[Solution: 1-1-helloWorld](../src/answers/1-1-helloWorld.jsx)**


## Writing markup
Plain markup is very similar to html, but wtih a couple more rules.
Similar to html, we can also style markup elements with css by importing the file at the top of the page, and using the `className` or `id` fields to label.

### html
```html
<h1>Kirby's questlog</h1>
<img
  src="url/to_a_photo.png"
  alt="Kirby"
  class="photo"
>
<ul>
  <li>Invent new traffic lights
  <li>Rehearse a movie scene
  <li>Improve spectrum technology
</ul>
```
### jsx
- We must return a **singular** root div; it can be a regular div or an empty one like below called a fragment.
- All brackets must now be closed; you can see so in the `<img>` and `<li>` elements.
```jsx
<>
  <h1>Kirby's questlog</h1>
  <img
    src="url/to_a_photo.png"
    alt="Kirby"
    className="photo"
  />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve spectrum technology</li>
  </ul>
</>
```

## [TASK 1.2] Bad Time
Great! You should now have an idea of how and where to put your markup :D Let's have a little go at a more complicated example;

In `src/exercises/1-2-badtime/`, try to recreate the following page. You may need to create and import your own css file in order to style some elements to make it match the result.

![1-1-3](./images/1-1-3.png)

- Dialogue inside the textbox should be represented with an unordered list.
- Use an empty div for the health bar (yellow box) at the bottom
- URL for the image is `https://static.wikia.nocookie.net/undertale/images/0/0f/Sans_battle_idle.gif/`

Don't worry if your styling isn't super on point, though it would be a good idea to get some practice in!

**[Solution: 1-2-markup](../src/answers/1-1-helloWorld.jsx)**