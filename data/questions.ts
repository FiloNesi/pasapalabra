
import { Question, QuestionWithStatus, AnswerStatus } from '../types';
import { ALPHABET_ES } from '../constants';

const gameQuestionsSet: Question[] = [
    [
  {
    "letter": "A",
    "clue": "EMPIEZA POR LA A: Corriente filosófica que niega la existencia de Dios.",
    "answer": "ATEÍSMO"
  },
  {
    "letter": "B",
    "clue": "EMPIEZA POR LA B: Disciplina filosófica que reflexiona sobre la moral y la conducta humana.",
    "answer": "ÉTICA"
  },
  {
    "letter": "C",
    "clue": "EMPIEZA POR LA C: Disciplina que estudia el conocimiento, su origen y validez.",
    "answer": "CIENCIA"
  },
  {
    "letter": "D",
    "clue": "EMPIEZA POR LA D: Método de razonamiento que parte de lo general para llegar a lo particular.",
    "answer": "DEDUCCIÓN"
  },
  {
    "letter": "E",
    "clue": "EMPIEZA POR LA E: Corriente filosófica centrada en la existencia humana concreta y la libertad.",
    "answer": "EXISTENCIALISMO"
  },
  {
    "letter": "F",
    "clue": "EMPIEZA POR LA F: Disciplina que busca respuestas a las grandes preguntas del ser y el conocimiento.",
    "answer": "FILOSOFÍA"
  },
  {
    "letter": "G",
    "clue": "EMPIEZA POR LA G: Pensador alemán que desarrolló la dialéctica idealista.",
    "answer": "HEGEL"
  },
  {
    "letter": "H",
    "clue": "EMPIEZA POR LA H: Corriente filosófica que interpreta el sentido de los textos y la existencia.",
    "answer": "HERMENÉUTICA"
  },
  {
    "letter": "I",
    "clue": "EMPIEZA POR LA I: Corriente que sostiene que todo conocimiento proviene de la experiencia.",
    "answer": "EMPIRISMO"
  },
  {
    "letter": "J",
    "clue": "EMPIEZA POR LA J: Valor ético relacionado con la equidad y el respeto de los derechos.",
    "answer": "JUSTICIA"
  },
  {
    "letter": "K",
    "clue": "EMPIEZA POR LA K: Filósofo alemán del siglo XVIII, autor de la 'Crítica de la razón pura'.",
    "answer": "KANT"
  },
  {
    "letter": "L",
    "clue": "EMPIEZA POR LA L: Capacidad humana de comunicarse mediante signos orales o escritos.",
    "answer": "LENGUAJE"
  },
  {
    "letter": "M",
    "clue": "EMPIEZA POR LA M: Corriente filosófica que considera la materia como la realidad fundamental.",
    "answer": "MATERIALISMO"
  },
  {
    "letter": "N",
    "clue": "EMPIEZA POR LA N: Filósofo alemán que proclamó la 'muerte de Dios'.",
    "answer": "NIETZSCHE"
  },
  {
    "letter": "Ñ",
    "clue": "EMPIEZA POR LA Ñ: Cualidad o carácter de lo que pertenece a una nación.",
    "answer": "ÑACIONALIDAD"
  },
  {
    "letter": "O",
    "clue": "EMPIEZA POR LA O: Rama de la filosofía que estudia el ser y sus propiedades.",
    "answer": "ONTOLOGÍA"
  },
  {
    "letter": "P",
    "clue": "EMPIEZA POR LA P: Filósofo griego autor de 'La República' y discípulo de Sócrates.",
    "answer": "PLATÓN"
  },
  {
    "letter": "Q",
    "clue": "EMPIEZA POR LA Q: Palabra interrogativa que introduce muchas de las cuestiones filosóficas.",
    "answer": "QUÉ"
  },
  {
    "letter": "R",
    "clue": "EMPIEZA POR LA R: Facultad humana que permite pensar, juzgar y extraer conclusiones.",
    "answer": "RAZÓN"
  },
  {
    "letter": "S",
    "clue": "EMPIEZA POR LA S: Filósofo griego que usaba el diálogo como método para llegar a la verdad.",
    "answer": "SÓCRATES"
  },
  {
    "letter": "T",
    "clue": "EMPIEZA POR LA T: Corriente filosófica que sostiene que hay verdades absolutas.",
    "answer": "TRADICIONALISMO"
  },
  {
    "letter": "U",
    "clue": "EMPIEZA POR LA U: Corriente ética que valora las acciones según sus consecuencias.",
    "answer": "UTILITARISMO"
  },
  {
    "letter": "V",
    "clue": "EMPIEZA POR LA V: Conformidad entre lo que se dice o piensa y la realidad.",
    "answer": "VERDAD"
  },
  {
    "letter": "W",
    "clue": "EMPIEZA POR LA W: Apellido del filósofo austriaco que escribió 'Tractatus logico-philosophicus'.",
    "answer": "WITTGENSTEIN"
  },
  {
    "letter": "X",
    "clue": "EMPIEZA POR LA X: Letra utilizada comúnmente para representar lo desconocido o enigmático.",
    "answer": "X"
  },
  {
    "letter": "Y",
    "clue": "EMPIEZA POR LA Y: Conjunción usada para conectar ideas en razonamientos complejos.",
    "answer": "Y"
  },
  {
    "letter": "Z",
    "clue": "EMPIEZA POR LA Z: Filósofo presocrático que propuso una paradoja sobre Aquiles y la tortuga.",
    "answer": "ZENÓN"
  }
];

export const getInitialQuestions = (): QuestionWithStatus[] => {
    return ALPHABET_ES.map(char => {
        const questionData = gameQuestionsSet.find(q => q.letter.toUpperCase() === char.toUpperCase());
        if (!questionData) {
            return {
                letter: char,
                clue: `(Sin definir) Pista para la letra ${char}`,
                answer: `RESPUESTA${char}`,
                status: 'pending' as AnswerStatus,
            };
        }
        return {
            ...questionData,
            answer: questionData.answer.toUpperCase(),
            status: 'pending'as AnswerStatus,
        };
    });
};
