"use client"

type ErrorProps = {
  error: Error
}

export default function Error({ error }: ErrorProps) {
  return <h1>{error.message}</h1>
}
