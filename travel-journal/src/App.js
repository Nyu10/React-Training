
import "./styles.css"
import data from "./data"
import Card from "./card"
import Header from "./header"

function App() {
  console.log(data);
  const cards = data.map(item => {

    return <Card key={item.title} {...item} />
  })
  return (
    <div >
      <Header />

      <div className="content">
        {cards}
      </div>
    </div>
  );
}

export default App;
