import { url } from "@/app/lib/url.ts";
import { Movie } from "@/app/lib/definitions";
export default function Poster({ movie, wide }: { movie: Movie, wide:boolean }) {

   return (
      <a
         className={`relative snap-center ${(wide)?"min-w-60":"min-w-32"} rounded-lg sm:scroll-hidden overflow-hidden border-2`}
         href={"/home/details?id="+movie.id}
      >
         <img src={`${url}${(wide)? movie.backdrop_path : movie.poster_path}`} alt={movie.title} className="hover:scale-110 transition"/>
         
         {
            (wide) && <h1 className="absolute bottom-0 p-2 text-shadow text-sm flex items-end ">{movie.title}</h1>
         }
      </a>
   );
}
