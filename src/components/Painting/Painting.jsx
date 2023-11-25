const Painting = ({
  url,
  priceItem,
  title,
  author = 'нет данных',
  quantity,
  link,
}) => {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={link}>{author}</a>
      </p>
      <p>Цена: {priceItem} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

export default Painting;
