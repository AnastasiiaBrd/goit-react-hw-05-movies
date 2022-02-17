import { useNavigate } from 'react-router-dom';
import s from './Button.module.css';

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button className={s.button} onClick={() => navigate(-1)}>
      Go back
    </button>
  );
}
