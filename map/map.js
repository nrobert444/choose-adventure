import { getUser, isDead } from '../data/char-store.js';
import nightmares from '../data/quest-data.js';
import loadProfile from '../common/load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';

loadProfile(); // i predict we'll load the header on every page but the home page

// go grab the user from localStorage
const user = getUser();

// if they're dead, or if they've completed all the quests
if (isDead(user) || hasCompletedAllQuests(nightmares, user)) {
    // send them to the results page
    window.location = './results';
}
// getting some quest element from DOM
const nav = document.getElementById('nightmares');

for (let i = 0; i < nightmares.length; i++) {
    // for every quest
    const quest = nightmares[i];
    let questDisplay = null;

    // if the user has completed it
    if (user.completed[quest.id]) {
        // make a completed quest display (with a checkmark)
        questDisplay = createCompletedQuest(quest);
    }
    else {
        // otherwiese, make a link to the quest
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay); // add the quest display to the nav
}