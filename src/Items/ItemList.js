import React from 'react'
import Item from './Item'

function ItemList(props){
   
    return (
        <div className="col-9 d-flex flex-wrap p-0">
            {props.Items.map(item=>{
                return <Item item={item} onClick={props.onClick}/>
            })}
        </div>
    )
}

export default ItemList