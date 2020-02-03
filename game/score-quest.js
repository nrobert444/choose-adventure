function scoreQuest(choice, questId, user) {
    // add hp to user according to the choice's consequences
    console.log(choice)
    user.hp += choice.hp;
    // set this quest id to completed in the user
    user.completed[questId] = true;
}

export default scoreQuest;