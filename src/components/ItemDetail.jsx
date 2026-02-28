import { useNavigate, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ item, items }) {
  const navigate = useNavigate();
  const { id, categoryId } = useParams();

  if (!item || items.length === 0) return null;

  const currentIndex = items.findIndex(prod => prod.id === id);

  const goNext = () => {
    if (currentIndex < items.length - 1) {
      const nextItem = items[currentIndex + 1];
      if (categoryId) {
        navigate(`/category/${categoryId}/item/${nextItem.id}`);
      } else {
        navigate(`/item/${nextItem.id}`);
      }
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      const prevItem = items[currentIndex - 1];
      if (categoryId) {
        navigate(`/category/${categoryId}/item/${prevItem.id}`);
      } else {
        navigate(`/item/${prevItem.id}`);
      }
    }
  };

  return (
    <div className="relative flex justify-center mt-20 w-full mx-auto p-4">
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          className="absolute 
      left-2 sm:left-4 md:-left-10 lg:left-20
      top-1/2 -translate-y-1/2 
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      backdrop-blur-sm
      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
      rounded-full
      flex items-center justify-center
      text-yellow-400 hover:text-red-500
      transition-all duration-300
      z-50"
        >
          &lt;
        </button>
      )}
      {currentIndex < items.length - 1 && (
        <button
          onClick={goNext}
          className="absolute 
      right-2 sm:right-4 md:-right-10 lg:right-20 
      top-1/2 -translate-y-1/2 
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      backdrop-blur-sm
      w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
      rounded-full
      flex items-center justify-center
      text-yellow-400 hover:text-red-500
      transition-all duration-300
      z-50"
        >
          &gt;
        </button>
      )}
      <div
        key={item.id}
        className="card lg:card-side shadow-sm w-full max-w-3xl border border-red-500 animate-fade-in-up">
        <figure className="px-4 pt-4 bg-black w-full flex items-center justify-center">
          <img
            className="max-h-96 object-contain"
            src={item.url}
            alt={item.name}
          />
        </figure>
        <div className="card-body items-center text-center p-4 space-y-2 bg-black 
        text-white">
          <h2 className="card-title font-bold text-xl text-yellow-300">
            {item.name}
          </h2>
          <p className="text-gray-400">{item.description}</p>
          <p className="text-xl font-semibold text-green-400">
            ${item.price}
          </p>
          <p className="text-sm text-yellow-400">
            Stock: {item.stock}
          </p>
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
