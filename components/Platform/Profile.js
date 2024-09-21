import {useEffect} from 'react'

const Profile = () => {
    useEffect(() => {
        const userIcon = document.getElementById('userIcon');
        const userMenu = document.getElementById('userMenu');

        const toggleMenu = () => {
            if (userMenu.classList.contains('hidden')) {
                userMenu.classList.remove('hidden');
                userMenu.classList.add('visible', 'opacity-100');
            } else {
                userMenu.classList.remove('visible', 'opacity-100');
                userMenu.classList.add('hidden');
            }
        };

        userIcon.addEventListener('click', toggleMenu);

        document.addEventListener('click', (event) => {
            if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
                userMenu.classList.add('hidden');
                userMenu.classList.remove('visible', 'opacity-100');
            }
        });

        return () => {
            userIcon.removeEventListener('click', toggleMenu);
            document.removeEventListener('click', (event) => {
                if (!userIcon.contains(event.target) && !userMenu.contains(event.target)) {
                    userMenu.classList.add('hidden');
                    userMenu.classList.remove('visible', 'opacity-100');
                }
            });
        };
    }, []);

    return null;
};

export default Profile;