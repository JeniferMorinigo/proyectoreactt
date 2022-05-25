
import Navbar from"./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  ItemDetailContainer  from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes , route} from "react-router-dom"


function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes path="/" element={}>

      </Routes>
      <ItemListContainer greeting={"STEP OUT WE ARE SKZ"} />
      <ItemDetailContainer/>
      </BrowserRouter>
    </div>
    

  );
}

export default App;
