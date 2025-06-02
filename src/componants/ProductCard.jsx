import React from "react";

const ProductCard = ({product }) => {
  return (
    <div className="card w-full sm:w-auto">
      <div className="text-white bg-gray-800 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="text-white rounded-t-lg h-48 w-full object-cover"
            src={product.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-white mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16 overflow-hidden">
              {product.title}
            </h5>
          </a>
          <p className="text-white mb-3 font-normal text-gray-700 dark:text-gray-400">
           Price :{product.price}
          </p>
          <p className="text-white mb-3 font-bold text-gray-700 dark:text-gray-400">
            Category :{product.category}
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
