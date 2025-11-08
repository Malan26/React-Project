
import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState({ limit: 9, skip: 0 });
  const [load, setLoad] = useState(false);
  const [pagination, setPagination] = useState({ total: 0, limit: 9, skip: 0 });

  useEffect(() => {
    setLoad(true);
    fetch(`https://dummyjson.com/products?limit=${page.limit}&skip=${page.skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setPagination({ total: data.total, limit: data.limit, skip: data.skip });
      })
      .finally(() => setLoad(false));
  }, [page]);

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Products</h1>
      <div className="menuList">
        {!load ? (
          products.map((product) => (
            <MenuItem
              key={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price}
              product={product}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage({ limit: 9, skip: pagination.skip - pagination.limit })}
          disabled={pagination.skip === 0}
        >
          Prev
        </button>

        <span>
          Page {Math.floor(pagination.skip / pagination.limit) + 1} of {totalPages}
        </span>

        <button
          onClick={() => setPage({ limit: 9, skip: pagination.skip + pagination.limit })}
          disabled={pagination.skip + pagination.limit >= pagination.total}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Menu;