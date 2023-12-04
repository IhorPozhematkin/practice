import { useParams } from 'react-router-dom';

export default function Gallery() {
  const { dogId } = useParams();
  return <div>Image Gallery: {dogId}</div>;
}
