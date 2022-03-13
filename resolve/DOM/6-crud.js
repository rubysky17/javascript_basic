// Thêm xóa sửa node trong Javascript
// 1. tạo ra element trong javascript
// document.createElement()
const head1 = document.createElement('h1');
// Khởi tạo đc element h1 nhưng chưa hiển thị bên trong file
// 2. appendChild để đưa nó vào trong node
const body = document.querySelector('body');
head1.textContent = 'Đây là thẻ h1 đc thêm vào bằng appenChild';
body.appendChild(head1);

// insertAdjacentText()
// thêm một đoạn text với những option về vị trí
// insertAdjacentText(position, text)
// position: beforebegin, afterbegin, beforeend, afterend

/**
 * ---beforebegin---
 *
 * <h3>
 * ----afterbegin----
 *
 *  <span></span>
 *
 *  ---beforeend---
 * </h3>
 *  ---afterend---
 */

// insertAdjacentElement()
// thêm một đoạn text với những option về vị trí
// insertAdjacentElement(position, node)
// position: beforebegin, afterbegin, beforeend, afterend

/**
 * ---beforebegin---
 *
 * <h3>
 * ----afterbegin----
 *
 *  <span></span>
 *
 *  ---beforeend---
 * </h3>
 *  ---afterend---
 */
