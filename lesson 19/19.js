'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎉Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value = 23);
*/
//tiếp video 73
/* const x = function () {
console.log(23);
};
// Sau khi ấn nút check(hay gọi là sự kiện check) thì phương thức addEventListener sẽ lắng nghe và đưa ra phản hồi, 
//truyền nội dung vào phương thức addEventListener(),chính là nội dung bên trong dấu ()
// ở đây nội dung bên trong addEventListener là 'click', function()...
//click là đối số đầu tiên của phương thức addEventListener, hàm function là đối số thứ hai của phương thức, trả về giá trị cần hiển thị.
// hàm function ở đây được gọi là trình xử lý sự kiện.
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent ='⛔ No number!'; 
    }
});
*/
 // video 74
 /*
const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber; 
    document.querySelector('.check').addEventListener
    ('click', function(){ //hành động click được đặt trong ngoặc đơn () nói rằng toàn bộ thay đổi diễn ra 
        // trong ngoặc này, 
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        // khi nhập vào không phải là số
        if (!guess) {
            document.querySelector('.message').textContent ='⛔ No number!'; 
        }
        // khi người chơi thắng
        else if( guess === secretNumber) {
            document.querySelector('.message').textContent='🎉Correct Number!';
        }
        // khi số nhập vào cao hơn số bí mật
        else if( guess > secretNumber) {
            if(score>1) {
                document.querySelector('.message').textContent='💹 Too height!';
            score--;
            document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent='💥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
            
        }
        // khi số nhập vào thấp hơn số bí mật
        else if( guess < secretNumber) {
            if(score>1) {//khi điểm số còn >1 thì hiện ra thông báo con số nhập vào là cao hay thấp.
                // không phải là 0 điểm vì sau khi điểm còn 1 thì 
                //cú click tiếp theo, tương đương điểm bằng 0 && lost game.
                document.querySelector('.message').textContent='〽 Too low!';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {// Ngược lại khi điểm < 1 mà chưa đoán đúng thì hiện ra thông báo lost game.
                // không phải là 0 điểm vì sau khi điểm còn 1 thì 
                //cú click tiếp theo, tương đương điểm bằng 0 && lost game.
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
            }
            
        }
    });
    */

    //Video 75 nâng lên từ video 74 bằng việc thêm css vào, khi người chơi thắng đổi màu nền body, kích thước khung điểm.

    let secretNumber = Math.trunc(Math.random()*20) + 1; //secretNumber & score gọi là biến trạng thái.
    let score = 20;
    let highscore = 0;
    const displayMessage =function(message) {
        document.querySelector('.message').textContent = message;   
    }
//document.querySelector('.number').textContent = secretNumber; // khi người chơi chưa đoán đúng cần dấu số bí mật đi.
//Hay chính xác là số bí mật chỉ hiển thị khi người chơi chiến thắng, 
//tức là ta phải chuyển dòng code này vào đoạn người chơi chiến thắng, ta đóng đoạn code trên copy và di chuyển.
    document.querySelector('.check').addEventListener
    ('click', function(){ //hành động click được đặt trong ngoặc đơn () nói rằng toàn bộ thay đổi diễn ra 
        // trong ngoặc này, 
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        // khi nhập vào không phải là số
        if (!guess) {
            //document.querySelector('.message').textContent ='⛔ No number!'; 
            displayMessage('⛔ No number!');
        }
        // khi người chơi thắng
        // css dùng .style. và thuộc tính không dùng dấu gạch ngang mà dùng chữ hoa ở sau 'backgroundColor'
        else if( guess === secretNumber) {
            //document.querySelector('.message').textContent='🎉Correct Number!';
            displayMessage('🎉Correct Number!');
            document.querySelector('.number').textContent = secretNumber;// được copy từ phía trên
            document.querySelector('body').style.backgroundColor = '#60b347';//'body' không cần dấu chấm phía trước
            document.querySelector('.number').style.width = '30rem';//kích thước(số+đơn vị) và mã màu ghi trong ''
            if( score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        // khi số nhập vào cao hơn số bí mật (chính xác là khi số nhập vào khác với số bí mật để cắt giảm code trùng lặp)
        else if( guess !== secretNumber) {
            if(score>1) {
            //document.querySelector('.message').textContent= guess > secretNumber ? '💹 Too height!': '〽 Too low!';
            //khi số nhập vào > số bí mật-->thông báo, ngược lại-->thông báo
            displayMessage(guess > secretNumber ? '💹 Too height!': '〽 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            }
            else {
                //document.querySelector('.message').textContent='💥 You lost the game!';
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
            
        }
       /*
        // khi số nhập vào thấp hơn số bí mật
         else if( guess < secretNumber) {
            if(score>1) {//khi điểm số còn >1 thì hiện ra thông báo con số nhập vào là cao hay thấp.
                // không phải là 0 điểm vì sau khi điểm còn 1 thì 
                //cú click tiếp theo, tương đương điểm bằng 0 && lost game.
                document.querySelector('.message').textContent='〽 Too low!';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {// Ngược lại khi điểm < 1 mà chưa đoán đúng thì hiện ra thông báo lost game.
                // không phải là 0 điểm vì sau khi điểm còn 1 thì 
                //cú click tiếp theo, tương đương điểm bằng 0 && lost game.
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
            }
            
        }  */
    }); 
    
    

    //video 76 thiết lập nút chơi lại, ghi lại điểm cao - Đây chính là lab 20.3

    document.querySelector('.again').addEventListener
    ('click', function(){
        score = 20;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        //document.querySelector('.message').textContent='Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';

    })
    //video 77 thiết lập tính năng điểm cao
    //tạo biến highscore, nhận giá tị ban đầu bằng 0;
    // điểm cao chỉ được ghi lại khi người chơi chiến thắng, trong phần người chơi chiến thắng 
    //đưa điều kiện if(score>highscore){
    //highscore = score;
    //và in ra kết quả bằng đoạn code sau document.querySelector('.highscore').textContent = highscore;}
    
    

    //video 78- Tái cấu trúc code, hạn chế trùng lặp.
    // 1-số nhập vào có 2 khả năng: đúng hoặc sai (so với số bí mật).
    // 2- khi sai (khác với số bí mật) thì hoặc đưa ra thông báo 'quá cao' hoặc 'quá thấp'
    // 3- thông báo của 'message' lặp lại rất nhiều lần thu gọn nó bằng cách dùng hàm function(message)
    // const displayMessage =function(message) {
    //   document.querySelector('.message').textContent = message; }
    // 4- ta có thể làm điều tương tự với number..., để thu gọn code