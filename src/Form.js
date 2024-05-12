import { useState } from "react";

export default function Form({onAdditem}){
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