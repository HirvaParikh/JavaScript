import './App.css';
import FirstComponent from './Component/FirstComponent'
import SecondComponent from './Component/SecondComponent'
import ThirdComponent from './Component/ThirdComponent'
import FourthComponent from './Component/FourthComponent'
import NavBar from './Component/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element={<FirstComponent/>}></Route>
      <Route path="/SecondComponent" element={<SecondComponent/>}></Route>
      <Route path="/ThirdComponent" element={<ThirdComponent/>}></Route>
      <Route path="/FourthComponent" element={<FourthComponent/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App