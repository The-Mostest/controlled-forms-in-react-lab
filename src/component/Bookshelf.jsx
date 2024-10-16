import { useState } from "react";



const Bookshelf = () => {

    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState(
        { title: '', author: '' },
    )






    //! Handles

    const handleInputChange = (event) => (

        setNewBook({ ...newBook, [event.target.name]: event.target.value })

    )




    const handleSubmit = (event) => (
        event.preventDefault(),
        setBooks([...books, newBook]),
        setNewBook({ title: '', author: '' })
    )

    return (
        <>











            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="newBook">Book Title</label>
                        <input id="newBook" name="title" type="text" value={newBook.title} onChange={handleInputChange}></input>

                        <label htmlFor="newAuthor">Book Author</label>
                        <input id="newAuthor" name="author" type="text" value={newBook.author} onChange={handleInputChange}></input>

                        <button type="submit">Submit</button>


                    </form>

                </div>


                <div className="bookCardsDiv">

                    {books.map(book => (
                        <div className="bookCard" key={book.title}>

                            <h3> Title: {book.title}</h3>

                            <h3> Author: {book.author}</h3>

                        </div>
                    ))}




                </div>
            </div>















        </>
    )
}
export default Bookshelf;
