import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import Navbar from '../components/Navbar';

const IndexPage = () => {
  return (
    <div className="container">
      <Navbar />
      <header>
        <h1>Mi aplicación</h1>
      </header>
      <p>Bienvenido a mi aplicación.</p>
    </div>
  );
};

export default IndexPage;
