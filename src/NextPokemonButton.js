import React from 'react';

class NextPokemonButton extends React.Component {
  render() {
    const { currentPokemonHandler } = this.props;
    return (
      <button
        onClick={currentPokemonHandler}
        className="next-pokemon-btn"
      >
        Next Pokemon
      </button>
    );
  }
}

export default NextPokemonButton;