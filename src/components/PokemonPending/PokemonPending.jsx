import { ImSpinner } from 'react-icons/im';
import PokemonData from 'components/PokemonData';
import pendingImage from 'images/pending.png';
import css from './PokemonPending.module.css';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPending({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className={css.iconSpin} />
        Загружаем...
      </div>
      <PokemonData pokemon={pokemon} />
    </div>
  );
}
