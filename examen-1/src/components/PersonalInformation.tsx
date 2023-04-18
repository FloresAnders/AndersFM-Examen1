import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

type Props = {
  onClose: () => void;
};

const PersonalInformation = ({ onClose }: Props) => {
  const [name, setName] = useState('Anders Flores');
  const [email, setEmail] = useState('anders.flores.morales@est.una.ac.cr');
  const [phone, setPhone] = useState('+50670157179');
  const [address, setAddress] = useState('Costa Rica , San Jose, Perez Zeledon');
  const imageUrl = "/FotoAnders.jpg"; // Ruta de la imagen
  
  return (
    <div className="container personal-info">
      <h2 className="mb-4">Personal Information</h2>
      <img src={imageUrl} alt="Profile" className="img-fluid rounded-circle mb-3" width={150} height={200} />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
      <button className="btn btn-primary" onClick={onClose}>Close</button>
    </div>
  );
};

export default PersonalInformation;
