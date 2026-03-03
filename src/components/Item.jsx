import { useNavigate, useParams } from 'react-router-dom';

function Item({ prod }) {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const handleNavigate = () => {
    if (categoryId) {
      navigate(`/category/${categoryId}/item/${prod.id}`);
    } else {
      navigate(`/item/${prod.id}`);
    }
  };

  return (
    <div className="card w-[100%] shadow-sm mb-8 bg-black border-3 border-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out">
      <figure className="px-4 pt-4 bg-black hover:bg-yellow-300 transition-all duration-300 ease-in-out w-full flex items-center justify-center">
        <img
          src={prod.url}
          alt={prod.name}
          className="w-full object-cover"
        />
      </figure>
      <div className="items-center text-center p-4 space-y-2 bg-black text-white h-auto">
        <h3 className="font-semibold card-title text-yellow-300 text-xl">
          {prod.name}
        </h3>
        <p className="font-semibold text-green-400 text-lg">
          ${prod.price}
        </p>
        <p className="text-sm text-yellow-400">
          stock: {prod.stock}
        </p>
        <div className="justify-end">
          <button
            className="btn bg-red-500 hover:bg-yellow-300 hover:text-black text-white rounded-lg px-3 py-1 cursor-pointer"
            onClick={handleNavigate}>
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
