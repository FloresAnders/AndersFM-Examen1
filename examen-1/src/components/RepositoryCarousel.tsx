import { Carousel } from "react-bootstrap";

type Props = {
  repositories: any[];
};

const RepositoryCarousel = ({ repositories }: Props) => {
  return (
    <Carousel>
      {repositories.map((repository) => (
        <Carousel.Item key={repository.id}>
          <img className="d-block w-100" src="https://via.placeholder.com/800x400.png?text=Example+Image" alt="First slide" />
          <Carousel.Caption>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RepositoryCarousel;
