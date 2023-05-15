"use client";

import Link from "next/link";
import {useState, useEffect} from "react";

export default function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await res.json();
            setTodos(data)
        }
        fetchTodos();
    }, [])
    return (
      <main>
        <Link href={"/"}>click me</Link>
        about page
        {todos.map((title) => (
            <h3>{title.title}</h3>
        ))}
      </main>
    )
  }
  