import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg neutral-950 min-h-screen felx flex-col justify-center items-center text-neutral-0 gap-14">
      <header>
        <img
          className="h-40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
          alt="pokemon"
        />
        <h1 className="text-2xl">Este es otro Pokedex XD</h1>
        <Link to="/pokemon" className="bg bg-red-500 text-neutral-100 rounded-md p-4">
          Ir al Pokedex </Link>
       
      </header>
    </main>
  );
}
