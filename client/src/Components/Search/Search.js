import React from 'react'
import Form from 'react-bootstrap/Form';


function Search({data , setData}) {


  const search=(e)=>{
   
    let getTypedData = e.toLowerCase()

    if (getTypedData === "") {
      setData(data)
    }else{
      let storeData = data.filter((ele)=>{
        return ele.book.toLowerCase()
        .match(getTypedData)  || ele.author.toLowerCase().match(getTypedData)
         })
         setData(storeData)
    }
    

  }
 


  return (
    <>
      <div id='search-div' style={{marginTop:"25px" ,height:"3rem"}} className="d-flex , justify-content-center">

      <Form.Control
      style={{width:400,borderRadius:"7px 7px 7px 7px" }}
        type="text"
        id="inputText"
        
        placeholder="Search Here" 
        onChange={(e)=>{search(e.target.value)}}
      />
            
      </div>

    </>
  )
}

export default Search