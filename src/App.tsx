import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Shop } from './pages'

const App = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
)

const Routing = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/shop' element={<Shop />} />
  </Routes>
)

export default App