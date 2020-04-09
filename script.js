/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Park {
    constructor (name, age, area, trees) {
        this.name = name;
        this.age = age;
        this.area = area;
        this.trees = trees;
    }
    treeDensityCalculator() {
        return this.trees / this.area;
    }
};

class Street {
    constructor (name, yearBuilt, length, size = 'normal') {
    this.name = name;
    this.yearBuilt = yearBuilt;
    this.length = length;
    this.size = size;
    }
};

const hydePark = new Park('Hyde Park', 300, 1200, 800);
const nilePark = new Park('Nile Park', 30, 100, 200);
const vilePark = new Park('Vile Park', 100, 900, 1200);

const parks = [hydePark, nilePark, vilePark];

const eightMile = new Street('Eight Mile', 2000, 50);
const millerStreet = new Street('Miller Street', 1990, 100, 'huge');
const stationRoad = new Street('Station Road', 1880, 80, 'big');
const bakerStreet = new Street('Baker Street', 1800, 30, 'small');

const streets = [eightMile, millerStreet, stationRoad, bakerStreet];

const parksTreeDensities = parks.map(element => `${element.name} has a density of ${element.treeDensityCalculator()} trees per square km.`);

const averageSumOfParkAges = (parks.map(element => element.age).reduce((a, b) => a + b, 0)) / 3;

let moreThan1000Trees = [];

const moreThan1000TreesCalculator = (parksArray) => {
    for (let i = 0; i < parksArray.length; i++) {
        if (parksArray[i].trees > 1000) {
            moreThan1000Trees.push(parksArray[i].name);
        } else {
            continue;
        }
    };
};

moreThan1000TreesCalculator(parks);

const sumOfStreetLengths = (streets.map(element => element.length).reduce((a, b) => a + b, 0));

const averageSumOfStreetLengths = sumOfStreetLengths / 4;

const streetClassification = (streetsArray) => {
    streetsArray.forEach(element => {
        console.log(`${element.name}, built in ${element.yearBuilt}, is a ${element.size} street.`);
    });
};

const parksReport = () => {
    console.log(`------PARKS REPORT------`);
    console.log(`Our ${parks.length} parks have an average age of ${averageSumOfParkAges} years`);
    parksTreeDensities.forEach(element => {
        console.log(element);
    });
    console.log(moreThan1000Trees.forEach(element => {
        console.log(`${element} has more than 1000 trees`);
    }))
}

const streetsReport = () => {
    console.log(`------STREETS REPORT------`);
    console.log(`Our ${streets.length} streets have a total length of ${sumOfStreetLengths} km, with an average of ${averageSumOfStreetLengths} km.`);
    console.log(streetClassification(streets));
}

parksReport();
streetsReport();
