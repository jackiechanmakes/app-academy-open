function Showcase() {
    let favPokemon = 'Bulbasaur';

    const pokeCharacteristics = {
        type: 'Grass',
        move: 'Vine Whip'
    };

    return (
        <div>
            <h1>{favPokemon}'s Showcase Component</h1>
            <h2>{favPokemon}'s type is {pokeCharacteristics['type']} and one of their moves is {pokeCharacteristics['move']}</h2>
        </div>
    );
}

export default Showcase;
