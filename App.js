

const heading = React.createElement(
  "h1",
  { id: "heading" }, // here adding attributes
  "Hello World from ReactJS"
);

console.log("heading",heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root",root)
root.render(heading);
