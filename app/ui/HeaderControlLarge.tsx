import Image from "next/image";
import { CarouselData } from "../lib/definitions";

export default function HeaderControlLarge({item}:{item:CarouselData}){
    return(
        <div className="flex flex-col h-full pb-10 pl-10 justify-end gap-3">
            <h1 className="text-5xl font-extrabold">{item.title}</h1>
        <p className="text-sm w-3/4 opacity-50">{item.overview}</p>
        <p className="opacity-65">
          {
            item.genre_list.map((el, i) => (
              <span key={i}>{(i !== 0) && <>&nbsp;•&nbsp;</>}{el}</span>
            ))
          }
        </p>
        <div className="flex gap-2">
        <button className="flex items-center gap-1 px-3 py-1 bg-white text-black text-lg font-bold rounded-sm">
          <div className="w-0 h-0 
border-t-[7px] border-t-transparent
border-l-[11px] border-l-black
border-b-[7px] border-b-transparent"/>
          Play
        </button>
        <button className="flex items-center gap-1 px-3 py-1 text-gray-400 text-lg  rounded-sm border">
          <Image src="/Add.svg" alt="" width={25} height={25}/> My List
        </button>
        <button className="flex items-center gap-1 px-3 py-1 text-gray-400 text-lg  rounded-sm border">
        <Image src="/Info.svg" alt="" width={25} height={25}/> Info
        </button>
        </div>
        </div>
    )
}