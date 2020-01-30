import { saveUser, makeUser } from '../data/char-store';


const createUser = document.getElementById('user-create');

createUser.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(createUser);

    const player = makeUser(formData);

    saveUser(player);

    window.location = 'map';
});