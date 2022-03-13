/**
 * textContent
 * lấy nội dung bên trong của 1 selector
 * có thể sử dụng để gán lại nội dung bên trong
 * */
const desc = document.querySelector('.description');
// desc.textContent = 'new content'; // gán lại
console.log(desc.textContent);

/**
 * innerText
 * lấy nội dung bên trong của 1 selector
 * Không lấy được các selector có css display none
 * Loại bỏ khoảng trắng 2 bên
 */
desc.innerText = `<div>Hello worold</div>`;
console.log(desc.innerText);

/**
 * innerHTML
 * lấy nội dung bên trong của 1 selector bao gồmcả HTML
 */
const outer = document.querySelector('.outer');
outer.innerHTML = `<div>Hello worold</div>`;
console.log(outer.innerHTML);
