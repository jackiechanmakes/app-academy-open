import BulbasaurImage from './images/bulbasaur.jpg'

function Showcase() {
    let favPokemon = 'Bulbasaur';

    const pokeCharacteristics = {
        type: 'Grass',
        move: 'Vine Whip'
    };

    return (
        <div>
            <h1>{favPokemon}'s Showcase Component</h1>
            <img src={BulbasaurImage} alt={favPokemon}></img>
            <h2>
                {favPokemon}'s type is <span style={{  color: 'white', backgroundColor: 'green' }}>{pokeCharacteristics['type']}</span> and one of their moves is <span style= {{ color:'#008000', backgroundColor: "#FFFFFF" }}>{pokeCharacteristics['move']}</span>
            </h2>
        </div>
    );
}

export default Showcase;
