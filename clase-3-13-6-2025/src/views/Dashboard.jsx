import { use, useState } from "react"
import Layout from "../components/Layout/Layout"
import "../styles/Dashboard.css"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [error, setError] = useState(null)

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(Number(event.target.value))
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name || !price || !description) {
      setError("Necesitas completar los campos")
    }

    const newProduct = { name, price, description }
    // Guardar en la base de datos el nuevo producto
    console.log("Nuevo producto: ", newProduct)

    setName("")
    setPrice(0)
    setDescription("")
  }

  return (
    <Layout>
      <section id="admin-section">
        <h1>Panel de administración</h1>
        <p>Aquí puedes administrar todos tus productos. Puedes agregar, modificar o borrar lo que desees.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre del producto:</label>
          <input type="text" name="name" id="name" onChange={handleName} value={name} />

          <label htmlFor="price">Precio del producto:</label>
          <input type="number" name="price" id="price" onChange={handlePrice} value={price} />

          <label htmlFor="description">Descripción del producto:</label>
          <textarea name="description" id="description" onChange={handleDescription} value={description}></textarea>

          <button>Agregar producto</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </Layout>
  )
}

export default Dashboard