import ItemCount from "./ItemCount";

function ItemDetail ({ item }) {
  return (
    <div className="flex justify-center mt-10 container mx-auto p-4">
      <div className="card lg:card-side shadow-sm w-100 border border-red-500">
        {item ? (
        <figure className="px-4 pt-4 bg-black hover:bg-yellow-100 transition-all duration-300 ease-in-out w-full flex items-center justify-center" >
          <img className="max-h-96 object-contain"
            src={item?.images[0]}
            alt={item?.title} />
        </figure>)  : <div className="skeleton h-100 w-full bg-gray-700"></div>}
        <div className="card-body items-center text-center p-4 space-y-2 bg-black text-white">
          <h2 className="card-title font-bold text-xl text-yellow-300">{item?.title}</h2>
          <p className="text-gray-400">{item?.description}</p>
          <p className="text-xl font-semibold text-green-400">${item?.price}</p>
          <p className="text-sm text-red-400">${item?.discountPercentage}% off</p>
          <p className="text-sm text-yellow-400">Stock: {item?.stock}</p>
          <ItemCount />
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
