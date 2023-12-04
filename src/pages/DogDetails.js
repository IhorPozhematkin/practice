import { useParams, Link, Outlet } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  // useEffect(() => {
  //     // http запрос если нужно
  // }, []);
  return (
    <>
      <h1>DogDetails {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogDetails;
