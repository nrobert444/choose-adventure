export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        hp: 40,
        completed: {}
    };

    return user;
};