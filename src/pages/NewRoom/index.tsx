import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Container } from './styles';
import { Slogan } from "../../components/Slogan";
import { Button } from '../../components/Button';
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { HomeLogo } from "../../components/HomeLogo";

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();

  async function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Slogan />
      <main>
        <div className="main-content">
          <HomeLogo />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateNewRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </Container>
  );
};