import { useState } from 'react';
import { getRepositories } from '../pages/api/api';


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
    <div>
      <h1>Repositorios de Github</h1>
      <label>
        Nombre de usuario:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {repositories.map((repository: any) => (
          <li key={repository.id}>{repository.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
