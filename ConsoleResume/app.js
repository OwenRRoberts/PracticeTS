const interests = ['Ultimate', 'Disc Golf', 'Video Games', 'Books', 'Hiking'];
const prevEmp = ['Hop City Birmingham', 'Pilcrow Cocktail Cellar', 'Brat Brot'];
const prevTitles = ['Team Member', 'Door Guy', 'Shift Manager'];
const prevJob = ['Bartending, stocking retail, and generally incredible knowledge of craft beer.', 'Responsible for checking IDs, ensuring all guests are of age, and dealing with unruly guests.', 'Responsible for team members during work hours, and making sure all customers are satisfied with their service.'];
const mySkills = [{ skillName: 'Can throw a disc very far', isCool: true }, { skillName: 'Halfway decent at a few video games', isCool: false }, { skillName: 'Gets along with dogs', isCool: true }, { skillName: 'Binge watches TV very well', isCool: false }, { skillName: 'Ability to not yell at customers', isCool: true }];


function doInterests() {
    for (i = 0; i < interests.length; i++) {
        console.log('* ' + interests[i]);
    }
}

function doWork() {
    for (e = 0; e < 3; e++) {
        console.log('* ' + prevEmp[e] + ': ' + prevTitles[e] + ', ' + prevJob[e]);
    }
}

function doSkill(skillName, isCool) {
    if (isCool == true) {
        console.log('* Bam: ' + skillName);
    } else {
        console.log('* ' + skillName);
    }
}


//console out

console.log('Name: ' + 'owen roberts'.toUpperCase());
console.log('Career: Bartender');
console.log('Amateur disc player and professional drinker attempting to make my way into another career.');
console.log('My Interests: ');
doInterests();
console.log('My Previous Experience: ');
doWork();
console.log('My Special Skills: ');
for (s = 0; s < mySkills.length; s++) {
    doSkill(mySkills[s].skillName, myskills[s].isCool);
}