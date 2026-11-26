import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import UserDetailPage from './pages/UserDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#3f434a]">
      <Navbar />
      <main className="flex-1 pb-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users/:id" element={<UserDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/users/:id"
            element={
              <ProtectedRoute>
                <UserDetailPage
                  backTo="/dashboard"
                  backLabel="Kembali ke dashboard"
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
