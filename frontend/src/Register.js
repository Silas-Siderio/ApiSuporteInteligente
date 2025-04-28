import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { email, password });
      navigate('/');
    } catch (error) {
      alert('Erro ao cadastrar');
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}

export default Register;
