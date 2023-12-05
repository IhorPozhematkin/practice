import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  // useEffect(() => {
  //     // http запрос если нужно
  // }, []);
  return (
    <>
      <h1>DogDetails {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <ul>
        <li>
          <Link to="subbreeds">Подпороды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<>Loading SubPage</>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
