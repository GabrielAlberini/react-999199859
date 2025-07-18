import { useEffect, useState } from "react"
import "./Main.css"
import { db } from "../../config/firebase"
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Main = () => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(null)
  // simulación de usuario conectado
  // const [user, setUser] = useState(true)

  // traer estado del usuario del contexto
  const { user } = useAuth()

  const fetchingProducts = async () => {
    const productosRef = collection(db, "productos")

    const snapshot = await getDocs(productosRef)
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setProductos(docs)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDeleteProduct = async (id) => {
    try {
      if (confirm("Está seguro de que desea borrar el producto?")) {
        await deleteDoc(doc(db, "productos", id))
        // actualiza la ui filtrando el producto borrado en el estado (local)
        setProductos(productos.filter(p => p.id !== id))
        // volviendo a leer la base de datos completa (remoto, poco óptimo)
        // await fetchingProducts()
      }
    } catch (error) {
      console.log(error)
      setError("Error al borrar el producto")
    }
  }

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
                  user && <>
                    <div>
                      {producto.createdAt && <p>Producto creado: {new Date(producto.createdAt).toLocaleString()}</p>}
                      {producto.createdAt !== producto.updatedAt && <p><strong>Ultima actualización:</strong> {new Date(producto.updatedAt).toLocaleString()}</p>}
                    </div>
                    <div className="user-buttons">
                      <Link to={`/editar-producto/${producto.id}`}>Editar producto</Link>
                      <button onClick={() => handleDeleteProduct(producto.id)}>Borrar</button>
                    </div>
                  </>
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