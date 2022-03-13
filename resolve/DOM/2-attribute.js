// 1/ Attribute là gì ?
/**
 * getAttribute
 * Dùng để lấy giá trị của attirbute
 * Chỉ dành cho selector không sử được cho nodelist hoặc HTMLCollection
 */

const out = document.querySelector('.outer');
console.log(out.getAttribute('date-type'));

const li = document.querySelectorAll('.item');
// console.log(li.getAttribute('class')); //Error

li.forEach(function (item) {
  console.log(item.getAttribute('class'));
});

/**
 * setAttribute(attribute, value)
 * Dùng để set giá trị của attirbute nào đó
 */
const link = document.querySelector('.link');
link.setAttribute('target', '_blank');

/**
 * removeAttribute
 * Dùng để xóa attribute nào đó
 */

// link.removeAttribute('target');

/**
 * hasAttribute
 * Kiểm tra selector có attribute đó không
 * có trả về tru không có trả về false
 */
// const isHasTarget = link.hasAttribute('target');
// console.log(isHasTarget);
