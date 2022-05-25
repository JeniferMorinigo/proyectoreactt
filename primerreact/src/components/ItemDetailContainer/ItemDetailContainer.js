import react from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {product} from "../Productos/Productos"

export default function ItemDetailContainer () {
const GetItem = () => {

    const [Item, setItem] = useState([]);
  
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    }).then(() => {
        console.log("getItem")
        setItem(Productos[2]);
    }) 
    return (
        <>
        <ItemDetail Item = {Item}/>
        </>
    )

}
}