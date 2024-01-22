'use client'
import { Book } from "@/components/Book/";
import { BookContainer } from "@/components/BookContainer/";
import { Header } from "@/components/Header/Header";

export default async function Home() {
  const data = await getData();
  let editState = false;

  console.log(data)
  
  return (
  <>
    <Header editState={editState}/>
    <BookContainer>
      {data && data.items.map((book:any) => <Book key={book.id} book={book}/>)}
    </BookContainer>
  </>
  );
}

const getData = async () => {
  const response = await fetch('https://api-book.eleomardorneles.com.br/api/book?page=1&limit=10', {headers: {'Access-Control-Allow-Origin': '*'}});
  return response.json();
}

