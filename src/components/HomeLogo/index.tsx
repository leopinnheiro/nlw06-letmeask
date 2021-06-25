import { useHistory } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import './styles.scss';

export function HomeLogo() {
  const history = useHistory();

  function handleGoToHome() {
    history.push("/");
  }

  return (
    <img
      className="home-logo"
      onClick={handleGoToHome}
      src={logoImg}
      alt="Letmeask"
    />
  )
}