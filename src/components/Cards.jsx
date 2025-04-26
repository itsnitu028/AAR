import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3  ">
      
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border relative group hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg overflow-hidden transition-all duration-300">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(45deg,#5a669a,#5a669abe,#5a669a88)] transform origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-20"></div>
          <figure>
            <img src={item.image} className="z-[100] relative" alt="Shoes" />
          </figure>
          <div className="card-body z-[100] relative">
            <h2 className="card-title z-[100] relative">
              {item.name}
              <div className="badge badge-primary text-white z-[100] relative py-4 w-40">{item.category}</div>
            </h2>
            <p className="z-[100] relative ">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline py-2 z-[100] relative">Rs. {item.price}</div>
              <div className="z-[100] relative cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-red-500 hover:text-white duration-200">
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
