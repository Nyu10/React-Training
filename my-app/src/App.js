import Main from "./components/Main";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
export default App;

// function ExampleComponent() {
//   return <h1>I'm learning REact</h1>;
// }

// const navbar = (
//   <nav>
//     <h1> Bob's Bistro</h1>
//     <ul>
//       <li>Menu</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

//DECLARATIVE means I can tell the computer what to do and expect it to handle the details.
//Imperative means I need to tell it how to do each step
// ReactDOM.render(<h1>FuCK</h1>,document.getElementById("root"))
// ReactDOM.render(<Page />, document.getElementById("root"));

//pascal Case: Capitalize first letter also of componenets

//React Component
//Function that returns React elements
