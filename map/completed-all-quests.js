function hasCompletedAllQuests(encounter, user) {
    // iterate through quests
    for (let i = 0; i < encounter.length; i++) {
        const quest = encounter[i];
        // if any of the quests is incomplete
        if (!user.completed[quest.id]) {
            return false;
        }
    }

    // if all of the quests are complete, we get this far and return true
    return true;
}

export default hasCompletedAllQuests;