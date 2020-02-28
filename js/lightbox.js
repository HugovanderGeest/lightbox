const info = document.querySelectorAll('.twee');
const kleiner = document.querySelectorAll('.een');

let Inhoud = [];

for(let i=0; i<info.length; i++) {
    Inhoud.push(info[i]);
    info[i].remove();
}

// function modaal(num); {
//     console.log(num);
// }

// for(let i=0; i<kleiner.length; i++) {
//     kleiner[i].addEventListener('click', function() {
//         modaal(i);
//     });
// }