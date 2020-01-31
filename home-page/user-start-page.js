import { saveUser } from '../data/char-store.js';
import { makeUser } from './make-user.js';


const createUser = document.getElementById('user-create');

createUser.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(createUser);

    const player = makeUser(formData);

    saveUser(player);

    // is this right?
    window.location = 'map';
});