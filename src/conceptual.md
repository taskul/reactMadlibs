### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is an open source JavaScript front-end framework that was created by Facebook. It helps developers to organize their code for rendering HTML, page interactivity, code logic, management of forms. It's like creating individual Lego pieces or React components and then React framework put them all together into one file. 

- What is Babel?
    Babel helps to convert ES2015+ JavaScript code into previous older versions of JavaScript. It helps with backwards compatibility of the code. 

- What is JSX?
    JSX is JavaScript Extension Syntax, which allows us to write HTML and JavaScript together. HTML is identified by normal HTML tags, while JavaScript code is declared inside curly braces {}. 
    We use Babel to help convert JSX into JavaScript

- How is a Component created in React?
    We use functions to declare a component typically in it's own file. React will go through the list of files and find components. 
    typcal convention is to have components start with a capital letter and then use cameCase style.
    const NewComponent = () => {

    }

- What are some difference between state and props?
    props are passed into component as read only data. We can not change it, but we can use it. 
    state can be changed, and it persist throughout the use session. 

- What does "downward data flow" refer to in React?
    it refers to parents passing data to their children, and children don't pass data up the steam to the parents. 
    children can use the functions passed into them from a parents which then can change the state of the parent. 

- What is a controlled component?
    Controlled component is a component which is controlled by React state. The values in the component are controlled by React State. Like controlling values in input fields in forms. 

- What is an uncontrolled component?
    Uncontrolled components is when we use DOM to control values of React components. useRef() allows us to refer to specific DOM elements that we want to control. Controlled components are recommended for most cases in React. 

- What is the purpose of the `key` prop when rendering a list of components?
    React wants every component to have a unique key to help identify it in a stack of components. This makes it easier to find it, track it. This makes React faster at keeping track of changes by knowing what component to compare. The key prop helps React maintain component state and avoid unnecessary re-rendering. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    because if we delete an item from the array it will shift all of the items in the array which will created unwanted side effects. 

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a hook that activates at the initial render of the component and it will run after every render by default. 
    useEffect() accepts callback function and returns undefined or function. 
    It also accepts a second argument which can help control when useEffect() run like only after the first render, or to run after the first render and when ever the state changes for values useEffect is keeping track of. 
    If we have to keep track of certain variables/states in the component for changes, we would use useEffct. If there are any changes in the stsate that is being tracked the useEffect will activate and either fire up a function inside of useEffect, change State of the component, make an API call with help of Axios/Fetch. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef() allows us to control a DOM element by creating a reference to it. We can also use it to control timers. 
    it persists across renders
    it returns an object with a key 'current' that holds a values of what ever was initially assigned to useRef()
    no changing the objects does not cause a re-render

- When would you use a ref? When wouldn't you use one?
    we would use useRef() for accessing DOM elements, and for managing timers. 
    It's better to try to use other things like useState() hooks first and see if what we want to do can be done with that, before trying to consider useRef()

- What is a custom hook in React? When would you want to write one?
    Custom hooks allows us to use builtin hooks to make new custom hooks that would be reused accross different components. 
    if we want to toggle boolean state in multiple components, we can just create a toggle custom hook for that. 
    if we are making multiple API calls in different components, we can create a custom hook that will help us do that.
    If we want to save user data/state into localStorage, we can create a custom hook for that and re-use it across differnt components
