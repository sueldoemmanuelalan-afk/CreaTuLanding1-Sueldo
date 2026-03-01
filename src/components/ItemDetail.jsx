import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ item, items }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (item) {
      setLoaded(true);
    }
  }, [item]);

  const navigate = useNavigate();
  const { id, categoryId } = useParams();
  const currentIndex = items.findIndex(
    (prod) => prod.id === item.id
  );

  const goNext = () => {
    if (currentIndex < items.length - 1) {
      const nextItem = items[currentIndex + 1];
      if (categoryId) {
        navigate(
          `/category/${categoryId}/item/${nextItem.id}`
        );
      } else {
        navigate(`/item/${nextItem.id}`);
      }
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      const prevItem = items[currentIndex - 1];
      if (categoryId) {
        navigate(
          `/category/${categoryId}/item/${prevItem.id}`
        );
      } else {
        navigate(`/item/${prevItem.id}`);
      }
    }
  };
  if (!item) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="w-full max-w-4xl p-6 space-y-6 animate-pulse">
          <div className="h-96 bg-zinc-800 rounded-xl"></div>
          <div className="space-y-4">
            <div className="h-6 bg-zinc-800 rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-zinc-800 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-zinc-800 rounded w-2/3 mx-auto"></div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-32 h-32 bg-zinc-800 rounded-lg"></div>
            <div className="w-32 h-32 bg-zinc-800 rounded-lg"></div>
            <div className="w-32 h-32 bg-zinc-800 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center mt-25 w-full mx-auto p-4">
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
      z-50">
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
      z-50">
          &gt;
        </button>
      )}
      <div
        key={item.id}
        className={`card lg:card-side shadow-sm w-full max-w-3xl border border-red-500 animate-fade-in-up ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <figure className="px-4 pt-4 bg-black w-full flex items-center justify-center">
          <img
            className="max-h-96 object-contain"
            src={item.url}
            alt={item.name}
          />
        </figure>
        <div
          className="card-body items-center text-center p-4 space-y-2 bg-black 
        text-white">
          <h2 className="card-title font-bold text-xl text-yellow-300">
            {item.name}
          </h2>
          <p className="text-gray-400">
            {item.description}
          </p>
          <div className="flex mt-5 mb-5 flex-wrap justify-center gap-2">
            {item.url1 && (
              <img
                src={item.url1}
                className="w-40 h-40 object-cover rounded-lg"
              />
            )}
            {item.url2 && (
              <img
                src={item.url2}
                className="w-40 h-40 object-cover rounded-lg"
              />
            )}
            {item.url3 && (
              <img
                src={item.url3}
                className="w-40 h-40 object-cover rounded-lg"
              />
            )}
            {item.url4 && (
              <img
                src={item.url4}
                className="w-40 h-40 object-cover rounded-lg"
              />
            )}
          </div>
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
