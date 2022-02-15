import React  from 'react'

class Note extends React.Component {
  render() {
    return (
      <div className='one'> 
          <h1>React.js</h1>
          <p>React.js:- React is a JavaScript library developed by Facebook SPA - </p>

          <h2>single page application :</h2>
          <p>Any web application, in which when you are clicking on any 
             button or selecting option from navigation bar then if your page which means browser 
             page is reloading then that means that application is your multi - page application. 
             If it does not reload the browser page and just only updates the page without reloading
             then that application is known as Single Page application. When you create 
             React application using CRA, (create-react-app boilerplate, developed by Facebook) 
             it always create the application which will be Single page application.
          </p>

          <h2>component structure :</h2>
          <p>Whenever we are creating React application so the complete 
             screen component will be broke down into smaller components. We do this thing to 
             make sure that these components can be reused at any time when required. React we 
             have two different types of components : Class and Functional. In React we also 
             create smart and dumb components. Smart are the ones in which state variable is 
             there and you can do all the data manipulation in this. Dumb are the ones which 
              only used for UI, they receive data from parent component as props.
          </p>


        <h2>Virtual DOM :</h2>
        <p>:DOM is a document object model, created by converting HTML CSS and 
JS Real DOM, which is an object which gets created whenever any React application 
gets loaded on the screen for the first time., whenever React components gets mounted
on the screen for the first time. Now when any user makes any changes on the screen 
like button click because of which the state variable will get updated so in this case
the changes will not directly go to Real DOM, instead in react we have concept known 
Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the 
time of mounting of react component so it is a copy of your real dom. Another virtual 
dom is the dom which contains the new changes, updated state variables values. 
Now these two virtual doms will get compared with each other and will check for 
the new changes. this complete procedure is known as diffing algorithm. Now the new 
changes will be updated in your Real dom. this procedure is known as Recoinciliation.
       </p>

       <h2>Good community support :</h2>

       <h2>Build User interface :</h2>
       <p>used to build Front-end application.</p>

       <h2>JSX :</h2>
       <p>Writing HTML inside JS, because in React we write HTML CSS and JS in same file, unlike Angular.</p>     

       <h2>Easy learning curve :</h2>
       <p>It requires only the knowledge of Javascript. But in case of Angular it requires Typescript.</p>

        <h2>React Native:</h2>
        <p>Using React we can create mobile - application as well which supports both Android and iOS.</p>





          </div>
    )
  }
}
export default Note