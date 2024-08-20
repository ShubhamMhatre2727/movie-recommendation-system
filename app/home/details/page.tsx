"use client"
import { getMovieDetails } from "@/app/lib/fetchData";
import Container from "@/app/ui/details/Container";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams)
  const [movie, setMovie]:any=useState(null);

  useEffect(()=>{
    getMovieDetails(`${params.get("id")}`)
      .then((data)=>{
        setMovie(data)
      })
  },[])
  return <>
    {
    (movie)? <Container movie={movie}/> : <>Loading</>
  }
  </>
}

export default page