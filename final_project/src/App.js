import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Signin from './page/signin';
import Personalpage from './page/Home';
import Newpost from './page/newposts';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin/>} ></Route>
        <Route path="/posts" element={<Newpost/>} ></Route>
        <Route path="/Home" element={<Personalpage/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
