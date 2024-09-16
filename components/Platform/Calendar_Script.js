import { useEffect, useRef } from "react";

const Calendario = () => {
    const calendarioRef = useRef(null);

    useEffect(  () => {
    
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        const today = new Date(); // fecha actual

        // Objeto para almacenar los eventos
        let events = {};

        function renderCalendar(month, year) {
            const firstDay = new Date(year, month, 1).getDay(); // Obtener el día de la semana del primer día del mes
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            const calendarDays = document.getElementById('calendarDays');
            calendarDays.innerHTML = '';

            document.getElementById('currentMonth').innerText = `${months[month]} ${year}`;

            // Alinear el primer día del mes correctamente
            let emptyCells = (firstDay === 0 ? 6 : firstDay - 1); // Si es domingo (0), alinear como el último día de la semana
            for (let i = 0; i < emptyCells; i++) {
                const emptyCell = document.createElement('div');
                calendarDays.appendChild(emptyCell);
            }

            for (let i = 1; i <= daysInMonth; i++) {
                const day = document.createElement('div');
                day.className = 'py-3 relative';

                // Día actual
                if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    day.classList.add('bg-blue-600', 'text-white', 'rounded-full');
                }

                day.innerText = i;

                // Formato de la fecha actual para verificar eventos
                const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                
                if (events[date]) {
                    const eventIndicator = document.createElement('span');
                    eventIndicator.className = 'text-xs bg-blue-500 text-white rounded-full px-2 absolute top-0 right-0';
                    eventIndicator.innerText = 'clase';
                    day.appendChild(eventIndicator);
                }

                day.addEventListener('click', () => {
                    showEventsForDay(date);
                });

                calendarDays.appendChild(day);
            }
        }

        function showEventsForDay(date) {
            const eventList = document.getElementById('eventList');
            eventList.innerHTML = '';

            if (events[date]) {
                events[date].forEach((event, index) => {
                    const li = document.createElement('li');
                    li.className = 'bg-gray-100 p-4 rounded flex justify-between items-center';
                    li.innerHTML = `
                        <div>
                            <h3 class="font-bold">${event.title} (${event.time})</h3>
                            <p>${event.desc}</p>
                        </div>
                        <button class="bg-red-600 text-white py-2 px-4 rounded" onclick="deleteEvent('${date}', ${index})">Eliminar</button>
                    `;
                    eventList.appendChild(li);
                });
            } else {
                eventList.innerHTML = '<li>No hay clases para este día.</li>';
            }
        }

        function deleteEvent(date, index) {
            events[date].splice(index, 1);
            if (events[date].length === 0) {
                delete events[date];
            }
            renderCalendar(currentMonth, currentYear);
            showEventsForDay(date);
        }

        document.getElementById('prevMonth').onclick = () => {
            currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
            currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
            renderCalendar(currentMonth, currentYear);
        };

        document.getElementById('nextMonth').onclick = () => {
            currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
            currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
            renderCalendar(currentMonth, currentYear);
        };

        document.getElementById('createEventBtn').onclick = () => {
            document.getElementById('eventModal').classList.remove('hidden');
        };

        document.getElementById('closeModalBtn').onclick = () => {
            document.getElementById('eventModal').classList.add('hidden');
        };

        document.getElementById('saveEventBtn').onclick = () => {
            const title = document.getElementById('eventTitle').value;
            const desc = document.getElementById('eventDesc').value;
            const dateTime = document.getElementById('eventDateTime').value;

            if (title && dateTime) {
                const date = new Date(dateTime).toISOString().split('T')[0];

                if (!events[date]) {
                    events[date] = [];
                }

                events[date].push({
                    title: title,
                    desc: desc,
                    time: new Date(dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                });

                document.getElementById('eventModal').classList.add('hidden');
                renderCalendar(currentMonth, currentYear);
                showEventsForDay(date);
            }
        };

        renderCalendar(currentMonth, currentYear);
    
    
    });
}

export default Calendario;


