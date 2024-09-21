import React from 'react'

export default function Cardindex({title, description, cardImage}) {
  return (
    <div className="card mb-5">
      <div className="hover:scale-110 hover:shadow-[#003366] transition duration-150 h-[4.5in] w-[4in] bg-white border border-gray-200 rounded-[33px] shadow dark:bg-white dark:border-gray-700 mx-auto">
        <img className="w-full h-[250px] rounded-full" src={cardImage} />
        <div className="p-5">
          <h5 className="font-league mb-2 text-2xl font-bold tracking-tight text-[#003366] dark:text-center">
            {title}
          </h5>
          <p className="font-league mb-3 text-center font-normal text-black font-">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
