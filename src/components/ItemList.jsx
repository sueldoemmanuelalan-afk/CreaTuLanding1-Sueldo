import Item from './Item';

function ItemList({ items = [] }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4
      justify-items-center p-3 py-6 bg-black mt-20 ">
      {items.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
}

export default ItemList;
