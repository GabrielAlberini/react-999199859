import Layout from "../components/Layout/Layout"
import "../styles/Login.css"

const Login = () => {
  return (
    <>
      <Layout>
        <section id="login-section">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" id="password" />

            <button>Ingresar</button>
          </form>
        </section>
      </Layout>
    </>
  )
}

export default Login