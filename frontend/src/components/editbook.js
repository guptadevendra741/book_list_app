import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/editbook.css";

function Editbook() {
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [pdate, setPdate]= useState("")
    const [publisher, setPublisher] = useState("")

    // const handleUpdate = async(id)=>{

    //     const headers={"authorization":localStorage.getItem("token")}
    //     const res = await axios.put(`http://localhost:4000/books/${id}`, {headers})
    //     console.log(res.data)
    //     navigate("/home")
    // }
  return (
    <div>
      <div className="container-box">
      <div className="left">
                    <Link to="/home">Show Book List</Link>
                </div>

                <h1 className="heading">EDIT BOOK INFO</h1>
                
              
        <div className="add-box">
          <form >
            <div className="box1">
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add Title"
                onChange={(e)=>{setTitle(e.target.value)}}
                value={title}
              />
            </div>
            <div className="box1">
              <label htmlFor="author">Author</label>
              <br />
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Add Author"
                onChange={(e)=>{setAuthor(e.target.value)}}
                value={author}
              />
            </div>
            <div className="box1">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Book Description"
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
              />
            </div>
            <div className="box1">
              <label htmlFor="date">Publish Date</label>
              <br />
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Add date"
                onChange={(e)=>{setPdate(e.target.value)}}
                value={pdate}
              />
            </div>
            <div className="box1">
              <label htmlFor="publisher">Publisher Name</label>
              <br />
              <input
                type="text"
                name="publisher"
                id="publisher"
                placeholder="Add publisher name"
                onChange={(e)=>{setPublisher(e.target.value)}}
                value={publisher}
              />
            </div>
            <Link to="/home"><button >Update Book</button></Link>
          </form>
        </div>
      </div>
      </div>
    
  );
}
export default Editbook;
