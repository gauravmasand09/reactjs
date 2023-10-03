

const heading = React.createElement(
  "h1",
  { id: "heading" }, // here adding attributes
  "Hello World from ReactJS"
);

/* <div id="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
</div> */

// React Elememtn is by default an object only, it always creates object but 
// when it renders it in DOm it comes HTML element

const parent = React.createElement(
  "div",
  {id:"parent"},
  [
    React.createElement(
      "div",
      {id:"child"},
      [ // pass array if it has more siblings
        React.createElement( "h1",{id:"h1"},"Hello From H1 Tag"),
        React.createElement( "h2",{id:"h2"},"Hello From H2 Tag"),
        React.createElement( "h3",{id:"h3"},"Hello From H3 Tag"),
        React.createElement( "h4",{id:"h4"},"Hello From H4 Tag"),
      ]
      
    ),
    React.createElement(
      "div",
      {id:"child2"},
      [ // pass array if it has more siblings
        React.createElement( "h1",{id:"h1"},"Hello From H1 Tag"),
        React.createElement( "h2",{id:"h2"},"Hello From H2 Tag"),
        React.createElement( "h3",{id:"h3"},"Hello From H3 Tag"),
        React.createElement( "h4",{id:"h4"},"Hello From H4 Tag"),
      ]
      
    ),
    React.createElement(
      "div",
      {id:"child3"},
      [ // pass array if it has more siblings
        React.createElement( "h1",{id:"h1"},"Hello From H1 Tag"),
        React.createElement( "h2",{id:"h2"},"Hello From H2 Tag"),
        React.createElement( "h3",{id:"h3"},"Hello From H3 Tag"),
        React.createElement( "h4",{id:"h4"},"Hello From H4 Tag"),
      ]
      
    )
  ]
  
)

// thre above structure will make the code more dirty
// we cna use JSX so that the code will look more cleaner and tidy

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



