import Link from "next/link";

export const revalidate = 60;

export const metadata = {
    title: 'Home',
    description: 'God',
}  

const fetchData = async () => {
    const ti = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await ti.json();
    return data;
}

export default async function Home() {
    const myTitle = await fetchData();
    console.log(myTitle)
    return (
      <main>
        <Link href={"/ssr"}>click me</Link>
        about page
        {myTitle.map((title) => (
            <h3>{title.title}</h3>
        ))}
      </main>
    )
  }
  