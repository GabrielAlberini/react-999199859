import "./Main.css"

const Main = () => {

  // Simulando un lista de productos recibida desde una API
  const productos = [
    {
      nombre: "Bicicleta",
      precio: 1000,
      descripcion: "20 cambios, cuadro de aluminio, disponible en todos los rodados"
    },
    {
      nombre: "Computadora",
      precio: 3000,
      descripcion: "Windows 11 instalado, paquete Office con licencia, 16 de memoria RAM"
    },
    {
      nombre: "Silla gamer",
      precio: 2000,
      descripcion: "Tapizado de eco-cuerina, altura regulable, facil de limpiar"
    },
    {
      nombre: "Celular 1",
      precio: 3229,
      descripcion: "Compatibilidad con múltiples dispositivos"
    },
    {
      nombre: "Smartwatch 2",
      precio: 2615,
      descripcion: "Liviano, ideal para viajes"
    },
    {
      nombre: "Parlantes 3",
      precio: 3437,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Notebook 4",
      precio: 4042,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Tablet 5",
      precio: 3424,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Parlantes 6",
      precio: 4848,
      descripcion: "Control de volumen integrado"
    },
    {
      nombre: "Impresora 7",
      precio: 3932,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Parlantes 8",
      precio: 1869,
      descripcion: "Compatibilidad con múltiples dispositivos"
    },
    {
      nombre: "Smartwatch 9",
      precio: 2114,
      descripcion: "Soporte ajustable, material resistente"
    },
    {
      nombre: "Notebook 10",
      precio: 3963,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Mouse 11",
      precio: 2152,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Mouse 12",
      precio: 1461,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Smartwatch 13",
      precio: 4566,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Tablet 14",
      precio: 3908,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Auriculares 15",
      precio: 3316,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Auriculares 16",
      precio: 3301,
      descripcion: "Con luces RGB, silencioso"
    },
    {
      nombre: "Monitor 17",
      precio: 1510,
      descripcion: "Control de volumen integrado"
    },
    {
      nombre: "Impresora 18",
      precio: 4425,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Tablet 19",
      precio: 1901,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Notebook 20",
      precio: 1661,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Impresora 21",
      precio: 3840,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Smartwatch 22",
      precio: 3692,
      descripcion: "Con garantía de fábrica, fácil instalación"
    },
    {
      nombre: "Parlantes 23",
      precio: 2173,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Monitor 24",
      precio: 3986,
      descripcion: "Con luces RGB, silencioso"
    },
    {
      nombre: "Auriculares 25",
      precio: 4199,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Auriculares 26",
      precio: 3907,
      descripcion: "Con luces RGB, silencioso"
    },
    {
      nombre: "Notebook 27",
      precio: 1562,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Celular 28",
      precio: 4620,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Notebook 29",
      precio: 3427,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Auriculares 30",
      precio: 1117,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Monitor 31",
      precio: 1281,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Monitor 32",
      precio: 3946,
      descripcion: "Soporte ajustable, material resistente"
    },
    {
      nombre: "Auriculares 33",
      precio: 3500,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Parlantes 34",
      precio: 4539,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Auriculares 35",
      precio: 1197,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Auriculares 36",
      precio: 1512,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Teclado 37",
      precio: 3560,
      descripcion: "Control de volumen integrado"
    },
    {
      nombre: "Monitor 38",
      precio: 1043,
      descripcion: "Diseño ergonómico, conectividad bluetooth"
    },
    {
      nombre: "Smartwatch 39",
      precio: 3580,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Smartwatch 40",
      precio: 3354,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Tablet 41",
      precio: 3696,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Smartwatch 42",
      precio: 3243,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Teclado 43",
      precio: 1914,
      descripcion: "Alta resolución, batería de larga duración"
    },
    {
      nombre: "Tablet 44",
      precio: 1723,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Notebook 45",
      precio: 3309,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Tablet 46",
      precio: 1454,
      descripcion: "Pantalla Full HD, incluye accesorios"
    },
    {
      nombre: "Teclado 47",
      precio: 1276,
      descripcion: "Pantalla Full HD, incluye accesorios"
    }
  ];


  return (
    <main>
      <section className="banner">
        <h1>Bienvenidos a la tienda</h1>
        <h2>Los mejores precios de la ciudad</h2>
      </section>
      <section className="productList">
        {
          // callback es una funcion que se ejecuta despues de que pasa algo
          productos.map((producto) => {
            return (
              <div className="product">
                <h2>{producto.nombre}</h2>
                <p>{producto.precio}</p>
                <p>{producto.descripcion}</p>
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