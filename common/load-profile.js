import { getUser, isDead } from '../data/char-store';

function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const players = document.getElementById('players');
    const hp = document.getElementById('hp');

    /* initialize: load and parse json with user from local storage */
    const user = getUser();

    // if there's no user
    if (!user) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = user.name;
    players.src = '../assets/' + user.character + '.jpeg';

    if (isDead(user)) {
        hp.textContent = 'Assimilated';
    }
    else {
        hp.textContent = user.hp;
    }

}

export default loadProfile;