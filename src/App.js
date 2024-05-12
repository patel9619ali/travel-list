import React, {Fragment, useState} from 'react';
import './App.css';
import { Logo } from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import { Stats } from './Stats';
import { Sort } from './Sort';


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
export default App;
