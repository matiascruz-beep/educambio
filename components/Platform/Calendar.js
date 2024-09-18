import React from "react";
import Calendario from "./Calendar_Script";


export default function Calendar (){
    return (
        <div class="bg-gradient-to-r from-[#003366] to-[#56AEFF] flex items-center justify-center min-h-screen">

        <div class="flex flex-col lg:flex-row lg:space-x-6 items-center">
       

        <div class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-8">
                <div class="flex items-center mb-6">
                    <button aria-label="calendar backward" id="prevMonth" class="text-blue-600 dark:text-blue-600 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h2 id="currentMonth" class="text-2xl font-bold text-black dark:text-black flex-1 text-center"></h2>
                    <button aria-label="calendar forward" id="nextMonth" class="text-blue-600 dark:text-blue-600 ml-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div class="grid grid-cols-7 gap-4 text-blue-600 dark:text-blue-600 text-lg">
                    <span class="flex-1 text-center">Lun</span>
                    <span class="flex-1 text-center">Mar</span>
                    <span class="flex-1 text-center">Mie</span>
                    <span class="flex-1 text-center">Jue</span>
                    <span class="flex-1 text-center">Vie</span>
                    <span class="flex-1 text-center">Sab</span>
                    <span class="flex-1 text-center">Dom</span>
                </div>

                <div id="calendarDays" class="grid grid-cols-7 gap-4 mt-6 text-center text-gray-800 dark:text-gray-800">
                </div>
            </div>

           
            <div class="bg-blue-600 text-white p-6 rounded-b-lg flex justify-between items-center">
                <span id="currentMonthLabel" class="font-bold text-lg"></span>
                <button id="createEventBtn" class="bg-white text-black py-3 px-6 rounded-full">Agendar Clase</button>
            </div>
        </div>

        
        <div class="w-full lg:w-96 bg-white shadow-lg rounded-lg p-8 mt-6 lg:mt-0">
            <h2 class="text-2xl font-bold mb-4">Clases</h2>
            <ul id="eventList" class="space-y-4"></ul>
        </div>
    </div>

  
    <div id="eventModal" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center hidden">
        <div class="bg-white rounded-lg p-8 w-96">
            <h2 class="text-lg font-bold text-black mb-4">Agendar Clase</h2>
            <input type="text" id="eventTitle" placeholder="Título del Evento" class="w-full border border-gray-300 p-3 rounded mb-4"/>
            <textarea id="eventDesc" placeholder="Descripción del Evento" class="w-full border border-gray-300 p-3 rounded mb-4"></textarea>
            <input type="datetime-local" id="eventDateTime" class="w-full border border-gray-300 p-3 rounded mb-4"/>
            <div class="flex justify-end">
                <button id="closeModalBtn" class="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-2">Cancelar</button>
                <button id="saveEventBtn" class="bg-blue-600 text-white py-2 px-4 rounded">Guardar</button>
            </div>
        </div>
    </div>
    <Calendario/>
</div>



    )
        
}
