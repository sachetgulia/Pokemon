import React from 'react'

function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map(p => (
                    <p key ={p}>{p}</p>
                ))}
        </div>
    )
}

export default PokemonList
