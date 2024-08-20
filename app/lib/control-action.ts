export function handleControls(side:string, ref:any, halfMotion:boolean = false) {
    const width: number = ref.current?.offsetWidth; 
    if(side == "right") {
      ref.current.scrollLeft += (halfMotion)? width / 2 : width;
    } else{
      ref.current.scrollLeft -= (halfMotion)? width / 2 : width;
    }
  }