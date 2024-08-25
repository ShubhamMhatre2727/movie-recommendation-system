import { url } from "@/app/lib/url.ts";
import { Movie } from "@/app/lib/definitions";
import Image from "next/image";
export default function Poster({ movie, wide }: { movie: Movie, wide:boolean }) {

   return (
      <a
         className={`relative snap-center ${(wide)?"min-w-60":"min-w-32"} rounded-lg sm:scroll-hidden overflow-hidden border-2`}
         href={url + movie.backdrop_path}
      >
         <Image src={`${url}${(wide)? movie.backdrop_path : movie.poster_path}`} alt={movie.title} className="hover:scale-110 transition" width={(wide)?240:128} height={75}/>
         {
            (wide) && <h1 className="absolute bottom-0 p-2 text-shadow text-sm flex items-end ">{movie.title}</h1>
         }
      </a>
   );
}
