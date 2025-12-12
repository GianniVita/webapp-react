import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import AdminLayout from './layouts/AdminLayout'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ContactsPage from './pages/ContactsPage'


// Admin Routes
import AdminDashboard from "./pages/AdminDashboard"
import CreateMoviePage from "./pages/CreateMoviePage";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage/>} />
          <Route path="/contacts" element={<ContactsPage />} />
        
        </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/movies/create" element={<CreateMoviePage />} />
          </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App