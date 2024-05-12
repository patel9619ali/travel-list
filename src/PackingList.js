import {Items} from "./Items";

export default function PackingList({items,handleDelete,handleCheckbox}){
    return(
      <div className="list">
        <ul>
          {items.map(items=><Items items={items} key={items.id} handleDelete={handleDelete} handleCheckbox={handleCheckbox}/>)}
        </ul>
      </div>
  
    )
  }