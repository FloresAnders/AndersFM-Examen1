import { useState } from 'react';
import { getRepositories } from '../pages/api/api';
import { Carousel } from 'react-bootstrap';

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
      <Carousel>
        {repositories.map((repository: any) => (
          <Carousel.Item key={repository.id}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400.png?text=Placeholder+Image"
              alt={repository.name}
            />
            <Carousel.Caption>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default IndexPage;
