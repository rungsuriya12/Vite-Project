import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from './src/View/Navbar';
import Item from './src/View/Item';
import AddItem from './src/View/AddItem';
import View from './src/View/View';
function App() {

  return (
    <BrowserRouter>
      <Navber />

      <Routes>
        <Route path="/Item" element={<Item />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/View/:id" element={<View />} />
        <Route path="*"element={<div className="flex items-center justify-center h-screen"><h1 className="text-4xl font-bold">404 Not Found</h1></div>  }/>
      </Routes>

    </BrowserRouter>

  )
}

export default App
