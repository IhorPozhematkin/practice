import { useParams } from 'react-router-dom';

export default function Subbreads() {
  const { dogId } = useParams();
  return <div>Image Subbreads: {dogId}</div>;
}
