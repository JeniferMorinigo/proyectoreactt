import React, {useState} from "react"

export default function ItemDetail({Item}) {
    
    const [count, setCount] = React.useState(1)
    const [selectCount, setSelectCount] = React.useState(false)
    const { productsAdd } = React.useContext(CartContext)

    const handleClickComprar = (item) => {
        if (count > 0) {
            setSelectCount(true)
            productsAdd({
                id: item.id,
                name: item.name,
                img: item.thumbnail,
                price: item.price,
                stock: item.stock,
            })
        }
    }

    return (
        <div>
            <h2>{item.name}</h2>
                <img src={item.img} alt="img" width="350" />
                <p>price: $ {Intl.NumberFormat().format(item.price)}</p>
                <p>Available stock: {item.stock}</p>

                <ItemCount
                    setCount={setCount}
                    count={count}
                    min={1}
                    stock={item.stock}
                />
                {selectCount ? 
                    <>
                    <div>
                        <button>seguir comprando</button>
                        <button>finalizar compra</button>
                    </div>
                    </>
                : 
                    <button onClick={handleClickComprar}disabled={item.stock === 0}>Agregar al carrito</button>
                
                }

        </div>

    )
        
}