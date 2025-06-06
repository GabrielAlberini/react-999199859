import "./Home.css"

function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="/admin">Panel de administrador</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="banner">
          <h1>Bienvenidos a la tienda</h1>
          <h2>Los mejores precios de la ciudad</h2>
        </section>
        <section className="productList">
          <div className="product">
            <h2>Bicicleta</h2>
            <p>Precio: 1000</p>
            <p>20 cambios, cuadro de aluminio, disponible en todos los rodados</p>
            <button>Comprar</button>
          </div>
          <div className="product">
            <h2>Computadora</h2>
            <p>Precio: 3000</p>
            <p>Windows 11 instalado, paquete Office con licencia, 16 de memoria RAM</p>
            <button>Comprar</button>
          </div>
          <div className="product">
            <h2>Silla gamer</h2>
            <p>Precio: 2000</p>
            <p>Tapizado de eco-cuerina, altura regulable, facil de limpiar</p>
            <button>Comprar</button>
          </div>
        </section>
      </main>
      <footer>
        <p>Sitio desarrollado por Gabriel Alberini</p>
      </footer>
    </>
  )
}

export default Home
