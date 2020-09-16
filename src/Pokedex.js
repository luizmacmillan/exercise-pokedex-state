import React from 'react';
import Pokemon from './Pokemon';
import NextPokemonButton from './NextPokemonButton';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.nextPokemon = this.nextPokemon.bind(this);
        this.state = {
            currentPokemonIndex: 0,
        };
    }

    nextPokemon() {
        const { currentPokemonIndex } = this.state;
        const { pokemons } = this.props;
        if (currentPokemonIndex < pokemons.length - 1) {
          this.setState({
            currentPokemonIndex: currentPokemonIndex + 1,
          })
        } else {
          this.setState({
            currentPokemonIndex: 0,
          })
        }
      }

    render() {
        const { nextPokemon } = this;
        const { currentPokemonIndex } = this.state;
        const { pokemons } = this.props;
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[currentPokemonIndex].id} pokemon={pokemons[currentPokemonIndex]} />
                <NextPokemonButton currentPokemonHandler={nextPokemon} />
            </div>
        );
    }
}

export default Pokedex;