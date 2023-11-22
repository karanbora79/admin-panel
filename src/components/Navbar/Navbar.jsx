import React from 'react'
import './Navbar.scss'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchOutlined/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className = "icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className = "icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className = "icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className = "icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className = "icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className = "icon"/>
          </div>
          <div className="item">
            <img src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" alt="" className = "avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
