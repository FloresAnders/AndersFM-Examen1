import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import PersonalInformation from '../components/PersonalInformation';
import { useState } from 'react';
import { getRepositories } from './api/api';
import RepositoryCarousel from '../components/RepositoryCarousel';
import Footer from '@/components/Footer';

const IndexPage = () => {
  const [username, setUsername] = useState('FloresAnders');
  const [repositories, setRepositories] = useState([]);
  const [showPersonal, setShowPersonal] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleShowPersonal = () => {
    setShowPersonal(true);
  };

  const handleClosePersonal = () => {
    setShowPersonal(false);
  };

  const handleSearch = async () => {
    const token = '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';
    const data = await getRepositories(username, token);
    setRepositories(data);
  };

  return (
    <div className="container">
      <Navbar handleSearch={handleSearch} handlePersonal={handleShowPersonal} />
      {showPersonal && <PersonalInformation onClose={handleClosePersonal} />}
      <h1 className="bg-danger">Biography</h1>
      <p>Bienvenido a mi aplicación.</p>
      {repositories.length > 0 && <RepositoryCarousel repositories={repositories} />}
      <ul>
        {repositories.map((repository: any) => (
          <li key={repository.id}>{repository.name}</li>
        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
