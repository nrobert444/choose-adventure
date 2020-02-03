import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/char-store.js';
import scoreHp from './score-hp.js';
import { hpMessages } from './hp-message.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');
const endImage = document.getElementById('result-image')
const hpResult = scoreHp(user.hp);
const hpMessage = hpMessages[hpResult];



let story = 'The nightmare is over, ';
story += user.name + ' as ' + user.character + ', ';
story += hpMessage + '.';

storyDisplay.textContent = story;
endImage.src = '../assets/burning-outpost.jpeg';






// // Lab 13: User Adventure Quiz - Day 1
// // Build a user adventure, quiz, or game that follows this pattern:

// // 1. User Info Page - starting information for user
// // 2. List Page - user presented with list of quests, tasks, or topics
// // 3. Quest or Task Page - user completes Quest, task, or topic
// // 4. Repeat thru steps #2 and #3 until end conditions
// // 5. Final results page on end condition(s)

// // Goals
// // Day 1
// // The goal for the first part of the lab:

// // 1. (Meta)data created to describe each step of adventure or quiz

// // 2. User info page that saves user object to local storage

// // 3. Load list of quests or tasks and display. Each item links to quest/quiz page with the id of the item as a query parameter

// // 4. Quest or task page reads the query parameter and loads that item on the page, including text, images, and/or audio/video - plus creates question prompts and inputs in form