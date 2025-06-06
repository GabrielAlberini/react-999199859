import "./Header.css"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="/admin">Panel de administrador</a></li>
          <li><a href="/registro">Registrate</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header