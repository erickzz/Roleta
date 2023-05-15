import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RespostaCerta = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return <h1 className="resposta-certa">Resposta Certa</h1>;
};

export default RespostaCerta;
