import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {<Home/>}/>
          <Route path="login" element = {<Login/>}/>
          <Route path="users">
            <Route index element = {<List type = "user"/>}/>  
            <Route path=":userId" element = {<Single/>}/>
            <Route path="new" element = {<New inputs = {userInputs} title = "Add new User"/>}/>    
          </Route>
          <Route path="products">
            <Route index element = {<List type = "products"/>}/>  
            <Route path=":productId" element = {<Single/>}/>
            <Route path="new" element = {<New inputs = {productInputs} title = "Add new Product"/>}/>    
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
