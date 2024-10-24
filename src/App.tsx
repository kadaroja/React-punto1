import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Leaf, ShoppingBag, Package, Trash2, Phone, Home as HomeIcon } from 'lucide-react';

const Navigation = () => (
  <nav className="bg-green-600 text-white p-4">
    <ul className="flex space-x-6 justify-center">
      <li>
        <Link to="/" className="flex items-center gap-2 hover:text-green-200">
          <HomeIcon size={20} />
          Home
        </Link>
      </li>
      <li>
        <Link to="/productos-biodegradables" className="flex items-center gap-2 hover:text-green-200">
          <Leaf size={20} />
          Productos Biodegradables
        </Link>
      </li>
      <li>
        <Link to="/productos" className="flex items-center gap-2 hover:text-green-200">
          <Package size={20} />
          Productos
        </Link>
      </li>
      <li>
        <Link to="/contactenos" className="flex items-center gap-2 hover:text-green-200">
          <Phone size={20} />
          Contáctenos
        </Link>
      </li>
    </ul>
  </nav>
);

const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold text-green-600 mb-4">Bienvenidos a EcoProdutos</h1>
    <p className="text-lg text-gray-600">Su destino para productos biodegradables y sostenibles</p>
  </div>
);

const ProductosBiodegradables = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-green-600 mb-6">Productos Biodegradables</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/tipos-productos" className="p-6 bg-green-50 rounded-lg hover:bg-green-100">
        <h3 className="text-xl font-semibold text-green-700">Tipos de productos</h3>
        <p className="text-gray-600">Explore nuestra variedad de productos biodegradables</p>
      </Link>
    </div>
  </div>
);

const Productos = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-green-600 mb-6">Productos</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-green-50 rounded-lg">
        <ShoppingBag className="w-8 h-8 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-green-700">Bolsas</h3>
        <p className="text-gray-600">Bolsas biodegradables para todos los usos</p>
      </div>
      <div className="p-6 bg-green-50 rounded-lg">
        <Package className="w-8 h-8 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-green-700">Envases</h3>
        <p className="text-gray-600">Envases ecológicos y sostenibles</p>
      </div>
      <div className="p-6 bg-green-50 rounded-lg">
        <Trash2 className="w-8 h-8 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold text-green-700">Toallitas Desechables</h3>
        <p className="text-gray-600">Toallitas biodegradables y amigables con el ambiente</p>
      </div>
    </div>
  </div>
);

const Contactenos = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-green-600 mb-6">Contáctenos</h2>
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Nombre</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Mensaje</label>
          <textarea className="w-full p-2 border rounded h-32"></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Enviar
        </button>
      </form>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos-biodegradables" element={<ProductosBiodegradables />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contactenos" element={<Contactenos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;