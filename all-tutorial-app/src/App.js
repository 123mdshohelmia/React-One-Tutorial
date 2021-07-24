
import './App.css';
import All from './all'
import AllCountryName from './http/AllCountryName';
import { BrowserRouter } from 'react-router-dom';
import MyNav from './NavigationBar/MyNav';
import MyRoute from './NavigationBar/MyRoute';
function App() {
  return (
    <div className="App">

      {/* <All></All> */}
      {/* <h1>This is shohel</h1> */}
    
   {/* <AllCountryName></AllCountryName> */}
     
   <BrowserRouter>
       <MyNav></MyNav>
       <MyRoute></MyRoute>
   </BrowserRouter>
    </div>
  );
}

export default App;
