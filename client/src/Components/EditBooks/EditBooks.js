import React,{useState,useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import  axios  from "axios";
function EditBooks() {
    const navigate = useNavigate()

  const [books, setBooks] = useState({
    book: "",
    author: "",
    published: "",
    price: "",
    status: "",
  });

  const setHandler = (e) => {
    const { name, value } = e.target;
    setBooks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const { id } = useParams("");
  console.log(id);

  

  const getUserData = () => {
    axios.get(`http://localhost:5000/api/books/${id}`).then((res) => {
      if (res.status === 422 || !res) {
        alert("something error happend");
      } else {
        setBooks(res.data);
        console.log("get data");
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

const updateUser = async()=>{
    const { book, author, published, price, status } =  books;
  const responce = await axios.put(`http://localhost:5000/api/books/${id}`,{
    book, author, published, price, status
  })
  const resData = await responce.data

  if(resData === 422 || !resData){
    alert("plzz fill to update")
  }else{
  
    navigate('/')
  }
}
  return (
    <div id="form-main-div">
      <h1 className="d-flex justify-content-center ">Edit</h1>
    <div register-form className="d-flex align-items-center justify-content-center">
      <form id="form" className="w-25 rounded mt-5 ">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="d-flex justify-content-start">
            Name
          </label>
          <input
            type="text"
            onChange={setHandler}
            value={books.book}
            name="book"
            class="form-control"
            aria-describedby="emailHelp"
            autoComplete="off"
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="d-flex justify-content-start"
          >
            email
          </label>
          <input
            type="text"
            onChange={setHandler}
            value={books.author}
            name="author"
            class="form-control"
            autoComplete="off"

          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="d-flex justify-content-start"
          >
          Location
          </label>
          <input
            type="text"
            onChange={setHandler}
            value={books.published}
            name="published"
            class="form-control"
            autoComplete="off"

          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="d-flex justify-content-start"
          >
            Mobile
          </label>
          <input
            type="text"
            onChange={setHandler}
            value={books.price}
            name="price"
            class="form-control"
            autoComplete="off"

          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="d-flex justify-content-start"
          >
            Domain
          </label>
          <input
            type="text"
            onChange={setHandler}
            value={books.status}
            name="status"
            autoComplete="off"
            class="form-control"
          />
        </div>

        <button onClick={updateUser}  type="submit" class="btn btn-primary m-3">Submit </button>
        <Link to="/">
              <button type="submit" class="btn btn-primary">
                Go to Home
              </button>
            </Link>
      </form>
    </div>
    </div>
  )
}

export default EditBooks