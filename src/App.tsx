import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Shop } from './pages'
import { Header } from './containers'

const App = () => (
  <BrowserRouter>
    <Header />
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