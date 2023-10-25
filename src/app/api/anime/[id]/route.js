import { NextResponse } from 'next/server'

export async function GET(request) {
  const animeId = request.url.slice(request.url.lastIndexOf('/')+1)
  const res = await fetch(`https://back-anime-dle.onrender.com/anime-info-by-id?id=${animeId}`)
  const data = await res.json()
  console.log(data)
 
  return NextResponse.json({ data })
}