import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import Card from "@/pages/plataforma_alumno/card"; 
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const MySwiper = () => {
  const cardsData = [
    {
      subject: "MATEMÁTICA",
      imageSrc: "../images/profe_matematica.jpg",
      teacher: "Juan Soliz",
      startDate: "Jueves 9/9/24",
      schedule: "15:00 hs a 16:15 hs",
      topic: "Función lineal",
      availableSlots: 15,
    },
    {
      subject: "BIOLOGÍA",
      imageSrc: "../images/profe_biologia.jpg",
      teacher: "Sebastian Cruz",
      startDate: "Lunes 4/8/24",
      schedule: "17:00 hs a 18:00 hs",
      topic: "Microbiología",
      availableSlots: 14,
    },
    {
      subject: "INGLÉS",
      imageSrc: "../images/profe_ingles.jpg",
      teacher: "Inés Acuña",
      startDate: "Lunes 18/9/24",
      schedule: "15:00 hs a 17:00 hs",
      topic: "Verbo TO BE",
      availableSlots: 5,
    },
    {
      subject: "SISTEMA",
      imageSrc: "../images/profe_sistemas.jpg",
      teacher: "Federico Uriarte",
      startDate: "Martes 10/9/24",
      schedule: "15:00 hs a 17:00 hs",
      topic: "React js",
      availableSlots: 16,
    },
    {
      subject: "LENGUA",
      imageSrc: "../images/profe_lengua.jpg",
      teacher: "Irma Lopez",
      startDate: "Lunes 9/10/24",
      schedule: "10:00 hs a 12:15 hs",
      topic: "Sintaxis",
      availableSlots: 6,
    },
    {
      subject: "PSICOLOGÍA",
      imageSrc: "../images/profe_psicologia.jpg",
      teacher: "Javier Rincón",
      startDate: "Lunes 9/10/24",
      schedule: "16:00 hs a 16:40 hs",
      topic: "Historia de la psicología",
      availableSlots: 15,
    },
    {
      subject: "HISTORIA",
      imageSrc: "../images/profe_historia.jpg",
      teacher: "Carlos Gonzales",
      startDate: "Jueves 9/9/24",
      schedule: "16:00 hs a 17:15 hs",
      topic: "Historia Pública",
      availableSlots: 8,
    },

  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={80}
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
