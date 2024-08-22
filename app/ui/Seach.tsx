'use client'
import { useState } from "react"
import { search } from "../lib/fetchData";
import { Movie } from "../lib/definitions";

const Seach = () => {
    const [movies, setMovies] = useState([]);

    function handleSearch(formData:FormData){
        search(""+formData.get("input")).then((res)=>{
            // console.log(res);
            setMovies(res)
        })
    }

  return (
    <div className="relative">
        <form action={handleSearch}>
        <input type="text" onChange={()=>setMovies([])} name="input" placeholder="Search..." className="border opacity-30 focus:opacity-100" />
        </form>
        <div className="flex flex-col">
        {
            movies.map((el:Movie)=>(
                <a key={el.id} href={`/home/details?id=${el.id}`}>{el.title}</a>
            ))
        }
        </div>
    </div>
  )
}

export default Seach