import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

function ItemListContainer () {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const url_base = 'https://dummyjson.com/products';
    const url_category = `https://dummyjson.com/products/category/${categoryId}`;

    fetch(categoryId ? url_category : url_base)
      .then(res => res.json())
      .then(data => setProducts(data.products));

  }, [categoryId]);

  return (
    <ItemList items={products} />
  );
}

export default ItemListContainer;
