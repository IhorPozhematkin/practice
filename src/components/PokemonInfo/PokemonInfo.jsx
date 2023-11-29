import PokemonError from 'components/PokemonError';
import PokemonData from 'components/PokemonData';
import { useState, useEffect } from 'react';
import PokemonPending from 'components/PokemonPending';
import { fetchPokemon } from 'helpers';

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');

    fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>Enter pokemonName</div>;
  }
  if (status === 'pending') {
    return <PokemonPending pokemonName={pokemonName} />;
  }
  if (status === 'rejected') {
    return <PokemonError message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonData pokemon={pokemon} />;
  }

  // import PokemonError from 'components/PokemonError';
  // import PokemonData from 'components/PokemonData';
  // import React, { Component } from 'react';
  // import PokemonPending from 'components/PokemonPending';
  // import { fetchPokemon } from 'helpers';

  // export default class PokemonInfo extends Component {
  //   state = {
  //     pokemon: null,
  //     // loading: false,
  //     error: null,
  //     status: 'idle',
  //   };
  //   componentDidUpdate = (prevProps, prevState) => {
  //     if (prevProps.pokemonName !== this.props.pokemonName) {
  //       this.setState({ status: 'pending' });

  //       fetchPokemon(this.props.pokemonName)
  //         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
  //         .catch(error => this.setState({ error, status: 'rejected' }));
  //       // .finally(() => this.setState({ loading: false }));
  //     }
  //   };

  //   render() {
  //     const { pokemon, error, status } = this.state;
  //     const { pokemonName } = this.props;

  //     if (status === 'idle') {
  //       return <div>Enter pokemonName</div>;
  //     }
  //     if (status === 'pending') {
  //       return <PokemonPending pokemonName={pokemonName} />;
  //     }
  //     if (status === 'rejected') {
  //       return <PokemonError message={error.message} />;
  //     }
  //     if (status === 'resolved') {
  //       return <PokemonData pokemon={pokemon} />;
  //     }

  // return (
  //   <div>
  //     {error && <h1>{error.message}</h1>}
  //     {loading && <div>Loading...</div>}
  //     {!pokemonName && <div>Enter pokemonName</div>}
  //     {pokemon && (
  //       <div>
  //         <p>{pokemon.name}</p>
  //         <img
  //           src={pokemon.sprites.other['official-artwork'].front_default}
  //           alt={pokemon.name}
  //           width={240}
  //         />
  //       </div>
  //     )}
  //   </div>
  // );
}
