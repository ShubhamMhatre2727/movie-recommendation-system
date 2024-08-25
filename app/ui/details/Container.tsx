"use client"
import { url } from "@/app/lib/url"
import List from "../List"
import TrailerEmbed from "./TrailerEmbed"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { getMovieDetails } from "@/app/lib/fetchData"

type Genre = {
  id:number,
  name:string
}

const Container = () => {

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams)
  const [movie, setMovie]:any=useState(null);

  useEffect(()=>{
    getMovieDetails(`${params.get("id")}`)
      .then((data)=>{
        setMovie(data)
      })
  },[])

  return (
    (movie)&&
    <div style={{backgroundImage:`url(${url + movie.backdrop_path})`}} className="bg-no-repeat bg-contain">
        <div className="pt-40 pb-12 px-4 bg-gradient-to-t from-55% md:from-20% from-black">
        <img className="w-40 mx-auto md:mx-0" src={`${url}${movie.poster_path}`} alt="" />
        
        <h1 className="text-2xl font-bold text-center md:text-start">{movie.original_title}</h1>
        <p className="text-xs opacity-35 py-2 md:w-[70%]">{movie.overview}</p>
        <p className="text-xs opacity-50">Genre: &nbsp;
          {
            movie.genres.map((genre:Genre,idx:number)=>(
              <span key={idx}>{idx!==0 && " | "}{genre.name}</span>
            ))
          }
        </p>
        <p className="text-xs opacity-75">Duration: {movie.runtime} min.
          <br/>
          Rating: ⭐{movie.vote_average.toFixed(1)}</p>
        <p className="text-xs text-blue-400"><a href={movie.homepage} target="blank">visit page</a></p>
          <TrailerEmbed id={movie.id}/>
        </div>

        <div className="bg-black">
        Similar
        <List path={`/${movie.id}/similar`} wide={false}/>
        </div>
        <div className="bg-black">
        Recommended
        <List path={`/${movie.id}/recommendations`} wide={false}/>
        </div>
    </div>  
  )
}

export default Container