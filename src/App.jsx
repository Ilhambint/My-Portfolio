import './App.css'
import Home from './pages/Home'
import DetailPortfolio from './pages/DetailPortfolio'
import PageNotFound from './pages/PageNotFound'
import Experience from './pages/Experience'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/page-not-found' exact element={<PageNotFound/>}/>
      <Route path='*' exact element={<PageNotFound/>}/>
      <Route path='/portfolio/:id' exact element={<DetailPortfolio/>}/>
      <Route path='/experience' exact element={<Experience/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App