function CartWidget() {
  return (
    <div className="relative">
      <span className="text-2xl">🛒</span>
      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
        8
      </span>
    </div>
  );
}

export default CartWidget;
