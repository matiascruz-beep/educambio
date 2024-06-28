    document.addEventListener('DOMContentLoaded', function() {
        const userIcon = document.getElementById('userIcon');
        const userMenu = document.getElementById('userMenu');

    userIcon.addEventListener('click', function() {
            if (userMenu.classList.contains('hidden')) {
                userMenu.classList.remove('hidden');
                userMenu.classList.add('visible');
                userMenu.classList.add('opacity-100');
            } else {
                userMenu.classList.remove('visible');
                userMenu.classList.add('hidden');
                userMenu.classList.remove('opacity-100');
            }
        });

    document.addEventListener('click', function(event) {
            if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
                userMenu.classList.add('hidden');
                userMenu.classList.remove('visible');
                userMenu.classList.remove('opacity-100');
            }
        });
    });


