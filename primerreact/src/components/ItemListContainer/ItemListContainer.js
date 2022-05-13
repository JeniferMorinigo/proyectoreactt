import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <ItemCount stock={20}/>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer