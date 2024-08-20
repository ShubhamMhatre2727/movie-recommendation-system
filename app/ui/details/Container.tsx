import { Movie } from "@/app/lib/definitions"
import { url } from "@/app/lib/url"
import List from "../List"

type Genre = {
  id:number,
  name:string
}

const Container = ({movie}:{movie:any}) => {
  return (
    <div style={{backgroundImage:`url(${url + movie.backdrop_path})`}} className="bg-no-repeat bg-contain">
        <div className="pt-40 pb-12 px-4 bg-gradient-to-t from-55% md:from-20% from-black">
        <img className="w-40 mx-auto md:mx-0" src={`${url}${movie.poster_path}`} alt="" />
        
        <h1 className="text-2xl font-bold text-center md:text-start">{movie.original_title}</h1>
        <p className="text-xs opacity-35 py-2 md:w-[70%]">{movie.overview}</p>
        <p className="text-xs opacity-50">Genre: &nbsp;
          {
            movie.genres.map((genre:Genre,idx:number)=>(
              <span>{idx!==0 && " | "}{genre.name}</span>
            ))
          }
        </p>
        <p className="text-xs opacity-75">Duration: {movie.runtime} min.
          <br/>
          Rating: ⭐{movie.vote_average.toFixed(1)}</p>
        <p className="text-xs text-blue-400"><a href={movie.homepage} target="blank">visit page</a></p>
        <button className="flex items-center gap-1 px-3 py-1 my-2 bg-white text-black text-lg font-bold rounded-sm">
      <div className="w-0 h-0 
border-t-[7px] border-t-transparent
border-l-[11px] border-l-black
border-b-[7px] border-b-transparent"/>
        Trailer
      </button>
        </div>

        <div className="bg-black">
        Recommended
        <List path={"/popular"} wide={false}/>
        </div>
    </div>
  )
}

export default Container