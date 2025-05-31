import { useState } from "react"
import './App.css'

function App() {
  // creaciones de los estados
  const [name, setName] = useState("Pepe")
  const [numeroUno, setNumeroUno] = useState(0)
  const [numeroDos, setNumeroDos] = useState(0)
  const [resultado, setResultado] = useState()

  function handleName() {
    // no podemos reasignar valores a un estado
    // name = "Gabi" ❌

    // para darle otro valor a un estado hay que reemplazarlo con su función actualizadora
    setName("Gabi")
  }

  function sumar(e) {
    e.preventDefault()
    setResultado(Number(numeroUno) + Number(numeroDos))
  }

  // Renderizar
  return (
    <section>
      <h1>Calculadora</h1>
      <h2>Hola, {name}</h2>
      <button onClick={handleName}>Cambiar nombre</button>
      <hr />
      <p>El numero 1 es: {numeroUno}</p>
      <p>El numero 2 es: {numeroDos}</p>

      <form onSubmit={sumar}>
        <label>
          Número 1:
          <input
            type="number"
            name="num1"
            min="0"
            onChange={(event) => {
              setNumeroUno(event.target.value)
            }} />
        </label>

        <label>
          Número 2:
          <input
            type="number"
            min="0"
            onChange={(e) => {
              setNumeroDos(e.target.value)
            }} />
        </label>

        <button>Calcular</button>
      </form>
      <p>Resultado: {resultado}</p>
    </section>
  )
}

export { App }
