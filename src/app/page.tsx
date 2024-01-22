'use client'
import { Book } from "@/components/Book/";
import { BookContainer } from "@/components/BookContainer/";
import { Header } from "@/components/Header/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>();
  const [editState, setEditState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api-book.eleomardorneles.com.br/api/book?page=1&limit=10');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  })

  return (
  <>
    <Header editState={editState} setEditState={setEditState}/>
    <BookContainer>
      {data && data.items.map((book:any) => <Book key={book.id} book={book} editState={editState}/>)}
    </BookContainer>
  </>
  );
}

