import Image from "next/image"
import Link from "next/link"
import {
  decimetersToInches,
  decimetersToMeters,
  hectogramsToKg,
  hectogramsToLbs,
} from "../../utils/numbers"
import { fetchPokemon } from "../page"

type ParamsProps = {
  params: {
    id: number
  }
}

type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type Form = {
  name: string
  url: string
}

export async function generateStaticParams() {
  const pokemon = await fetchPokemon(150)

  return pokemon.map((p) => ({
    id: p.id.toString(),
  }))
}

async function getPokemonFromId(id: number) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  if (!pokemon.ok) {
    throw new Error("Failed to fetch data")
  }
  return pokemon.json()
}

export default async function Page({ params }: ParamsProps) {
  const pokemon = await getPokemonFromId(params.id)
  let image = pokemon.sprites.other["official-artwork"].front_default

  return (
    <>
      <main>
        <Link href="/">Home</Link>
        <h1 className="text-5xl text-center text-neutral-400 font-medium py-12">
          {pokemon.name.toUpperCase()}
        </h1>
        <section className="grid grid-cols-pokemon container mx-auto items-center">
          <table className="text-md duration-300 hover:skew-y-0 -skew-y-12 [&>tr>td:nth-child(1)]:font-bold [&>tr>td]:p-3">
            <tr>
              <td>ID</td>
              <td>#{pokemon.id}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>
                {decimetersToMeters(pokemon.height)}m ({" "}
                {decimetersToInches(pokemon.height)}&apos; )
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>
                {hectogramsToKg(pokemon.weight)}kg (
                {hectogramsToLbs(pokemon.weight)}lbs. )
              </td>
            </tr>
            <tr>
              <td>Abilities</td>
              <td>
                <div className="max-w-[150px] flex flex-wrap gap-2">
                  {pokemon.abilities.map((item: Ability) => {
                    return (
                      <span key={item.toString()} className="bg-red-500">
                        {item.ability.name}{" "}
                      </span>
                    )
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                {pokemon.types.map((item: Type) => {
                  return <span key={item.toString()}>{item.type.name} </span>
                })}
              </td>
            </tr>
            <tr>
              <td>Forms</td>
              <td>
                {pokemon.forms.map((item: Form) => {
                  return <span key={item.toString()}>{item.name}</span>
                })}
              </td>
            </tr>
          </table>

          <div className="relative h-[700px]">
            <Image src={image} alt={`${pokemon.name}`} fill={true} />
          </div>

          <table className="text-md duration-300 hover:skew-y-0 skew-y-12 justify-self-end [&>tr>td:nth-child(1)]:font-bold [&>tr>td]:p-3">
            <tr>
              <td>ID</td>
              <td>#{pokemon.id}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>
                {decimetersToMeters(pokemon.height)}m ({" "}
                {decimetersToInches(pokemon.height)}&apos; )
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>
                {hectogramsToKg(pokemon.weight)}kg (
                {hectogramsToLbs(pokemon.weight)}lbs. )
              </td>
            </tr>
            <tr>
              <td>Abilities</td>
              <td>
                <div className="max-w-[150px] flex flex-wrap gap-2">
                  {pokemon.abilities.map((item: Ability) => {
                    return (
                      <span key={item.toString()} className="bg-red-500">
                        {item.ability.name}{" "}
                      </span>
                    )
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                {pokemon.types.map((item: Type) => {
                  return <span key={item.toString()}>{item.type.name} </span>
                })}
              </td>
            </tr>
            <tr>
              <td>Forms</td>
              <td>
                {pokemon.forms.map((item: Form) => {
                  return <span key={item.toString()}>{item.name}</span>
                })}
              </td>
            </tr>
          </table>
        </section>
      </main>
    </>
  )
}
