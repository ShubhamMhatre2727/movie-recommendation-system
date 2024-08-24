import { getTrailer } from "@/app/lib/fetchData"
import { useEffect, useRef, useState } from "react"
import YouTube from "react-youtube";

const TrailerEmbed = (id:any) => {
  const playerRef:any = useRef(null);
  const ref:any = useRef(null);
  const [path, setPath] = useState(null);
  const opts = {
    width: (window.innerWidth * 0.75),
    height: (window.innerWidth * 0.4),
    playerVars: {
      autoplay: 0,  // Autoplay the video
      mute: 0,   
      controls:1,
      rel:0,
    },
  };

    useEffect(()=>{
        getTrailer(id.id).then((res)=>{
            if(res){
              setPath(res.key);
            }
        })
    },[])

    function onReady(event:Event){
      playerRef.current = event.target;
    }
    function handleClick(){
      if(ref.current){
        if(ref.current.style.display == "block"){
          ref.current.style.display = "none";
          playerRef.current.stopVideo();
        }
        else{
          ref.current.style.display = "block";
          playerRef.current.playVideo();
        }
      }
    }
    
    function onEnd(){
      ref.current.style.display = "none";
    }

  return (
    <div>
      <button onClick={handleClick} className="flex items-center gap-1 px-3 py-1 my-2 bg-white text-black text-lg font-bold rounded-sm">
    <div className="w-0 h-0 
border-t-[7px] border-t-transparent
border-l-[11px] border-l-black
border-b-[7px] border-b-transparent"/>
      Trailer
    </button>

    <div ref={ref} className="fixed top-0 hidden z-50">
    <button onClick={handleClick} className="w-full text-end text-shadow">X</button>
    <YouTube
        videoId={path}
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
      />
    </div>
    </div>
  )
}

export default TrailerEmbed