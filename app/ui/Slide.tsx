"use client"
import {useRef, useState} from "react";
import { CarouselData } from "@/app/lib/definitions";
import HeaderControls from "./HeaderControls";
import { url } from "../lib/url";
import HeaderControlLarge from "./HeaderControlLarge";
import YouTubeEmbed from "./YouTubeEmbed";
import {hold} from "@/app/lib/waiter";
import { carouselData } from "../lib/carousel-data";


const Slide = () => {
  const ref:any = useRef(null);
  const [idx, setIdx] = useState(0)

  const handleVideoPlay = () => {
    // alert('Video started playing!');
    // Add any custom logic here
    
      if (ref.current) {
        ref.current.style.display = 'block';
      }
    
  };

  const handleVideoEnd = () => {
    // alert('Video ended!');
    // Add any custom logic here
    if (ref.current) {
      ref.current.style.display = 'none';
    }

    setIdx((idx + 1) % 4);
  };

  return (
    <div className="relative size-full overflow-hidden">

      <img src={url + carouselData[idx].poster_path} alt="" className="absolute sm:hidden size-full -translate-y-14 object-fill z-30" />

      <img src={url + carouselData[idx].backdrop_path} alt="" className="absolute hidden sm:block size-full md:w-fit md:right-0 md:translate-x-32 z-30" />
      

      <div ref={ref} className={"hidden absolute size-fit top-0 right-0 z-50"}>
      <YouTubeEmbed videoId={carouselData[idx].youtube_path} onPlay={handleVideoPlay} onEnd={handleVideoEnd} idx={idx}/>

      </div>

      <div className="md:hidden absolute w-full h-32 bottom-0 bg-gradient-to-t from-40% from-black to-100% z-50">
        <HeaderControls item={carouselData[idx]} />
      </div>

      <div className="absolute h-full w-4/6 hidden md:block md:bg-gradient-to-r from-65% from-black z-50">
        <HeaderControlLarge item={carouselData[idx]}/>
      </div>
    </div>
  )
}

export default Slide