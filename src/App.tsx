import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Shop, SignInUp } from './pages'
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
    <Route path='/signin' element={<SignInUp />} />
  </Routes>
)

export default App