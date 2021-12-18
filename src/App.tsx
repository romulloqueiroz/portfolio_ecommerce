import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Hats } from './pages'

const App = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
)

const Routing = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/hats' element={<Hats />} />
  </Routes>
)

export default App