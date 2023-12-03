import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Designs from './Pages/Designs/Designs'
import Repairs from './Pages/Repairs/Repairs'
import Restoration from './Pages/Restoration/Restoration'
import Advertisement from './Pages/Advertisement/Advertisement'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='designs' element={<Designs/>}/>
      <Route path='repairs' element={<Repairs/>}/>
      <Route path='restoration' element={<Restoration/>}/>
      <Route path='advertisement' element={<Advertisement/>}/>
    </Route>
  )
)

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
