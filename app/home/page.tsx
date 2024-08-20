import List from "@/app/ui/List";
import Header from "../ui/Header";

export default function Page(){
  return <main className="h-screen">
   <div className="h-3/4">
      <Header/>
   </div>
    <div className="text-xl font-semibold pt-10 pl-1">
      Now Playing
      <List path={"/now_playing"} wide={true}/>
    </div>
    <div className="text-xl font-semibold pt-10 pl-1">
      Top Rated
      <List path={"/top_rated"} wide={false}/>
    </div>
  </main>;
  }