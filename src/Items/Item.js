import React from "react";

function Item({ item, onClick }) {
    
    let classes="btn btn-link btn-outline-light p-0 m-0 text-decoration-none font-weight-bold text-success"

    if(item.isBasketed){
        classes+=" text-danger"
    }
  return (
    <div
      className="card"
      style={{ width: "16rem", marginRight: "2%", marginBottom: "3%" }}
    >
      <img
        src={item.img}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
        className="card-img-top my-1"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <button
          type="button"
          className={classes}
          onClick={()=>onClick(item.id)}
        >{item.isBasketed?'- REMOVE FROM CART':'+ ADD TO CART'}
        </button>
      </div>
    </div>
  );
}

export default Item;
