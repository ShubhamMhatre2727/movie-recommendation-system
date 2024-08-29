import Link from "next/link";

export default function Home() {
  return (
    <main className="App h-screen relative z-50 overflow-hidden">
      <div className="background-slider absolute -z-50"></div>
      <div className="h-full flex flex-col justify-center items-center">
        
        <h1 className="text-3xl font-bold uppercase text-center">Movie Recommendation System</h1>

        <p className="text-xs opacity-60 w-3/4 my-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quo voluptate fugit eos nostrum ad voluptatem modi? Ab voluptas reiciendis expedita cupiditate nisi beatae cumque harum dolore quo consequuntur possimus iste, ut magnam?,</p>

        <Link href="/home" className="text-xl font-bold w-56 h-12 rounded-md grid place-items-center bg-blue-700 active:border cursor-pointer">Get Started</Link>
      </div>
    </main>
  );
}
