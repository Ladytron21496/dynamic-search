import React from "react";

function BookList({books,value})
{
    return(<div className="App" style={{color:"white" , fontSize:"20px" , fontWeight: "700" ,marginTop:"2%"}}>
    {books.length > 0 && value!=="" && <ul>{books.map((book)=>{
      return ( <li>{book}</li>)
    })}</ul>}
  </div>);
}

export default BookList;