# 247

## [useEffect](https://reactjs.org/docs/hooks-effect.html) Hook
  - The Effect Hook lets you perform side effects in function components.



# git workflow
## steps
  1. **clone:**
   - get the central repository
   - ```
     git clone <git-url>
     ```
  2. **make your local changes:**
   - ```
     git add <changed-files>
     ```
    -This "stages" your files, preparing them to be commited.

   - ```
     git commit
     ```
     - commit your files, creating new commit history

   3. **pull and rebase the central repo**
    - ```
      git pull --rebase origin main
      ```
   - this makes sure all commit history is synced and pushes avoid conflicts
   - "rebasing" is just merges your changes with the repo and adding your commit history
   - If there is a conflict, git will tell you which files.

  4. **If any merge conflicts: then resolve**
   - Make your changes to the conflicting files.
   - $ git add <changed-files>
   - $ git rebase --continue
   - If you want to go back safely: $ git rebase --abort

  5. **Publish / Push your feature**
   - $ git push origin main


## React Hooks and State
  - **"Hooks"** is just a fancy word for a set of functions that give *Functional Components* more power.
  > Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

  - **"State"** is just adding persistant memory to a *Functional Component*
  - You add state to a component with the ***useState() hook***.
  - [useState()](https://reactjs.org/docs/hooks-state.html) is part of the main *React Library*

### Practice
### Objective: Add state to the Navbar
  1. create state for the Navbar call 'tab' with inital state of 'home'
  2. print your tab state with console.log
  2. when the Help tab or Statistics tab is pressed, change the tab state to 'help' or 'statistics'; depending on which tab is pressed


# Learning React Components

## Theory
### [Components](https://reactjs.org/docs/components-and-props.html)
  > Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
  > Conceptually, components are like JavaScript functions.

  - Here is a very simple React Component
  ```
  function Welcome() {
    return <h1>Hello</h1>;
  }
  ```


### History
  - ***Understand:*** [Functional Components vs Class Components](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/)
  - Class components are older and still used but Functional components are the new standard.

## Practice
### Task: Understanding Import and Export components
  1. Go to client
  2. Inside the src/ folder, create a new folder called *Navbar*
  3. Inside the new Navbar/ folder, create a file called *Navbar.js*
  4. Write a functional component called Navbar() that returns some **"JSX"** aka HTML
   - Ways to export:
      - ```
        export default function MyComponent() {
          return <p>My Component</p>
        }
        ```
      - ```
        function MyComponent() {
          return <p>My Component</p>
        }

        export default MyComponent;
        ```
      - ```
        export default const MyComponent = () => {
          return <p>My Component</p>
        }
        ```
      - ```
        const MyComponent = () => {
          return <p>My Component</p>
        }

        export default MyComponent
        ```
  5. Inside **src/App.js:**
   - Move all the navbar *JSX(html)* into Navbar.js
   - import your new Profile component into App.js and display it.

## Rock like Lawerence
![lawerence](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkNb2-iv8lVXn4vVf70kQxDkEQbHNj2z_vaw&usqp=CAU)

# Axios
## Ojective:
  Create your own custom web library using [Axios.js](https://github.com/axios/axios),
  to request the question for the day from the server.

  Axios: A "Promise based HTTP client for the browser and node.js".
  
  ***Axios is similar to fetch() but more comprehensive. fetch() is newer.

### Tasks
1. [Install the axios package](https://axios-http.com/docs/intro) as a regular dependency.
  - Quick note on the difference between a Dependency and a **Dev**elopment dependency: [Dependency vs DevDependency](https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/#:~:text=A%20dependency%20is%20a%20library,version%20of%20an%20npm%20package.)
  
2. Create a new library file called web.js inside the lib/ folder.
  - [Library File](https://en.wikipedia.org/wiki/Library_(computing))
  - [Utility File](https://en.wikipedia.org/wiki/Utility_software)
  - [Short Summary of lib/ vs util/](https://recipes.coding-cloud.com/recipes/61cc25af513bed0017dfcf9d)
  
3. In web.js file:
  - At the top of the file, load axios using [CommonJS syntax](https://nodejs.org/api/modules.html#modules-commonjs-modules)
  
  - Create an [axios instance](https://axios-http.com/docs/instance) with a single [Request Configuration](https://axios-http.com/docs/req_config) property of:
    - baseURL: http://247api-env.eba-ndr8iuri.us-west-2.elasticbeanstalk.com/
    ***Instance means an example or a case，like 'for instance'

  - Write a function called getQuestions(), that uses the axios instance to send a get request.

  - Test getQuestions by calling it and printing the results.

  - If its working properly: export the module using [CommonJS module exports](https://nodejs.org/api/modules.html#moduleexports) at the bottom of web.js.
  Syntax:
  ```
  module.exports = { getQuestions }
  ```

## GOOD LUCK! You are Amazing :)
![ratatouille](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGQhKWPQ6qPW0qUJVvQjaIoBLf0UHifRSpA&usqp=CAU)
