import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { 
  getItem, 
  getAllItemsArray, 
  getItemsByCategoryArray 
} from "../firebase/db";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const [items, setItems] = useState([]);
  const { id, categoryId } = useParams();

  useEffect(() => {
    getItem(id).then(data => setItem(data));
  }, [id]);

  useEffect(() => {
    const promise = categoryId
      ? getItemsByCategoryArray(categoryId)
      : getAllItemsArray();
    promise.then(data => setItems(data));
  }, [categoryId]);

  return <ItemDetail item={item} items={items} />;
}

export default ItemDetailContainer;
