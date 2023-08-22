import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function CreateBook() {
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

      const addUser = async (e) => {
        e.preventDefault();
        const { book, author, published, price, status } =  books;
    
        const res = await axios.post("http://localhost:5000/api/add", {
            book,
            author,
            published,
            price,
            status,
        });
        
        const resdata = res
        console.log(resdata);
        if (resdata.status === 422 || !resdata) {
          console.log("error");
          alert("error");
        } else {
          // setUdata(data)
        //   const userid = resdata.data._id
          console.log("data added");
          navigate("/");
        }
      };
    return (
        <div id="form-main-div">
      <h1 className="d-flex justify-content-center ">Register</h1>
      <div
        id="register-form"
        className="d-flex align-items-center justify-content-center"
      >
        <form id="form" className=" rounded mt-5 ">
          <div class="mb-3">
            <label
              for="exampleInputEmail1"
              class="d-flex justify-content-start"
            >
              Book
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
              Author
            </label>
            <input
              type="email"
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
              Publised
            </label>
            <input
              type="number"
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
              Price
            </label>
            <input
              type="text"
              onChange={setHandler}
              value={books.price}
              name="price"
              class="form-control"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleInputPassword1"
              class="d-flex justify-content-start"
            >
              Status
            </label>
            <input
              type="tex"
              onChange={setHandler}
              value={books.status}
              name="status"
              class="form-control"
              autoComplete="off"
            />
          </div>

          <div className="btn-container d-flex justify-content-between">
            <button onClick={addUser} type="submit" class="btn btn-primary">
              Submit
            </button>

            <Link to="/">
              <button type="submit" class="btn btn-primary">
                Go to Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
}

export default CreateBook