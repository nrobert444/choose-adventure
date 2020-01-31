function scoreQuest(choices, questId, user) {
    // add hp to user according to the choice's consequences
    user.hp += choices.hp;
    // set this quest id to completed in the user
    user.completed[questId] = true;
}

export default scoreQuest;