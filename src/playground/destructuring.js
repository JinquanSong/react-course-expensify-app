//Object destructuring

const person = {
    // name: 'John',
    age: 49,
    location: {
        city: 'girraween',
        state: 'NSW',
        country: 'Australia',
        temp: 92
    }
};

// const name = person.name;
// const age = person.age;

// const {name: fullName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;
//
// console.log(`${fullName} is ${age}.`);
//
// if(city && temperature) {
//     console.log(`It's ${temperature}.`);
// }
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self Publisher'} = book.publisher;
//
// console.log(publisherName);


const address = ['18 Girraween', 'Girraween', 'NSW', '2014'];
const [, city, state, ,country = 'Australia'] = address;


console.log(`You are in ${city} ${state} ${country}`);


