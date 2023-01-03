import Link from "next/link"
import Pokemon from "../components/Pokemon"

export async function fetchPokemon(amount: number) {
  const pokemonPromises = []
  const pokemonUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`

  for (let i = 1; i <= amount; i++) {
    pokemonPromises.push(fetch(pokemonUrl(i)).then((res) => res.json()))
  }

  const allPokemons = await Promise.all(pokemonPromises)

  return allPokemons
}

export default async function Page() {
  const data = await fetchPokemon(150)

  return (
    <main>
      <h1>Pokemons</h1>
      <hr />
      <section className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-12 w-full">
        {data.map((pokemon) => {
          return (
            <Link href={`/${pokemon.id}`} key={pokemon.id}>
              <Pokemon
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
              />
            </Link>
          )
        })}
      </section>
    </main>
  )
}
