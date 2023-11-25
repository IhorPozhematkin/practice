import Painting from 'components/Painting/Painting';

function PaintingList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            priceItem={item.price}
            author={item.author.tag}
            quantity={item.quantity}
            link={item.author.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;
