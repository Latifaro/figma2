
import React from "react";
import styles from "./main.module.scss";
import Navbar from "./navbar";

function Main({ cartItems, increment, decrement }) {
    return (
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                    <img src="./mainImages/Rectangle.png" alt="Image" style={{ width: '300px' }} />

                <ul>
                    <li>
                        <p>
                            <img src="./mainImages/Rectangle1.png" alt="Image" />
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src="./mainImages/Rectangle2.png" alt="Image" />
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src="./mainImages/Rectangle3.png" alt="Image" />
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src="./mainImages/Rectangle4.png" alt="Image" />
                        </p>
                    </li>
                </ul>
            </div>
            <div className={styles.textCont}>
                <div className={styles.text}>
                    <h6>Sneacker company</h6>
                    <h1>Fall Limited Editon Sneakers</h1>
                    <h5>
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they all withstand everything
                        the weather can offer.
                    </h5>
                </div>
                <div>
                    <div className={styles.newPrice}>
                        <h2>$125.00</h2>
                        <p>50%</p>
                    </div>
                    <div className={styles.oldPrice}>
                        <h5>$250.00</h5>
                    </div>
                </div>
                <div className={styles.buying}>
                    <div className={styles.button}>
                        <button onClick={decrement}>-</button>
                        <p>{cartItems}</p>
                        <button onClick={increment}>+</button>
                    </div>
                    <div>
                        <button onClick={increment} className={styles.cart}>
                            <img src="./mainImages/Cart.png" alt="Cart" />
                            <h5>Add to Cart</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;





