import React from "react";
import { Routes, Route } from 'react-router-dom';
import { data } from "./data/data";
import Main from "./pages/Main";
import ListPage from "./pages/ListPage";


function App() {

  const typeCount = (text) => {
    return data.data.filter(element => element.type === text).length
  }

  return (
    <Routes>
      <Route exact path='/' element={<Main
        data={data}
        typeCount={typeCount}
      />}>
      </Route>
      <Route path='/navigator/tab/:page' element={<ListPage
      />}>
      </Route>
    </Routes>
  )
}

export default App;
