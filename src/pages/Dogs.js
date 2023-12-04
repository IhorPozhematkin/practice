import { Link } from 'react-router-dom';

export default function Dogs() {
  // useEffect(() => {
  //     // http запрос если нужно
  // }, []);
  return (
    //   /dogs/:dogId
    <div>
      {['dog-1', 'dog-2', 'dog-3'].map(dog => {
        return (
          <Link key={dog} to={`${dog}`}>
            {dog}
          </Link>
        );
      })}
    </div>
  );
}
