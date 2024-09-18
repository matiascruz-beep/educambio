import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // Importa el CSS de Swiper
import "swiper/css/navigation"; // Importa estilos de navegación
import "swiper/css/pagination"; // Importa estilos de paginación
import Card from "./card"; // Asegúrate de importar el componente Card
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const MySwiper = () => {
  const cardsData = [
    {
      subject: "MATEMÁTICA",
      imageSrc: "../images/perfil1_carrousel.png",
      teacher: "Juan Soliz",
      startDate: "Jueves 9/9/24",
      schedule: "15:00 hs a 16:15 hs",
      topic: "Función lineal",
      availableSlots: 15,
    },
    {
      subject: "GIM",
      imageSrc: "../images/perfil1_carrousel.png",
      teacher: "Juan Soliz",
      startDate: "Jueves 9/9/24",
      schedule: "15:00 hs a 16:15 hs",
      topic: "Función lineal",
      availableSlots: 15,
    },
    {
      subject: "Biologia",
      imageSrc: "../images/perfil1_carrousel.png",
      teacher: "Juan Soliz",
      startDate: "Jueves 9/9/24",
      schedule: "15:00 hs a 16:15 hs",
      topic: "Función lineal",
      availableSlots: 15,
    },
    {
      subject: "Ingles",
      imageSrc: "../images/perfil1_carrousel.png",
      teacher: "Juan Soliz",
      startDate: "Jueves 9/9/24",
      schedule: "15:00 hs a 16:15 hs",
      topic: "Función lineal",
      availableSlots: 15,
    },
    {
      subject: "Lengua",
      imageSrc: "../images/perfil1_carrousel.png",
      teacher: "Juan Soliz",
      startDate: "Jueves 9/9/24",
      schedule: "15:00 hs a 16:15 hs",
      topic: "Función lineal",
      availableSlots: 15,
    },
    // Puedes añadir más tarjetas aquí
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {cardsData.map((card, index) => (
        <SwiperSlide key={index}>
          <Card {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
