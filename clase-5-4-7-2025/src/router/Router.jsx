import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Dashboard from "../views/Dashboard"
import Register from "../views/Register"
import Login from "../views/Login"

// Crear un componente que valide que vista quiere ver el usuario

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<img src="https://mylittlebigweb.com/wp-content/uploads/2024/01/erreur-404-jpg.webp" />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }