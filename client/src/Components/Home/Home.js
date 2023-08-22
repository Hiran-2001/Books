import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai"
import { MdModeEditOutline, MdDelete } from "react-icons/md"
function Home() {
    const [books, setBooks] = useState([])
    console.log(books);
    const getUser = () => {


        axios.get("http://localhost:5000/api/books")
            .then((res) => {
                if (res.status === 422 || !res) {
                    alert("something error happend");
                } else {
                    setBooks(res.data)
                    // console.log("data added");
                }
            });
    };
    useEffect(() => {
        getUser();
    }, [])

    const deleteUser = async (id) => {
        const deleteRes = axios.delete(`http://localhost:5000/api/books/${id}`)
        console.log(deleteRes.data);
        if (deleteRes === 422 || !deleteRes) {
            console.log("err");
        } else {
            console.log("user deleted");
            getUser();
        }

    }
    return (
        <div className="mt-5 ml-5">
            <div className="container">
                <div className="add_btn">
                    <Link to='/add-book'><button className="btn btn-primary" >Add Book</button>   </Link>
                </div>

                <table class="table mt-5 ">
                    <thead>
                        <tr class="table-primary" >
                            <th scope="col">No</th>
                            <th scope="col">Book</th>
                            <th scope="col">Author</th>
                            <th scope="col">published</th>
                            <th scope="col">price</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            books.map((data, id) => {

                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{data.book}</td>
                                            <td>{data.author}</td>
                                            <td>{data.publised}</td>
                                            <td>{data.price}</td>
                                            <td>{data.status}</td>
                                            <td className="d-flex justify-content-between">
                                                {/* <Link to={`details/${data._id}`}>  <button className="btn btn-success pt-1"><AiFillEye /></button></Link> */}
                                                <Link to={`edit/${data._id}`}><button className="btn btn-primary pt-1 "><MdModeEditOutline /></button></Link>
                                                <button onClick={() => deleteUser(data._id)} className="btn btn-danger pt-1 "><MdDelete /></button>
                                            </td>

                                        </tr>
                                    </>
                                )


                            })
                        }



                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home