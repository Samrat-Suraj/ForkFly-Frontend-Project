import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavBar from './components/component/NavBar'
import Footer from './components/component/Footer'
import RestaurantPage from './pages/RestaurantPage'
import RestaurantFood from './components/component/RestaurantFood'
import SpecialOffersPage from './pages/SpecialOffersPage'
import CartPage from './pages/CartPage'
import TrackPage from './pages/TrackPage'
import MenuPages from './pages/MenuPages'
import RestaurantPages from './pages/AdminPage/RestaurantPages'
import FoodItemsPages from './pages/AdminPage/FoodItemsPages'
const App = () => {
  return (
    <div className='app'>
      {/* NavBar........................ */}
      <div className="mt-4">
        <NavBar />
      </div>

      {/* Routes........................ */}
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/restaurant' element={<RestaurantPage />} ></Route>
        <Route path='/details/:id' element={<RestaurantFood />} ></Route>
        <Route path='/offers' element={<SpecialOffersPage />} ></Route>
        <Route path='/cart' element={<CartPage />} ></Route>
        <Route path='/track' element={<TrackPage />} ></Route>
        <Route path='/menu' element={<MenuPages />}></Route>


        <Route path='/admin/restaturant' element={<RestaurantPages />}></Route>
        <Route path='/admin/items' element={<FoodItemsPages />}></Route>
      </Routes>

      {/* Footer........................ */}
      <div className="mt-4" >
        <Footer />
      </div>
    </div>
  )
}

export default App