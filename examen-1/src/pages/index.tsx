import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { getRepositories } from './api/api';
import RepositoryCarousel from '../components/RepositoryCarousel';

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
      {repositories.length > 0 && <RepositoryCarousel repositories={repositories} />}
      <ul>
        {repositories.map((repository: any) => (
          <li key={repository.id}>{repository.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
