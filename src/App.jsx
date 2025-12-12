import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage/>} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App