/**
 * Làm việc vối class của Selector
 */
// 1/ add
const heading = document.querySelector('h1');
heading.classList.add('red');

// 2/ remove
heading.classList.remove('red');

// 3/ contains
console.log(heading.classList.contains('is-active'));

// 4/ toggle
console.log(heading.classList.toggle('is-active'));

// explain
// if (heading.classList.contains('is-active')) {
//   heading.classList.remove('is-active');
// } else {
//   heading.classList.add('is-active');
// }
