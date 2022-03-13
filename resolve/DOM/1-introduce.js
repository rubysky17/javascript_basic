// 1/ Khái niệm DOM là gì ?
/**
 * DOM là tên gọi viết tắt của (Document Object Model – tạm dịch Mô hình Các Đối tượng Tài liệu)
 * Thành phần của DOM gồm:
 * + Dom node
 * + Dom Attribute
 */

// 2/ Các Selecting Node ???
/**
 * querySelector
 * theo tên thẻ: p, h1-h6, img, body, head,.v.v.
 * theo tên class: .tên Class
 * theo tên id: #tên id
 * trả về 1 node => không tìm thấy trả về null
 */

const heading = document.querySelector('h1');
const desc = document.querySelector('.description');
const text = document.querySelector('#text');
const inner = document.querySelector('.outer .inner');

console.log(heading);
console.log(desc);
console.log(text);
console.log(inner);

/**
 * querySelectorAll
 * trả về 1 nodeList chứa danh sách các node => không tìm thấy trả về empty
 * Lưu ý: nó giống Array nhưng không thể sử dụng được các phương thức của array như: map, filter, shift, reverse...
 * Chỉ dừng được forEach và for of
 */

const itemList = document.querySelectorAll('.item');
console.log(itemList);

/**
 * getElementsByClassname => trả về 1 HTMLCollecion chứa danh sách các node => không tìm thấy trả về empty
 */

const liList = document.getElementsByClassName('item');
console.log(liList);

/**
 * getElementsByTagName => trả về 1 HTMLCollecion chứa danh sách các node => không tìm thấy trả về empty
 */
const liList2 = document.getElementsByTagName('li');
console.log(liList2);

/**
 * getElementById  => trả về 1 node => không tìm thấy trả về null
 */

const idNode = document.getElementById('text');
console.log(idNode);
