export function Items({items,handleDelete,handleCheckbox}){
    // console.log(items,"In list");
    return(
    <>
      <li className={items.packed ? "strick": ""}><input type="checkbox" value={items.packed} onClick={()=>handleCheckbox(items.packed,items.id)}/>{items.quantity} {items.search}<span className="x_factor" onClick={()=>handleDelete(items.id)}>X</span></li>
    </>
    )
  
  }