import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDXCj3VpVgJwk2kGihzTmTL_d27Hx7a_Ks",
    authDomain: "expensify-be80f.firebaseapp.com",
    databaseURL: "https://expensify-be80f.firebaseio.com",
    projectId: "expensify-be80f",
    storageBucket: "expensify-be80f.appspot.com",
    messagingSenderId: "102946335463"
};
firebase.initializeApp(config);

//const database = firebase.database();

/**** Handles array ***/

// database.ref('notes').push({
//     title: 'TO DO 1',
//     description: 'Test'
// });
//
// database.ref('notes').push({
//     title: 'TO DO 2',
//     description: 'Test 2'
// });

// database.ref('notes')
//     .once('value')
//     .then((snapshot) => {
//         const notes = [];
//         snapshot.forEach((childNote) => {
//             notes.push({
//                 id: childNote.key,
//                 ...childNote.val()
//             })
//         });
//         console.log(notes);
//     }).catch((e) => {
//         console.log('Failed to load array notes.')
// });

// database.ref('notes')
//     .on('value', (snapshot) => {
//         const notes = [];
//         snapshot.forEach((childNote) => {
//             notes.push({
//                 id: childNote.key,
//                 ...childNote.val()
//             })
//         });
//         console.log(notes);
// });

database.ref('notes')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
});

database.ref('notes')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

// child_added not only triggered for new child but also for existing child
database.ref('notes')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

/**** set data****/
// database.ref().set({
//     name: 'John Song',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Sydney',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e);
// });

/**** Get data *****/
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//
// });
//
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e)
// });
//
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });
//
// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);
//
// setTimeout(() => {
//     database.ref().off('value');
// }, 7000);
//
// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);
//

/*** remove data ***/
// database.ref('isSingle').set(null);

// database.ref('isSingle')
//     .remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Failed to remove:', e)
// });

/***** update data ******/

// database.ref().update({
//     'job/title': 'Manager',
//     'location/city': 'Melbourne',
//     stressLevel: 9
// }).then(() => {
//     console.log('Data was updated');
// }).catch((e) => {
//     console.log('Failed to update:', e)
// });