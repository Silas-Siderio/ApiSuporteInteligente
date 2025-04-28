import { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSend = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:5000/api/chat', { message }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setResponses([...responses, { question: message, answer: response.data.response }]);
    setMessage('');
  };

  return (
    <div className="container">
      <h2>Suporte Inteligente</h2>
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Digite sua dúvida..." />
      <button onClick={handleSend}>Enviar</button>
      <div>
        {responses.map((res, index) => (
          <div key={index}>
            <strong>Você:</strong> {res.question} <br/>
            <strong>Bot:</strong> {res.answer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
