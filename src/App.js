
import React,{useState} from "react";
import {useBooksApi} from "./books-api";
import SearchBar from "./searchbar";
import BookList from "./books-list";
import './App.css';

function App() {

let [value,setValue] = useState("");
let [books] = useBooksApi(value);
let handleChange = (e) =>
{
  let typedValue = e.target.value;
  setValue(typedValue);
}

  return (
    <div className="App">
      <SearchBar value={value} handleChange={handleChange}/>
      <BookList books={books} value={value}/>
    </div>
  );
}

export default App;
