import { useHistory, useParams } from "react-router-dom";
import { database } from "../../services/firebase";

import { Container, QuestionList } from "./styles";
import logoImg from "../../assets/images/logo.svg";
import deleteImage from "../../assets/images/delete.svg";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
//import { useAuth } from "../../hooks/useAuth";
import { Question } from "../../components/Question";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  //const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    if (!window.confirm("Tem certeza que você deseja encerrar esta sala?")) {
      return;
    }

    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImage} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </QuestionList>
      </main>
    </Container>
  );
}
