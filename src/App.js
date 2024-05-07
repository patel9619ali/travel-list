import {Fragment, useState} from 'react';
import './App.css';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
return(
  <Fragment>
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </Fragment>
)

}
function Logo(){
  return(
    <h1>Far Away</h1>
  )
}
function Form(){
  const [search,setSearch] = useState("");
  const [quantity,setQuantity] = useState(1);
  function handleSubmit(e){
    e.preventDefault();
    if(search.length){
      let newItems = {search , quantity , id: Math.ceil(Math.random() * 100000) , packed: false};
      setSearch("");
      setQuantity(1);
      console.log(newItems)
    }
  }
  return(
    <div className="add-form" onSubmit={handleSubmit}>
      <p>What d you need for your trip</p>
    <form className='form_wrapper'>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>{Array.from({ length: 20 }, (_, index) => index + 1).map(number=><option value={number} key={number}>{number}</option>)}</select>
      <input placeholder="Write something" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      <button>Add</button>
    </form>
    </div>
  )
}
function PackingList(){
  return(
    <div className="list">
      <ul>
        {initialItems.map(items=><Items items={items} key={items.id}/>)}
      </ul>
    </div>

  )
}

function Items({items}){
  // console.log(items);
  return(
  <>
    <li className={items.packed ? "strick": ""}>{items.quantity} {items.description}</li>
  </>
  )

}
function Stats(){
  return(
    <div className="stats">You have X items in your list</div>
  )
}
export default App;
