import { useEffect, useState } from "react"
import "./Main.css"

const Main = () => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)

  const fetchingProducts = async () => {
    try {
      const respuesta = await fetch("https://fakestoreapi.com/products")
      const data = await respuesta.json()
      setProductos(data)
    } catch (error) {
      setError("No pude recuperar los productos :(")
    }
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  return (
    <main>
      <section className="banner">
        <h1>Bienvenidos a la tienda</h1>
        <h2>Los mejores precios de la ciudad</h2>
      </section>
      <section className="productList">
        {
          error && <p>{error}</p>
        }
        {
          productos.length === 0 && !error && <p>No hay productos disponibles</p>
        }
        {
          // callback es una funcion que se ejecuta despues de que pasa algo
          productos.map((producto) => {
            return (
              <div className="product">
                <img src={producto.image} alt={"imagen del producto" + producto.title} />
                <h2>{producto.title}</h2>
                <p>${producto.price}</p>
                <p>{producto.description}</p>
                <button>Comprar</button>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Main