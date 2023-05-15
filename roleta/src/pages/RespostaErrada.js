import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RespostaErrada = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return <h1 className="resposta-errada">Resposta Errada</h1>;
};

export default RespostaErrada;
