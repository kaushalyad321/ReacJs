import React,{createContext,useState} from 'react'
import Cart from './Cart'
export const productsContext = createContext();
const ShoppingCart = () => {
  const [productsList, setProductsList] = useState([]);
  const addProduct = (product) => {
    setProductsList([...productsList, product]);
  };

  const removeProduct = (product) => {
    let updatedProduct = productsList.filter((el) => el !== product);
    setProductsList(updatedProduct);
  };

  return (
    <>
      <productsContext.Provider value={productsList}>
        <div
          className="mainCart"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div>
            <p>PRODUCT-1</p>
            <p>PRICE: 100</p>
            <button
              onClick={() =>
                addProduct({ productName: "PRODUCT-1", price: "100" })
              }
            >
              Add to Cart
            </button>
          </div>
          <div>
            <p>PRODUCT-2</p>
            <p>PRICE: 200</p>
            <button
              onClick={() =>
                addProduct({ productName: "PRODUCT-2", price: "200" })
              }
            >
              Add to Cart
            </button>
          </div>

          <div>
            <p>PRODUCT-3</p>
            <p>PRICE: 300</p>
            <button
              onClick={() =>
                addProduct({ productName: "PRODUCT-3", price: "300" })
              }
            >
              Add to Cart
            </button>
          </div>
          <div>
            <p>PRODUCT-4</p>
            <p>PRICE: 340</p>
            <button
              onClick={() =>
                addProduct({ productName: "PRODUCT-4", price: "340" })
              }
            >
              Add to Cart
            </button>
          </div>
          <div>
            <p>PRODUCT-5</p>
            <p>PRICE: 450</p>
            <button
              onClick={() =>
                addProduct({ productName: "PRODUCT-5", price: "450" })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <Cart/>
        </div>
        <div style={{display:'flex',width:'450px',justifyContent:'flex-start',fontSize:'26px'}}>
          <div>PRODUCTS</div>
          <div style={{marginLeft:'50px'}}>PRICE</div>
          <div></div>
        </div>

        {productsList.map((task, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                width: "450px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "25px" }}> {task.productName}</div>
              <div style={{ fontSize: "25px" }}>{task.price}</div>
              <div>
                <button
                  style={{ marginLeft: "30px" }}
                  onClick={() => removeProduct(task)}
                >
                  Remove Product
                </button>
              </div>
            </div>
          );
        })}
      </productsContext.Provider>
    </>
  );
};

export default ShoppingCart;
