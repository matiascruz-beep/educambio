import React from 'react'

export default function Footer ({}) {
    return (
        <div className="bg-black text-white" id="contacto">

        <div className="mx-[25rem] grid grid-cols-3 grid-flow-col gap-5">
            <div className="p-5">
                <h2 className="mb-10 text-2xl tracking-[0.5rem]">EDUCAMBIO</h2>
                <p className="mb-[6rem] font-light">Una educación secundaria sólida puede abrir puertas a futuras oportunidades.</p>
                <div className="mt-4 flex gap-8">
                    <a href="https://www.facebook.com/" target="_blank">
                        <svg className="w-5 h-5 stroke-current hover:text-blue-500" viewBox="0 0 13 21" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2150_69)">
                        <path d="M12.4005 0C12.6749 0.10104 12.7752 0.289467 12.7752 0.559818C12.7663 1.54291 12.7722 2.52874 12.7722 3.51183C12.7722 3.92146 12.6129 4.058 12.1675 4.06346C11.4153 4.07165 10.6601 4.06892 9.91088 4.09623C9.5038 4.11261 9.10852 4.22185 8.90793 4.59597C8.81059 4.77347 8.74274 4.98375 8.73684 5.18036C8.71619 5.95865 8.72799 6.73693 8.72799 7.54798C8.80764 7.54798 8.88433 7.54798 8.96103 7.54798C9.97873 7.54798 10.9994 7.54798 12.0171 7.54798C12.4713 7.54798 12.6306 7.69272 12.6306 8.11326C12.6306 9.17828 12.6306 10.246 12.6306 11.3111C12.6306 11.707 12.4713 11.8545 12.0407 11.8545C11.023 11.8545 10.0023 11.8545 8.98463 11.8545C8.90498 11.8545 8.82534 11.8545 8.71914 11.8545C8.71914 11.9528 8.71914 12.032 8.71914 12.1112C8.71914 14.8666 8.71914 17.6192 8.71914 20.3746C8.71914 20.8607 8.57165 20.9945 8.04953 20.9945C6.88434 20.9945 5.7162 20.9945 4.55101 20.9945C4.09084 20.9945 3.93745 20.8525 3.93745 20.432C3.93745 17.6629 3.93745 14.8966 3.93745 12.1276C3.93745 12.0456 3.93745 11.9664 3.93745 11.8545C3.84305 11.8545 3.76636 11.8545 3.68671 11.8545C2.82241 11.8545 1.9581 11.8545 1.0938 11.8545C0.680821 11.8545 0.51563 11.707 0.51563 11.322C0.50973 10.2433 0.50973 9.16463 0.51268 8.08323C0.51268 7.70364 0.683771 7.55071 1.0938 7.54798C1.94925 7.54525 2.80766 7.54798 3.66311 7.54798C3.74276 7.54798 3.8224 7.54798 3.93155 7.54798C3.93155 7.4606 3.93155 7.38687 3.93155 7.31313C3.9345 6.46658 3.9109 5.6173 3.94925 4.77074C4.00529 3.56645 4.39467 2.4632 5.27668 1.54564C6.01414 0.775553 6.95219 0.33316 8.02888 0.125618C8.28847 0.0764629 8.54805 0.0409623 8.81059 0C10.0082 0 11.2029 0 12.4005 0Z" fill="#F9F9F9"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2150_69">
                        <rect width="12.2625" height="21" fill="white" transform="translate(0.509766)"/>
                        </clipPath>
                        </defs>
                        </svg></a>
                    <a href="https://x.com/" target="_blank">
                        <svg className="w-6 h-6 stroke-current hover:text-blue-500" viewBox="0 0 26 19" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2150_67)">
                        <path d="M0.55957 16.862C3.28965 17.0939 5.72526 16.4656 7.94934 14.876C6.44158 14.7932 5.22948 14.2505 4.26677 13.2252C3.79624 12.7243 3.37558 12.0075 3.28303 11.5477C4.00356 11.6299 4.71568 11.6476 5.45544 11.4523C2.70914 10.7988 1.42493 8.51979 1.49824 6.72626C1.8552 6.85421 2.20074 7.00557 2.56251 7.10096C2.91766 7.19464 3.28904 7.23119 3.66884 7.26089C2.47357 6.39212 1.74463 5.27202 1.56374 3.86804C1.42072 2.75879 1.67792 1.71751 2.21636 0.892145C4.94043 3.93886 8.38502 5.6233 12.6114 5.89176C12.4876 5.25488 12.4726 4.65171 12.5592 4.04282C12.8104 2.26985 14.3373 0.62083 16.163 0.179302C18.0343 -0.27365 19.6755 0.131322 21.0901 1.38394C21.1604 1.4462 21.3029 1.48161 21.3978 1.46333C22.3767 1.27427 23.3016 0.943552 24.1741 0.479747C24.2354 0.447189 24.3003 0.419772 24.4085 0.367794C24.0245 1.48732 23.3082 2.30812 22.3365 2.95356C23.2787 2.86674 24.1675 2.61485 25.0323 2.27442C25.0497 2.29384 25.0677 2.31326 25.0852 2.33268C24.6789 2.78449 24.2931 3.25458 23.8605 3.6824C23.5179 4.02054 23.1117 4.30043 22.7469 4.61972C22.6664 4.68998 22.5949 4.81678 22.5949 4.91731C22.5883 9.85809 20.5409 13.8273 16.3096 16.7203C14.5248 17.9404 12.4858 18.6013 10.3056 18.8726C8.2456 19.129 6.21503 19.0057 4.2175 18.459C2.95732 18.1146 1.77167 17.6057 0.659927 16.9443C0.634087 16.9288 0.614256 16.9071 0.55957 16.862Z" fill="#F9F9F9"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2150_67">
                        <rect width="24.525" height="19" fill="white" transform="translate(0.55957)"/>
                        </clipPath>
                        </defs>
                        </svg></a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <svg className="w-6 h-6 stroke-current hover:text-blue-500" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2150_63)">
                        <path d="M16.637 22C13.5347 22 10.4318 22 7.32952 22C7.29495 21.9903 7.26037 21.9742 7.22525 21.9721C6.52719 21.9259 5.85217 21.7755 5.20405 21.521C3.58018 20.8818 2.35582 19.8023 1.53757 18.2889C0.95311 17.2077 0.736886 16.0461 0.741276 14.8307C0.750606 12.2748 0.73963 9.71938 0.748411 7.16346C0.750057 6.71393 0.770911 6.25957 0.840608 5.81649C1.11226 4.08068 1.96124 2.65315 3.34529 1.54517C4.67447 0.480699 6.21931 -0.00373778 7.93374 2.1708e-05C10.6256 0.00592948 13.3179 0.00539241 16.0098 2.1708e-05C17.4492 -0.00266364 18.7888 0.329246 19.9995 1.10424C21.4845 2.05539 22.4833 3.36476 22.9547 5.0415C23.0831 5.49908 23.1358 5.97761 23.2231 6.44647C23.2231 9.48253 23.2231 12.5191 23.2231 15.5552C23.2115 15.61 23.1951 15.6637 23.1901 15.719C23.1139 16.6051 22.8779 17.4483 22.4553 18.2357C21.4999 20.0166 20.0384 21.2025 18.0535 21.7417C17.5925 21.8668 17.1095 21.9157 16.637 22ZM11.9833 19.9377C13.3514 19.9377 14.7195 19.9452 16.0877 19.9328C16.4658 19.9296 16.8527 19.906 17.2198 19.8243C19.5676 19.3023 21.1113 17.3984 21.1146 15.0396C21.1185 12.3473 21.1196 9.65493 21.1108 6.9626C21.1097 6.60007 21.0822 6.22842 20.9999 5.8761C20.4659 3.57852 18.521 2.06774 16.1102 2.06452C13.3591 2.06076 10.608 2.05968 7.85691 2.06828C7.48647 2.06935 7.10671 2.09621 6.7467 2.17677C4.41653 2.69558 2.86126 4.58982 2.85358 6.91909C2.84479 9.63989 2.85028 12.3612 2.85248 15.082C2.85303 15.777 2.97266 16.4537 3.28438 17.081C4.21019 18.9441 5.74241 19.9006 7.85636 19.9334C9.23163 19.9549 10.6075 19.9377 11.9833 19.9377Z" fill="#F9F9F9"/>
                        <path d="M11.9574 16.4993C8.84686 16.4724 6.32681 13.9788 6.36468 10.9642C6.40309 7.9228 8.93247 5.47483 12.009 5.50168C15.1195 5.52854 17.6396 8.02216 17.6017 11.0367C17.5639 14.0782 15.0345 16.5261 11.9574 16.4993ZM11.992 14.4375C13.9177 14.4321 15.4933 12.8869 15.4949 11.0029C15.4966 9.11026 13.9078 7.55866 11.975 7.56457C10.0482 7.56994 8.47368 9.11348 8.47204 10.9986C8.46984 12.8902 10.0597 14.4428 11.992 14.4375Z" fill="#F9F9F9"/>
                        <path d="M18.024 5.81655C17.614 5.81655 17.2858 5.49968 17.2803 5.09902C17.2749 4.69192 17.6118 4.35518 18.024 4.35571C18.4339 4.35625 18.7796 4.69998 18.772 5.09902C18.7648 5.49699 18.4312 5.81655 18.024 5.81655Z" fill="#F9F9F9"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2150_63">
                        <rect width="22.4813" height="22" fill="white" transform="translate(0.741211)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        </a>
                </div>
            </div>

            <div className="p-5 flex flex-col space-y-2 md:justify-self-center">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Nosotros</a>
                <a href="#" className="hover:underline">Alumnos</a>
                <a href="#" className="hover:underline">Contactanos</a>
            </div>

            <div className="p-5">
                <form action="#" method="POST" className="mx-auto max-w-xl">
                    <div className="grid grid-cols-1 gap-x-2 gap-y-1 sm:grid-cols-2">

                        <div className="mt-2.5">
                          <input type="text" name="nombre" id="nombre" placeholder="Nombre*" className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FBF8EE] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>

                        <div className="mt-2.5">
                          <input type="text" name="apellido" id="apellido" placeholder="Apellido*" className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FBF8EE] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>

                        <div className="mt-2.5">
                          <input type="email" name="email" id="email" placeholder="Correo electronico*" className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FBF8EE] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>

                        <div className="mt-2.5">
                          <input type="tel" name="telefono" id="telefono" placeholder="Telefono*" className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FBF8EE] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>

                      <div className="sm:col-span-2">
                        <div className="mt-2.5">
                          <textarea name="mensaje" id="mensaje" placeholder="Mensaje*" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 bg-[#FBF8EE] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                      </div>

                    </div>
                    <div className="mt-2.5 text-center">
                      <button type="submit" className="w-40 rounded-3xl bg-[#0063C7] px-1 py-2.5 text-center text-base md:font-bold font-poppins text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">CONTACTANOS</button>
                    </div>
                  </form>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-5 md:grid-cols-2">
            <p className="mr-2 text-xs text-slate-600 text-end">© EDUCAMBIO 2024 - Todos los derechos reservados.</p>
            <div className="ml-2 flex items-center space-x-4 text-xs text-slate-600 ">
                <a href="#">Privacy Policy</a>
                <div className="h-4 w-px bg-slate-200"></div>
                <a href="#">Terms and Conditions</a></div>
            </div>

    </div>
    )
}