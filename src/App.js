import React, {Fragment, useState} from 'react';
import './App.css';
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
const [items,setItems] = useState([]);
function handleAdd(item){
  setItems((items)=>[...items,item]);
}
function handleDelete(idToDelete){
  setItems(items.filter(items => items.id !== idToDelete))
}
function handleClear() {
  alert("Are you Sure you want to clear all ther items");
  setItems([]);
}
function handleCheckbox(idToChecked,id){
  setItems(items.map(item=> {
    console.log(item);
    if(item.id === id){
      item.packed = !idToChecked;
      console.log(item,"item1");
      return item;
    }
    console.log(item,"item2");
    return item;
  }
  ));
}
return(
  <Fragment>
    <Logo/>
    <Form onAdditem={handleAdd}/>
    <PackingList items={items} handleDelete={handleDelete} handleCheckbox={handleCheckbox}/>
    <Stats items={items}/>
    <Sort items={items} handleClear={handleClear}/>
  </Fragment>
)

}
function Logo(){
  return(
    <h1>Far Away</h1>
  )
}
function Form({onAdditem}){
  const [search,setSearch] = useState("");
  const [quantity,setQuantity] = useState(1);
  
    function handleSubmit(e){
    e.preventDefault();
    if (!search.length) return;
      let newItems = {search , quantity , id: Math.ceil(Math.random() * 100000) , packed: false};
      onAdditem(newItems);
      setSearch("");
      setQuantity(1);
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
function PackingList({items,handleDelete,handleCheckbox}){
  return(
    <div className="list">
      <ul>
        {items.map(items=><Items items={items} key={items.id} handleDelete={handleDelete} handleCheckbox={handleCheckbox}/>)}
      </ul>
    </div>

  )
}

function Items({items,handleDelete,handleCheckbox}){
  // console.log(items,"In list");
  return(
  <>
    <li className={items.packed ? "strick": ""}><input type="checkbox" value={items.packed} onClick={()=>handleCheckbox(items.packed,items.id)}/>{items.quantity} {items.search}<span className="x_factor" onClick={()=>handleDelete(items.id)}>X</span></li>
  </>
  )

}
function Stats({items}){
  let numItems = items.length;
  let packeditem = items.filter(items => items.packed);
  let percentagePackedItems = (packeditem.length/numItems)*100;
  return(
    <div className="stats">{`You have ${numItems} items in your list and ${packeditem.length == 0? "0":percentagePackedItems}% has been Packed`}</div>
  )
}
function Sort({items,handleClear}){
const [sortValue,setSortValue] = useState("Input");
    
let sortItems;
if(sortValue === 'Packed Items'){
  sortItems = items.sort((a, b) => (a.packed === b.packed) ? 0 : (a.packed ? 1 : -1));
}
else if(sortValue === 'Description'){
  sortItems = items.slice().sort((a, b) => a.search.localeCompare(b.search));
}
else if(sortValue === 'Input'){
  sortItems = items;
}


    return(
      <React.Fragment>
      <div className='sort_wrapper'>
        <select value={sortValue} onChange={(e)=>setSortValue(e.target.value)}>
          <option value="Input">Sort it by List</option>
          <option value="Description">Sort it by Description</option>
          <option value="Packed Items">Sort it by Packed Items</option>
        </select>
        <button onClick={()=>{handleClear()}}>Clear all the list</button>
      </div>
      </React.Fragment>
    )
}
export default App;
