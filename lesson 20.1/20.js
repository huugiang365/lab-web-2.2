'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   }; //hàm openModal

for (let i = 0; i< btnsOpenModal.length; i++)// bình thường cần ngoặc nhọn để xác định một khối
// ở đây chỉ có 1 dòng mã, tương tự như if- else, nên không cần ngoặc nhọn.
btnsOpenModal[i].addEventListener('click', openModal);

//console.log(btnsOpenModal[i].textContent);
   
/* btnsOpenModal[i].addEventListener('click', function() {
 console.log('Button clicked');
 modal.classList.remove('hidden');// không dùng dấu chấm trong ngoặc ' ' vì ở đây không chọn lớp hidden, mà là xóa nó(remove).
 overlay.classList.remove('hidden');
 //modal.style.display = 'block'; tác dụng giống với đoạn code  modal.classList.remove('hidden');
 //tuy nhiên ta không nên dùng vì sẽ phải nhớ chính xác nội dung viết trong dấu ''.
}); */ // Viết gọn mã đoạn này bằng cách tạo hàm openModal

/* 
btnCloseModal.addEventListener('click', function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
});

overlay.addEventListener('click', function() {
 modal.classList.add('hidden');
 overlay.classList.add('hidden');   
});
*/ //Viết gọn đoạn code trên bằng hàm closeModal
const closeModal = function() {
modal.classList.add('hidden');
overlay.classList.add('hidden');   
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// Xử lý sự kiện bàn phím: key down, key up, key press.
 document.addEventListener('keydown', function(e) {
    //console.log('A key was pressed');
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    //Điều kiện bên trong hàm if() được hiểu như sau:
    // khi gõ phím Escape và && mô hình không chứa lớp ẩn (phím Escape && cửa sổ đang mở)thì 
    //thực thi hàm đóng mô hình(cửa sổ).
    //giải thích thêm 1 tí: khi mô hình( cửa sổ) có chứa lớp ẩn, 
    //hay lớp ẩn đang được gọi thì có nghĩa là mô hình đang bị đóng, 
    //ngược lại khi không chứa(không gọi lớp ẩn) thì mô hình đang được mở
        console.log('Esc was pressed');
    } 
 });