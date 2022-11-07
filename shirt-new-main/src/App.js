import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/header/header'
import { Home } from './pages/home'
import { NotFound } from './pages/not-found'
import { Products } from './pages/products'
import './scss/app.scss'

export const SearchContext = createContext()

export const App = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}
