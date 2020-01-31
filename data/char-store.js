export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('character'),
        hp: 40,
        completed: {}
    };

    return user;
}

export function isDead(user) {
    return user.hp <= 0;
}

export default isDead;