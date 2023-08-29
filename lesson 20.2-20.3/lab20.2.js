'use strict';
/*
// code js tham khảo

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);


//hết code js tham khảo 

*/


// lựa chọn các đối tượng element

// điểm số của từng người chơi(khi được lưu lại)
 const score0El = document.querySelector('#score--0');
 const score1El = document.getElementById('score--1');

 // điểm số tạm thời của từng người chơi (trong khi đang chơi: tức là chưa lưu điểm && chưa bị về 1)
 const current0El = document.getElementById('current--0');
 const current1El = document.getElementById('current--1');
   //chọn class người chơi để thay đổi màu nền khi chuyển người chơi
 const player0El = document.querySelector('.player--0');
 const player1El = document.querySelector('.player--1');

   
 const diceEl = document.querySelector('.dice');
 const btnNew = document.querySelector('.btn--new');
 const btnHold = document.querySelector('.btn--hold');
 const btnRoll = document.querySelector('.btn--roll');

 //phần khởi động 3 dòng code dưới trò chơi- được đóng lại sau khi gom vào hàm init.
/*
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
*/

//let currentScore = 0;// Tạo biến lưu điểm sau mỗi lần tung xúc xắc.
// let activePlayer = 0; // biến để xác định người đang chơi.

// Để thực hiện trình xử lý newgame một cách gọn gàng, ta tạo hàm khởi động  init
let scores, currentScore, activePlayer, playing; // khai báo biến trước sau đưa vào hàm init.
// rồi sẽ comment các dòng code được gộp vào hàm init. 

const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
       
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');


    document.querySelector('#name--0').textContent = 'Player 1'; // tự thêm
    document.querySelector('#name--1').textContent = 'Player 2'; // tự thêm

}
init(); // chạy hàm init trước khi dùng cho trình xử lý newgame

 // lưu điểm của cả hai người chơi vào dạng mảng
 //( điểm số này không bị mất khi chuyển sang người chơi tiếp theo, 
 //chỉ về 0 khi reset lại trò chơi)
 // const scores = [0, 0];
 // tạo biến trạng thái dạng bloem để xác định trò kết thúc
 //let playing = true; //các nút ROLL, HOLD sẽ chỉ hoạt động khi biến playing = true, đưa hàm if vào bên trong 2 trình sự kiện này để thực hiện ý tưởng.

 // đưa đoạn code chuyển sang người chơi tiếp theo ( trình xử lý đang chơi) vào hàm switchPlayer để tái sử dựng phía sau

 const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        //.toggle- phương thức bật tắt, thay vì 
        //phương thức chứa( phải xóa-> gọi, gọi -> xóa)
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
 };


//trình xử lý sự kiện tung xúc xắc function rolling
btnRoll.addEventListener('click', function() {
    //biến trạng thái playing quyết định trình sự kiện này còn hoạt động hay không.
    if(playing===true) {
    // 1- Tạo một cuộn xúc xắc ngẫu nhiên.

    const dice = Math.trunc(Math.random() *6) + 1;
    console.log(dice); 
    //Math.random*6: tạo số ngẫu nhiên từ 0 đến 0,99 rồi nhân với 6, 
    //Math.trunc : Loại bỏ phần dư. Cộng với 1 để tạo ra 1,2,3,4,5,6 số

    // 2- Hiển thị xúc xắc( bằng cách loại bỏ lớp phủ).
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;
    // sau khi hàm random ở trên trả về giá trị cho biến dice, lấy giá trị này 
    //gọi vào ${} đường dẫn hình ảnh,
    //điều thú vị là mỗi  ${} trong đường dẫn hình ảnh trùng với số chấm trên mặt xúc xắc.

    // 3- Kiểm tra cuộn xúc xắc có là 1: nếu đúng chuyển sang người chơi tiếp.
    //không phải là 1: (dice !==1)
    if(dice !==1){
        // thêm xúc xắc vào số điểm hiện tại
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //current0El.textContent = currentScore; 
        //hiển thị điểm số hiện tại ở người chơi hiện tại
        

    }
    else{
        //chuyển sang người chơi tiếp theo ( khi dice ===1 )
        // Sự thật là khi xúc xắc gieo về 1(dice ===1) thì 
        //đưa điểm số của người chơi hiện tại current--${activePlayer} về 0, sau đó
        // chuyển sang người chơi tiếp theo: nếu đang là ( người số 1) 
        //thì chuyển sang (người chơi số 2) và 
        //ngược lại/ activePlayer = activePlayer === 0? 1 : 0;
        /*
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        //.toggle- phương thức bật tắt, thay vì 
        //phương thức chứa( phải xóa-> gọi, gọi -> xóa)
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active'); 

        */
       switchPlayer();
        
    }

  } // đóng hàm if biến trạng thái playing
});




// trình xử lý sự kiện khi click vào nút Hold
btnHold.addEventListener('click', function(){
    //biến trạng thái playing quyết định trình sự kiện này còn hoạt động hay không.
    if(playing===true) {
    //1- cộng điểm hiện tại vào điểm của người chơi đang hoạt động
    scores[activePlayer] += currentScore; // tức là như đoạn code được coment ở dưới
    //scores[1]= scores[1] + currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2-kiểm tra điểm của 
    //người đang chơi có >= 100 không? đúng ( kết thúc): 
    if(scores[activePlayer] >= 100){
        playing = false;
        //xóa ảnh xúc xắc bằng cách hiển thị lớp ẩn.
        diceEl.classList.add('hidden');
        //gọi css in ra lớp người chiến thắng
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        // lúc này thay tên người chơi bằng từ chiến thắng
        document.querySelector(`#name--${activePlayer}`).textContent = 'CHIẾN THẮNG';
        // xóa lớp người chơi tiếp theo(người đang chơi)
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    else {
        //sai (chuyển người chơi tiếp theo) 
    switchPlayer();
    }
  
  }  //đóng hàm if biến trạng thái playing
    
});


// xây dựng trình xử lý 'New Game'.
// trước tiên gom các điều kiện ban đầu vào 1 hàm gọi là hàm khởi động - sau đó comment các dòng code đc gom ở phía trên..


btnNew.addEventListener('click', init);

// Hiện tại, với bài này khi ấn nút new game nó luôn bắt đầu bằng người chơi số 1.
// Nếu muốn ấn nút new game mà nó bắt đầu bằng người không thắng trước đó thì làm như thế nào?

// Lab 20.3 chính là lab 19.1 phần video 76.