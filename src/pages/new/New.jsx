import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import './new.scss'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
const New = ({inputs,title}) => {
  const [file,setFile] = useState("");
  // console.log(file);
  return (
    <div className = "new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt = ""/>
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadOutlined className = "icon"/></label>
                <input onChange = {e=>setFile(e.target.files[0])} type="file" id = "file" style = {{display:"none"}}/>
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key = {input.id}>
                <label htmlFor="">{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              
              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
