import React from "react";
import ItemList from '../Items/ItemList'
import LoginForm from './LoginForm'

function Content(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <LoginForm Users={props.Users}/>

        <ItemList Items={props.Items} onClick={props.onClick}/>
        
      </div>
    </div>
  );
}

export default Content;
