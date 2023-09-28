import React from 'react'
import { NavLink } from 'react-router-dom'
const ProductList = () => {
  return (
    <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>GALAXY S7</div>

          <NavLink to="/S7">
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>GALAXY S1</div>
          <NavLink to="/S1">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>GALAXY S5</div>
          <NavLink to="/S5">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>SAMSUNG GALAXY A54</div>
          <NavLink to="/A54">
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>
            MOTOROLA S20
          </div>
          <NavLink to="/S20">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>RealMe 9A</div>
          <NavLink to="/A9">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
        <div className="item">
          <div style={{ marginLeft: "50px", marginTop: "10px" }}>
            POCO M2 PRO
          </div>
          <NavLink to="/Pro">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "80px",
              }}
            >
              <button style={{ width: "100px", height: "30px" }}>
                Description
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ProductList
