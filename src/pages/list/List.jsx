import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import "./list.scss"
import Datatable from '../../components/datatable/Datatable'
const List = ({type}) => {
  return (
    <div className = "list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable type = {type}/>
      </div>
    </div>
    
  )
}

export default List
