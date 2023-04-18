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
      <Navbar handleSearch={handleSearch} handlePersonal={handleShowPersonal} activeTab={''}/>
      {showPersonal && <PersonalInformation onClose={handleClosePersonal} />}
      <h1 className="bg-danger">Biography</h1>
      <p>Some things about me.</p>
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
