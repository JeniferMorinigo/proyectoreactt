import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer