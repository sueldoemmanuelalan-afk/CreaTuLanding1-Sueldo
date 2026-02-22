import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getItem } from "../firebase/db";

function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then(data => setItem(data));
  }, [id]);

  return <ItemDetail item={item} />;
    
}

export default ItemDetailContainer;
