import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'

function App() {
  //https://api.pujakaitem.com/api/products

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>

      </Routes>
    </Router>
  )
}

export default App
