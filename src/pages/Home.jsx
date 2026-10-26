// Inventario de productos de ejemplo
const productos = [
  {
    id: 1,
    nombre: 'Arroz 1 kg',
    categoria: 'Abarrotes',
    precio: 1590,
    stock: 35,
    icono: '🍚'
  },
  {
    id: 2,
    nombre: 'Leche 1 L',
    categoria: 'Lácteos',
    precio: 1290,
    stock: 48,
    icono: '🥛'
  },
  {
    id: 3,
    nombre: 'Aceite 900 ml',
    categoria: 'Abarrotes',
    precio: 2490,
    stock: 22,
    icono: '🫒'
  },
  {
    id: 4,
    nombre: 'Manzanas 1 kg',
    categoria: 'Frutas',
    precio: 1990,
    stock: 30,
    icono: '🍎'
  },
  {
    id: 5,
    nombre: 'Detergente 1 L',
    categoria: 'Limpieza',
    precio: 3490,
    stock: 15,
    icono: '🧴'
  },
  {
    id: 6,
    nombre: 'Pan de molde',
    categoria: 'Panadería',
    precio: 2290,
    stock: 20,
    icono: '🍞'
  }
];

function Home() {
  return (
    <main className="home">
      <section className="bienvenida">
        <h1>Bienvenidos a SuperAhorro</h1>

        <p>
          Somos tu supermercado de confianza.
          Encuentra productos de calidad para toda la familia.
        </p>
      </section>

      <section className="inventario">
        <h2>Nuestros productos</h2>

        <p>
          Conoce algunos de los productos disponibles en nuestro supermercado.
        </p>

        <div className="productos-grid">
          {productos.map((producto) => (
            <article className="producto-card" key={producto.id}>

              <div className="producto-icono">
                {producto.icono}
              </div>

              <h3>{producto.nombre}</h3>

              <p className="producto-categoria">
                {producto.categoria}
              </p>

              <p className="producto-precio">
                ${producto.precio.toLocaleString('es-CL')}
              </p>

              <p className="producto-stock">
                Stock disponible: {producto.stock}
              </p>

            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;