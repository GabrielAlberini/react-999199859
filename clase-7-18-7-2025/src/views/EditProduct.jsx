import { Link, useNavigate, useParams } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { useEffect, useState } from "react"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"

const EditProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [error, setError] = useState(null)
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const { id } = useParams()

  // traer producto de la base de datos
  const fetchProduct = async (id) => {
    try {
      const docRef = doc(db, "productos", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data()
        setName(data.name)
        setPrice(data.price)
        setDescription(data.description)
      }

    } catch (error) {
      setError("Error al cargar el producto")
    }
  }

  useEffect(() => {
    fetchProduct(id)
  }, [id])

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")
    setSuccess(false)

    if (!name || !price || !description) {
      setError("Necesitas completar los campos.")
      return
    }

    if (name.length < 2) {
      setError("El nombre debe tener una largo mínimo de 2 caracteres.")
      return
    }

    if (price < 0) {
      setError("Debes agregar un precio mayor a 0")
      return
    }

    try {
      const docRef = doc(db, "productos", id)
      await updateDoc(docRef, { name, price, description, updatedAt: Date.now() })
      navigate("/")
    } catch (error) {
      setError("Error al actualizar el producto...")
    }
  }

  return (
    <Layout>
      <section id="admin-section">
        <h1>Editar un producto</h1>
        <p>Aquí puedes actualizar la información de tu producto.</p>
        <p>Editando producto {id}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" name="name" id="name" onChange={handleName} value={name} />

          <label htmlFor="price">Precio del producto:</label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

          <label htmlFor="description">Descripción del producto:</label>
          <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

          <button>Editar producto</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {message && <p style={{ color: "green" }}>{message}</p>}
          {success && <Link to={"/"}>Ir a home</Link>}
        </form>
      </section>
    </Layout>
  )
}

export { EditProduct }