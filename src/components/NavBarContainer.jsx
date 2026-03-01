import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getCategories } from '../firebase/db';

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) =>
      setCategories(categories)
    );
  }, []);
  return <Navbar categories={categories} />;
}

export default NavBarContainer;
