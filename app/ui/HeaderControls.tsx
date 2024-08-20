import { CarouselData } from "../lib/definitions";
import AddIcon from "./AddIcon";
import InfoIcon from "./InfoIcon";

export default function HeaderControls({item}:{item: CarouselData}){


    return<div className="size-full flex flex-col justify-end items-center gap-4 text-[10px]">
      <h1 className="text-5xl font-extrabold sm:block hidden">{item.title}</h1>
        
    <p className=" [&>*]:text-gray-300">
      {
        item.genre_list.map((el, i)=>(
          <span key={i}>{(i!==0) && <>&nbsp;•&nbsp;</>}{el}</span>
        ))
      }
    </p>
    <div className="w-full flex justify-evenly items-end">
      <a href="" className="flex flex-col items-center text-gray-300"><AddIcon/>My List</a>
      <button className="flex items-center gap-1 px-3 py-1 bg-white text-black text-lg font-bold rounded-sm">
      <div className="w-0 h-0 
border-t-[7px] border-t-transparent
border-l-[11px] border-l-black
border-b-[7px] border-b-transparent"/>
        Play
      </button>
      <a href="" className="flex flex-col items-center text-gray-300"><InfoIcon/>Info</a>
    </div>
   </div>
}