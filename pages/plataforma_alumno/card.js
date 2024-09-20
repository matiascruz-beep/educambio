import React from "react";

const Card = ({
  subject,
  imageSrc,
  teacher,
  startDate,
  schedule,
  topic,
  availableSlots,
}) => {
  return (
    <div className="swiper-slide p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <p className="text-blue-500 text-center py-2 text-xl font-poppins">
          {subject}
        </p>
        <img
          className="w-full h-30 object-cover"
          src={imageSrc}
          alt="imagen de la tarjeta"
        />
        <div className="p-4">
          <h2 className="text-xl mb-2 font-bold">{teacher}</h2>
          <p className="text-gray-700 mb-1">Fecha de inicio: {startDate}</p>
          <p className="text-gray-700 mb-1">Horario: {schedule}</p>
          <p className="text-gray-700 mb-1">Tema: {topic}</p>
          <p className="text-gray-700 mb-4">
            Cupos disponibles: {availableSlots}
          </p>
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Inscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
