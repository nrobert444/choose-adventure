function createCompletedQuest(quest) {
    const span = document.createElement('span');
    span.classList.add('quests');
    span.classList.add('completed');

    span.style.top = quests.map.top;
    span.style.left = quests.map.left;

    span.textContent = quests.title;
    return span;
}

export default createCompletedQuest;