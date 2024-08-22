import List from "@/app/ui/List";
import Header from "../ui/Header";
import Seach from "../ui/Seach";

export default function Page(){
  return <main className="h-screen">
    <nav className="relative flex justify-between w-full">
      <h1>MovieRecommendationSystem</h1>
      <Seach/>
    </nav>
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