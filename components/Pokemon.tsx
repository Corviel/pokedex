import Image from "next/image"
import { toCapitalize } from "../utils/strings"

type PokemonProps = {
  id: number
  name: string
  image: string
}

export default function Pokemon(Props: PokemonProps) {
  return (
    <div className="border border-black border-opacity-25 p-2 hover:bg-slate-200">
      <h2 className="text-lg text-slate-400 font-medium">{Props.id}</h2>
      <p className="text-xl text-slate-700 mb-4">{`${toCapitalize(
        Props.name
      )}`}</p>
      <div className="relative h-32">
        <Image
          src={Props.image}
          alt={`Pokémon ${Props.name}`}
          fill={true}
          priority={true}
        />
      </div>
    </div>
  )
}
