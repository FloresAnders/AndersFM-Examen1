import { useState } from "react";
import { getRepositories } from "../pages/api/api";
import { Carousel } from "react-bootstrap";

const IndexPage = () => {
  const [username, setUsername] = useState("FloresAnders");
  const [repositories, setRepositories] = useState([]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearch = async () => {
    const data = await getRepositories(username);
    setRepositories(data);
  };

  return (
    <div>
      <Carousel>
        {repositories.map((repository: any) => (
          <Carousel.Item key={repository.id}>
            <img className="d-block w-100" src="https://via.placeholder.com/800x400.png?text=Placeholder+Image" alt={repository.name} />
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
