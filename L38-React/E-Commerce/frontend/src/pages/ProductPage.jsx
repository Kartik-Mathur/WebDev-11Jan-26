import React, { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router";
import api from "../api";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProductDetails() {
      let { data } = await api.get(`/app/get-product/${id}`);
      //   console.log(data);
      return data.product;
    }

    getProductDetails()
      .then((fetchedProduct) => {
        setProduct(fetchedProduct);
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>...Loading </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.card}>
            {/* Product Image */}
            <div className={styles.image}>
              <img src={product.imageUrl} alt={product.name} />
            </div>

            {/* Product Information */}
            <div className={styles.info}>
              <span className={styles.category}>{product.category}</span>

              <h1 className={styles.title}>{product.name}</h1>

              <h2 className={styles.price}>${product.price}</h2>

              <p className={styles.description}>{product.description}</p>

              <div className={styles.details}>
                <p>
                  <strong>Product ID:</strong> {product._id}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Admin ID:</strong> {product.adminId}
                </p>
              </div>

              <button className={styles.cartBtn}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
