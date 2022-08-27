import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/Details/Detail';
import Home from './components/Home/Home';

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;