import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../services/firebase";

import { Container } from './styles';
import { Slogan } from "../../components/Slogan";
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import enterRoomImg from '../../assets/images/login.svg';
import { Button } from '../../components/Button';
import { useAuth } from "../../hooks/useAuth";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <Slogan />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button
            className="create-room"
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              <img src={enterRoomImg} alt="Entrar na sala" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </Container>
  );
};