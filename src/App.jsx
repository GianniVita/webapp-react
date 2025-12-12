import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import AdminLayout from './layouts/AdminLayout'
import HomePage from './pages/HomePage'
import MoviesListPage from './pages/MoviesListPage'
import MoviePage from './pages/MoviePage'
import ContactsPage from './pages/ContactsPage'
import NotFoundPage from './pages/NotFoundPage'


// Admin Routes
import AdminDashboard from "./pages/AdminDashboard"
import CreateMoviePage from "./pages/CreateMoviePage";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/movies/create" element={<CreateMoviePage />} />
        </Route>
      </Routes>
    
    </BrowserRouter >



  )
}

export default App