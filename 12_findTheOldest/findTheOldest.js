const findTheOldest = function(arr) {
    let oldestPerson = {};
    for(let person of arr) {
        if(getAge(person) > getAge(oldestPerson) || !getAge(oldestPerson)) {
            oldestPerson = person;
        }

        console.log(oldestPerson)
        console.log(getAge(oldestPerson) + " " + getAge(person))
    }

    return oldestPerson;
};

function getAge(person) {
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath || new Date().getFullYear();

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
