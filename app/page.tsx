import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="bg-blue-700 text-center text-cyan-950 flex justify-end  h-[5vh]">
        <ul className="flex justify-center items-center gap-3 mr-10">
          <li>
            <Link href={"/galery"}>Galería</Link>
          </li>
          <li>
            <Link href={"/story"}>Historia</Link>
          </li>
          <li>
            <Link href={"/wheretobuy"}>Dónde comprar</Link>
          </li>
        </ul>
      </header >
    </div>
  );

}
