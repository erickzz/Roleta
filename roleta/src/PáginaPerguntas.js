import { useParams, Link, useNavigate } from "react-router-dom";
import { Perguntas } from "./perguntas";

export default function PaginaPerguntas() {
  const navigate = useNavigate();

  const { tema } = useParams();

  const checkAnswer = (resposta) => {
    if (resposta) {
      alert("Resposta Certa");
      navigate("/");
    } else {
      alert("Resposta Errada");
      navigate("/");
    }
  };

  const pergunta = Perguntas.filter((pergunta) => pergunta.tema === tema);
  console.log(pergunta);
  const perguntaSelecionada =
    pergunta[Math.floor(Math.random() * pergunta.length)];
  console.log(perguntaSelecionada);
  const perguntasAleatorizadas = perguntaSelecionada.alternativas.sort(
    (a, b) => 0.5 - Math.random()
  );
  const alternativas = perguntasAleatorizadas.map((alternativa) => (
    <button
      key={alternativa.texto}
      onClick={() => {
        checkAnswer(alternativa.valor);
      }}
    >
      {alternativa.texto}
    </button>
  ));

  return (
    <>
      <h1> Tema sorteado foi: {tema}</h1>
      <div>
        <p>{perguntaSelecionada.pergunta}</p>
        <p>{alternativas}</p>
      </div>

      <Link to="/">
        <button>Voltar</button>
      </Link>
    </>
  );
}
