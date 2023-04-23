import React, { useEffect, useState } from "react";
import "../components/home.css";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import image from "./bookimage.png";

function Home(){
const navigate = useNavigate()
const [data, setData]= useState()
const [fetch, setFetch] = useState(false)

useEffect(()=>{
    getData()
},[])

const getData=async()=>{
    const headers = {"authorization":localStorage.getItem("token")}
    const res = await axios.get("http://localhost:4000/books", {headers})
    console.log(res.data)
    setData(res.data.books)
    setFetch(true)
}

const handleDelete = async(id)=>{
    const headers = {"authorization":localStorage.getItem("token")}
    const res = await axios.delete(`http://localhost:4000/books/${id}`, {headers})
    console.log(res.data)

    const newList= data.filter((item)=> (item.id !==id))
    setData(newList)
}
const handleUpdate = async(id)=>{

    const headers={"authorization":localStorage.getItem("token")}
    const res = await axios.put(`http://localhost:4000/books/${id}`, {headers})
    console.log(res.data)
}

const handleLogout=async(e)=>{

    e.preventDefault()
    console.log("working")
    const res = await axios.get("http://localhost:4000/logout")
    console.log(res);

    if(res.data.status==="success"){
        sessionStorage.removeItem("token",res.data.token)
        alert("Log Out Successful")
        navigate('/')
    }
}
    return(
        <div>
            <div className="container-box">
                <div className="navbar">
                <div className="left">
                    <Link to="/home">Show Book List</Link>
                </div>
                    <div className="right">
                    <Link to= "/" onClick={handleLogout}>LOG OUT</Link>
                    </div>
                </div>
                <div className="heading">
                <h1 className="heading">BOOK'S LIST</h1></div>
                <div className="addbook"><Link to="/addbook"><button className="add">+ Add Book</button></Link></div>

                <div className="show-data">
                    {fetch&&data.map((item,id)=>{
                        return(
                            <div className="show" key={id}>
                                <img src={image} alt="bookimage"/>
                                <br/>
                                <h3>Title:{fetch&&item?.title}</h3>
                                <br/>
                                <p>Author:{fetch&&item?.author}</p>
                                <br/>
                                <p>Description:{fetch&&item?.description}</p>

                                <div className="buttons">
                                <table>
                                
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Title</td>
                                        <td>{fetch&&item?.title}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Author</td>
                                        <td>{fetch&&item?.author}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Description</td>
                                        <td>{fetch&&item?.description}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Publish date</td>
                                        <td>{fetch&&item?.date}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Publisher name</td>
                                        <td>{fetch&&item?.publisher}</td>
                                    </tr>
                                   
                                </tbody>
                                </table>
                                <br/>
                                <Link to="/editbook"><button className="update" onClick={()=>{handleUpdate(item.id)}}>Edit Book</button></Link>
                                <button className="delete" onClick={()=>{handleDelete(item.id)}}>Delete Book</button>
                            </div>
</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Home;