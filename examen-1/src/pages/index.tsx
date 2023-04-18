import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { getRepositories } from './api/api';

const IndexPage = () => {
  const [username, setUsername] = useState('FloresAnders');
  const [repositories, setRepositories] = useState([]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearch = async () => {
    const token = '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';
    const data = await getRepositories(username, token);
    setRepositories(data);
  };

  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} />
      <h1>Biography</h1>
      <p>Bienvenido a mi aplicación.</p>
      <ul>
        {repositories.map((repository: any) => (
          <li key={repository.id}>{repository.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
