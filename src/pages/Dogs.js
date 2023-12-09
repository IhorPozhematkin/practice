import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Dogs() {
  const [dogs] = useState(['dog-1', 'dog-2', 'dog-3']);
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';
  const location = useLocation();
  // useEffect(() => {
  //     // http запрос если нужно
  // }, []);

  const updateQueryString = e => {
    const dogIdvalue = e.target.value;
    dogIdvalue === ''
      ? setSearchParams({})
      : setSearchParams({ dogId: dogIdvalue });
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));
  return (
    //   /dogs/:dogId
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />

      {visibleDogs.map(dog => {
        return (
          <Link key={dog} to={`${dog}`} state={{ from: location }}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
}
