import React from 'react'
import "./Widget.scss"
import { AccountBalanceOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material'
const Widget = ({type}) => {
  let data;
  // temporary
  const amount = 100;
  const diff = 20;
  switch(type){
    case "user":
      data = {
        title:"USERS",
        isMoney:false,
        link:"see all users...",
        icon:(
          <PersonOutline className = "icon"/>
        )
      };
      break;
      case "order":
      data = {
        title:"ORDERS",
        isMoney:false,
        link:"see all orders...",
        icon:(
          <ShoppingCartOutlined className = "icon"/>
        )
      };
      break;
      case "earning":
      data = {
        title:"EARNINGS",
        isMoney:true,
        link:"see net earning...",
        icon:(
          <MonetizationOnOutlined className = "icon"/>
        )
      };
      break;
      case "balance":
      data = {
        title:"BALANCE",
        isMoney:true,
        link:"see details...",
        icon:(
          <AccountBalanceOutlined className = "icon"/>
        )
      };
      break;
      default:break;

  }
  return (
    <div>
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$"} {amount}</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUp/>
            {diff}%
          </div>
          {data.icon}
        </div>
      </div>
    </div>
  )
}

export default Widget
