import { useNavigate } from 'react-router-dom';
import s from './Button.module.css';

export default function GoBackButton({ location }) {
  const navigate = useNavigate();
  console.log(location);
  // const goHome = () => navigate('/');
  // const goBack = () => navigate(`/movies/query=${query}`);

  return (
    <button
      className={s.button}
      onClick={() =>
        navigate({
          pathname: location.pathname,
          search: location.search,
        })
      }
    >
      Go back
    </button>
  );
}
