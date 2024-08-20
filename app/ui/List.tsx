"use client";
// import { nowPlaying } from "@/app/lib/now-playing.ts";
import { useEffect, useRef, useState } from "react";
import {fetchData} from "@/app/lib/fetchData";
import { handleControls } from "@/app/lib/control-action";
import Poster from "./Poster";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import { Movie } from "../lib/definitions";

export default function List({path, wide}:{path:string, wide:boolean}) {
  const ref: any = useRef(null);
  const [movies, setMovies]:any = useState(null);

  useEffect(()=>{
    fetchData(path).then(res =>{
      setMovies(res)
    })

  },[])

  return (
    <div className="relative text-white cursor-pointer">
      <main
        ref={ref}
        className="flex gap-2 overflow-scroll sm:overflow-hidden snap-x  scroll-smooth"
      >
      {
      (movies)?
      movies.map((movie:Movie)=><Poster key={movie.id} movie={movie} wide={wide}/>)
      :<div className="animate-pulse">&nbsp;&nbsp;&nbsp; Loading</div>
      }
      </main>
      <div
        onClick={()=>handleControls("left", ref, true)}
        className="absolute opacity-0 sm:opacity-100 left-0 top-0 w-12 h-full flex items-center justify-start bg-gradient-to-r from-black  to-transparent to-90%"
      >
        <ArrowLeft/>
      </div>
      <div
        onClick={()=>handleControls("right", ref, true)}
        className="absolute opacity-0 sm:opacity-100 right-0 top-0 w-12 h-full flex items-center justify-end bg-gradient-to-l from-black  to-transparent to-90%"
      >
        <ArrowRight/>
      </div>
    </div>
  );
}
