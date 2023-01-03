const hectogramsToKg = (num: number) => {
  return num / 10
}

const hectogramsToLbs = (num: number) => {
  const result = num / 4.536
  return result.toFixed(2)
}

const decimetersToMeters = (num: number) => {
  return num / 10
}

const decimetersToInches = (num: number) => {
  const result = num / 3.937
  return result.toFixed(2).replace(".", '"')
}

export {
  hectogramsToKg,
  hectogramsToLbs,
  decimetersToMeters,
  decimetersToInches,
}
