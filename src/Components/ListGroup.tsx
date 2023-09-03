import { useState } from "react";
interface Props {
  items:string[];
  heading:string;
  onselectItem:(item:string)=>void;
}
function ListGroup({items,heading,onselectItem}:Props) {
    
    
    //state hook
   const  [selectedIndex,setSelectedIndex] =useState(-1);
  
  return (
    <>
    <h1>{heading}</h1>
    {/* {items.length===0?<p>No Items Found</p>:null} */}
    {items.length===0 &&<p>No Items Found</p>}
    <ul className="list-group">
      {items.map((item,index) =><li className={selectedIndex===index?'list-group-item active':'list-group-item'} key={item} onClick={()=> {setSelectedIndex(index);
      onselectItem(item)}}>{item}</li>)}
    </ul>
    </>
    
  );
}
export default ListGroup;
