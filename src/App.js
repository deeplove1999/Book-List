import React from "react";
import BookForm from "./components/bookform";
import BookList from "./components/booklist";
import Navbar from "./components/navbar";
import BookContextProvider from "./contexts/book";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
