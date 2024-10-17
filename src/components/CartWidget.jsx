import React from "react";
import cart from "../assets/cart-svgrepo-com.svg";

const CartWidget = () => {
  return (
    <>
      <img
        src={cart}
        alt="cart"
        className="cart"
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
      />
      <div
        style={{
          borderRadius: "50%",
          border: "1px",
          backgroundColor: "#df6c00",
          width: "18px",
          height: "20px",
          position: "absolute",
          top: "10px",
          right: "623px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white", fontSize: "11px" }}>4</span>
      </div>
    </>
  );
};

export default CartWidget;
