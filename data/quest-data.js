const mutantDog = {
    id: 'mutant-dog',
    title: 'Savage mutant dog',
    map: {
        top: '89%',
        left: '44%',
    },
    image: 'dog.jpeg',
    description: `
        You hear whining dogs and enter the kennel to find a mutant dog draining the life from the rest of it's pack with tentacles extending from it's body.'
    `,
    choices: [{
        id: 'axe',
        description: 'grab the fire ax and take a swing',
        result: `
            You're attack is successful but not without a cost. You're hurt, but you managed to sever the tentacles and land a final blow, putting the poor mishapen animal out of it's misery.   
        `,
        hp: -25,
    }, {
        id: 'run-away',
        description: 'Run in terror!',
        result: `
            You manage to get out of the kennel but fing yourself trapped outside of the complex in the frozen antarctic tundra. You succumb to the elements and die.
        `,
        hp: -100,
    }, {
        id: 'fire',
        description: 'Roast it with a flamethrower',
        result: `
            The smell is sickening but the job is done. You were able to survive unscathed for now.
        `,
        hp: 0,
    }]
};
const mutiny = {
    id: 'mutiny',
    title: 'Mutiny in the outpost',
    map: {
        top: '55%',
        left: '90%',
    },
    image: 'mutiny.jpeg',
    description: `
        Fear and paranoia has taken over rational minds. Your fellow survivors suspect you may have been assimilated by the xenomorph and have decided you must be killed.
    `,
    choices: [{
        id: 'reason',
        description: 'Use logic to convince them you are still human',
        result: `
            You sway a few of the group but it's not enough. You are shot and killed. 
        `,
        hp: -100,
    }, {
        id: 'threaten',
        description: 'threaten to burn down the outpost',
        result: `
            You're holed up in the store room and find a several fuel drums for the helicopter. You threaten to ignite them and burn the outpost to the ground if they don't get rid of their weapons and cooperate. They reluctantly agree.
        `,
        hp: 0,
    }, {
        id: 'blame',
        description: 'shift the suspicion to someone else',
        result: `
            You know a few of the survivors are can be convinced and you found some suspicious evidence while exploring the facility. You place the blame on one of the survivors and manage to convince the group.
        `,
        hp: 0,
    }]
};
const spiderHead = {
    id: 'spider-head',
    title: 'Arachnid severed head',
    map: {
        top: '14%',
        left: '39%',
    },
    image: 'another-spider-head.jpeg',
    description: `
        You've tested the survivors for infection with a rudimentary blood test but one member reacts violently and begins to mutate in a disgusting and horrifying manor. His body is torched with the flame thrower but his head detaches from his body and sprouts spider like legs as it makes it's way your direction. The flame thrower will no longer ignite.
    `,
    choices: [{
        id: 'flame',
        description: 'keep trying the flame thrower',
        result: `
            You're running out of time but decide to bet it all on the flame thrower re-igniting. This was a bad idea. The spider head stabs you with it's legs, bringing you to the ground and devours you.  
        `,
        hp: -100,
    }, {
        id: 'escape',
        description: 'every man for himself!',
        result: `
            You're options are limited but you see a way to get out. There's just enough time for you to escape, alone. You hear the screams as you close the door behind you. The guilt is madenning, you decide it's not worth living. 
        `,
        hp: -100,
    }, {
        id: 'blunt-object',
        description: 'grab for the nearest heavy object and go to town',
        result: `
            You frantically scan the room for anything to use as a weapon and notice a fire extinguisher. You retrieve it and squeeze the trigger hard, hoping to slow the spider's advance. It works and you repeatedly bash the stunned creature until you're sure it's dead.
        `,
        hp: 0,
    }]
};
const fusedCreature = {
    id: 'fused-creature',
    title: 'Fused creature',
    map: {
        top: '63%',
        left: '41%',
    },
    image: '',
    description: `
        Barely any survivors remain and you realize no one is likely to survive this nightmare. It's time to go on the offensive and lure the creature out of hiding. You rig the outpost with fuel and dynamite, ready to bring the creature down and likely yourself with it. The preparations are nearly set when the creature emerges, now enormous in size and with the bodies of it's victims, human and otherwise, visibly fused into it's new form. 
    `,
    choices: [{
        id: 'dynamite',
        description: 'light the fuse and run',
        result: `
            The plunger is gone, but the fuse remains. You light it up and bolt out of the outpost as quickly as you can. You're thrown by the force of the explosion into a nearby snowbank and lose consciousness. You wake up in pain, but still alive.
        `
        ,hp: -25,
        
    }, {
        id: 'light-fuel',
        description: 'light the fuel drum and hope for the best',
        result: `
            You weigh your options and decide it's best to blow the helicopter fuel drum. You struggle with the weight of the drum but manage to tip it over. One good kick rolls it at the creature and you toss a lone stick of dynamite. It's all over in a flash. No regrets.
        `
        ,hp: -100,
    }, {
        id: 'cower-in-fear',
        description: 'fear wins, you cower and await your death',
        result: `
            In true deus ex machina fashion another survivor, thought to be dead appears and helps you outside. A molotov cocktail is thrown by the newcomer as the last survivor exits. You all manage to get a safe distance from the blast and find cover. Crisis averted. Now you just have to survive the elements.
        `,
        hp: 0,
    }]
};

const quests = [
    mutantDog, 
    mutiny, 
    fusedCreature,
    spiderHead
];

export default quests;
