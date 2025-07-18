import { useState } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Login.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!email || !password) {
      setError("Debes completar los campos...")
      return
    }

    // intentar guardar o registrar un usuario.
    try {
      await login(email, password)
      setMessage("Usuario loguedo con éxito...")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setMessage("Redirigiendo al home...")
      }, 2000)
      setTimeout(() => {
        navigate("/")
      }, 3000)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <Layout>
        <section id="login-section">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} >
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setEmail(e.target.value)}
            />

            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button>Registrarme</button>
          </form>
          <h5 className="error-message">{error}</h5>
          <h5 className="success-message">{message}</h5>
        </section>
      </Layout>
    </>
  )
}

export default Login