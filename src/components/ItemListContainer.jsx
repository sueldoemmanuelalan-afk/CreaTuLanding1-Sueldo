import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { getItems } from "../firebase/db";

function ItemListContainer () {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId, setProducts);
  }, [categoryId]);

  return (
    <ItemList items={products} />
  );
}

export default ItemListContainer;
