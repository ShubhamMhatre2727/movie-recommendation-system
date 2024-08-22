"use server"
import { Movie, movieVideos, requestOptions } from './definitions';
import { hold } from './waiter';
import fs from "fs";

function getUrl(path:string){
  return 'https://api.themoviedb.org/3/movie'+path+'?language=en-US&page=1';
}


// const url:string = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';


const options:requestOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "" + process.env.ACCESS_TOKEN
  },
  cache:"force-cache",
};


export async function fetchData(path:string){
  const res = await fetch(getUrl(path), options)
  const data = await res.json();
  // artificial delay of 5s
  // await hold(5000);
  return data.results;
}

export async function getMovieDetails(id:string){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
  const data = await res.json();
  return data
}

export async function getTrailer(id:string){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
  const data = await res.json();
  const trailers = data.results.filter((item:movieVideos)=>(item.type === "Trailer"))
  return trailers[trailers.length - 1]
}

export async function search(name:FormDataEntryValue){
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options);
  const data = await res.json();
  return data.results
}