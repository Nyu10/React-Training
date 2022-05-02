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
//Imperative means I need to tell it how to do each step
import Header from "./Header";
function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn react</h1>
      <ol>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook </li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  );
}
function Footer() {
  return (
  <footer>
    <small> 2021 Ziroll development. ALl rights reserved</small>
  </footer>);
}
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer/>
    </div>
  );
}
// ReactDOM.render(<h1>FuCK</h1>,document.getElementById("root"))
ReactDOM.render(<Page />, document.getElementById("root"));

//pascal Case: Capitalize first letter also of componenets

//React Component
//Function that returns React elements
