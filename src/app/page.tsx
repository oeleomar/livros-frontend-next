'use client'
import { AddNewBook } from "@/components/AddNewBook";
import { Book } from "@/components/Book/";
import { BookContainer } from "@/components/BookContainer/";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [editState, setEditState] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api-book.eleomardorneles.com.br/api/book?page=1&limit=10');
      const dataResponse = await response.json();
      setData(dataResponse);
    }
    fetchData();
  }, [])

  if(!data) {
    return (
      <>
        <Header editState={editState} setEditState={setEditState} setIsOpen={setIsOpen}/>
        <h1>Carregando...</h1>
      </>
    )
  }

  return (
  <>
    <Header editState={editState} setEditState={setEditState} setIsOpen={setIsOpen}/>
    <AddNewBook modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
    <BookContainer>
      {data && data.items.map((book:any) => <Book key={book.id} book={book} editState={editState}/>)}
    </BookContainer>
    <Footer data={data} setData={setData}/>
  </>
  );
}

