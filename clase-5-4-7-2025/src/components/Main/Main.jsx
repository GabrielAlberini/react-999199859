import { useEffect, useState } from "react"
import "./Main.css"
import { db } from "../../config/firebase"
import { collection, getDocs } from "firebase/firestore"

const Main = () => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)
  // simulación de usuario conectado
  const [user, setUser] = useState(false)

  const fetchingProducts = async () => {
    // try {
    //   // caso de éxito
    //   const respuesta = await fetch("https://fakestoreapi.com/products")
    //   const data = await respuesta.json()
    //   setProductos(data)
    // } catch (error) {
    //   // capturando todos los erres o los casos de no éxito que tengamos
    //   setError("No pude recuperar los productos :(")
    // }

    const productosRef = collection(db, "productos")

    const snapshot = await getDocs(productosRef)
    const docs = snapshot.docs.map((doc) => doc.data())
    setProductos(docs)
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
                <h2>{producto.name}</h2>
                <p>${producto.price}</p>
                <p>{producto.description}</p>
                {
                  user && <div className="user-buttons">
                    <button>Actualizar</button>
                    <button>Borrar</button>
                  </div>
                }
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