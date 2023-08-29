//lab 18.1 Giới thiệu về Object (5 phút)
//Tạo một object là 'myCountry' cho quốc gia bạn chọn, 
//chứa các thuộc tính 'country', 'capital', 'language', 'population' and 'neighbours' 
//(array như chúng ta đã thực hành trong bài trước).
 /*  const myCountry = {
  country:'Viet Nam', 
  capital: 'Hà Nội',
  language:'Vietnamesse' ,
  population: 97000000,
  neighbours: ['Trung Quốc', 'Lào', 'Campuchia'],
 }; 

 console.log(myCountry); */

 //lab 18.2 Dấu chấm với dấu ngoặc (10 phút)
//18.2.1- Sử dụng object từ bài tập trước, in string sau ra console: 
//'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

 //console.log(`${myCountry.country} has ${myCountry.population} million ${ myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

//18.2.2- Tăng dân số của đất nước thêm hai triệu người bằng cách sử dụng dấu chấm (object.population), 
//và sau đó giảm đi hai triệu người bằng dấu ngoặc (object['population']) để truy cập vào các thuộc tính. 
// myCountry.population = 99000000;
// myCountry.population = 95000000; //Có 1 câu hỏi ở đây, khi bổ xung dữ liệu ở đây thì dữ liệu ở câu 
//'console.log(`${myCountry.country} has...' phia trên không được cập nhật theo

/* const thongtinVietNam = prompt ('What do you want about Viet Nam? Choose betwween country, capital, language, population, neighbours');
if (myCountry[thongtinVietNam]) {
  console.log(myCountry[thongtinVietNam]);
}
else {
  console.log( 'wrong request! Choose betwween country, capital, language, population, neighbours ')
}

myCountry.vitri = 'ASIA';
myCountry['city'] = 'Hồ Chí Minh City'; */


//18.3 Phương thức Object  (15 phút)
//18.3.1- Thêm một phương thức có tên là 'describe' vào object 'myCountry'. 
//Phương thức này sẽ in một string ra console với nội dung như sau: 
// "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki" 
//nhưng lần này sử dụng từ khóa 'this'.

/* const myCountry = {
  country:'Viet Nam', 
  capital: 'Hà Nội',
  language:'Vietnamesse' ,
  population: 97000000,
  neighbours: ['Trung Quốc', 'Lào', 'Campuchia'],
  describe: function(){
    return `${this.country} has ${this.population} million ${ this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;

  }

  checkIsland: function(){
    if(this.neighbours.length>= 1) {
      this.isIsland = 'false';
      return this.isIsland;
    }
    else {
      this.isIsland = 'true';
    }
  }
 }; */
 

//18.3.2- Gọi phương thức 'describe' 


//console.log(myCountry.describe());

//18.3.3- Thêm phương thức 'checkIsland' vào object 'myCountry'. 
//Phương thức này sẽ thiết lập một thuộc tính mới trên object là 'isIsland'. 
//'isIsland' sẽ là giá trị true nếu không có nước láng giềng, ngược lại là false. 
//Sử dụng toán tử điều kiện để đặt giá trị cho thuộc tính.
const myCountry = {
    country:'Viet Nam', 
    capital: 'Hà Nội',
    language:'Vietnamesse' ,
    population: 97000000,
    neighbours: ['Trung Quốc', 'Lào', 'Campuchia'],
     describe: function(){
      return `${this.country} has ${this.population} million ${ this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  
    },
  
    checkIsland: function(){
       if(this.neighbours.length <=0) {
        this.isIsland = true;
        return this.isIsland;
      }
      else {
        this.isIsland = false;
        return this.isIsland;
      }
    },
  //thêm vào phương thức thongtinvietnam ở đây: nếu là quốc gia đảo thì in ra 'quốc gia đảo', false thì in ra ' không là quốc gia đảo'
    thongtinvietnam: function() {
      return `${this.country} has ${this.population} million ${ this.language}-speaking people, ${this.neighbours.length} neighbouring countries, ${this.isIsland? 'là quốc đảo':'không là quốc đảo'} and a capital called ${this.capital}`;
    }
  }
  console.log(myCountry.checkIsland());
  console.log(myCountry.describe());
  console.log(myCountry.thongtinvietnam());
  
  // lab 18-4 Vòng lặp For (5 phút)
  //Ở đất nước bạn có các cuộc bầu cử. 
  //Ở một thị trấn nhỏ, chỉ có 50 cử tri. 
  //Sử dụng vòng lặp for để mô phỏng 50 cử tri này, bằng cách in string sau ra console (cho các số từ 1 đến 50): 
  //'Voter number 1 is currently voting'.
  
  for ( let vot = 1; vot <= 50; vot++) {
    console.log(`Voter number ${vot} is currently voting`);
  }
  
  //Lab 18.5 Lặp trong array, break và continue (15 phút)
  // 18.5.1 - Hãy lấy lại array 'populations' từ bài lab 17.5.
    //Dũ liệu dân số 4 quốc gia bất kỳ ( dữ liệu bài 17.5).
  const population = [1441000000, 300000000, 120000000, 97000000];
  
  // 18.5.2- Sử dụng vòng lặp for để tạo array 'percentages2' 
  //chứa phần trăm dân số thế giới cho 4 giá trị population. 
  //Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
  
  // hàm 'percentageOfWorld1' và code của bài 17.5, ở đây để tên biến ko bị trùng với bài 18.5 
  //đã sửa percentages1,2,3,4 của bài 17.5 thành percen1,2,3,4.
  const percentageOfWorld1 = function (population) {
    return (population/7900000000)*100;
  }
  
  const percen1 =  percentageOfWorld1(population[0]);
  const percen2 =  percentageOfWorld1(population[1]);
  const percen3 =  percentageOfWorld1(population[2]);
  const percen4 =  percentageOfWorld1(population[population.length-1]);
  //console.log(percentages1,percentages2,percentages3,percentages4);
  const percentages = [ percen1, percen2, percen3, percen4];
  console.log( percentages);
  //hết hàm 'percentageOfWorld1' và code của bài 17.5
  
  
  const percentages2 = [];
  for (let i=0; i<population.length; i++) {
   percentages2.push(percentageOfWorld1(population[i]));
  }
  
  console.log(percentages2);
  // 18.5.3 Xác nhận rằng 'percentages2' chứa chính xác các giá trị trong array 'percentages' 
  //mà chúng ta đã tạo theo cách thủ công ở lab trước, để xem giải pháp này tốt hơn như thế nào.
  // cách 1 tham khảo trên mạng.
  
   /* function equar(a, b) {
    // ss độ dài 2 chuỗi
    if (a.length !== b.length) {
        return false
    } else {
      // ss giá trị bằng nghiêm ngặt tương ứng các vị trí trong chuỗi.
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
  }
   const sosanh = equar (percentages,percentages2);
   console.log(sosanh); */
  
  //Cách 2 dùng biến đánh dấu.
    //Mentor Nguyễn Trọng Bình
   /*  let flag = true;
    for (let i = 0; i < percentages.length; i++) {
    if (percentages[i] !== percentages2[i]) {
    flag = false;
    break;
    }
  };
    if(flag == true) {
      // 2 mảng giống nhau
      console.log("Hai mảng giống nhau.");
      } 
      else {
      // 2 mảng khác nhau
      console.log("Hai mảng khác nhau.");
      
      } */
    
    // tham khảo chat openai
    //let percentages = [10, 20, 30, 40, 50];
  //  let percentages2 = [10, 20, 30, 40, 50];
  
  /* let isSame = true; // Biến đánh dấu mặc định là true
  
  for (let i = 0; i < percentages.length; i++) {
    if (percentages[i] !== percentages2[i]) {
      isSame = false; // Nếu tìm thấy phần tử khác nhau, đánh dấu là false
      break;
    }
  }
  
  if (isSame == true) {
    console.log("Hai mảng giống nhau.");
  } else {
    console.log("Hai mảng khác nhau.");
  } */
  
  //18.6 Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)
  //18.6.1- Lưu trữ array của những array này vào biến 
  //'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
  const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
  console.log(listOfNeighbours);
  //18.6.2-Nếu như các mảng con có ít nhất hai phần tử, in ra lần lượt phần tử từ thứ 2 trở đi. 
  //Ví dụ với dữ liệu như trên sẽ in ra.
  //Mexico, Sweden, Russia
   //đếm số phần tử trong mỗi mảng con, 
   // so sánh số phần tử trong mỗi mảng con với 2
   // ở màng nào có số phần tử lớn hơn 2 thì gom lại in ra màn hình.
  
   const inraphatuthu2trodi = [];// tạo 1 mảng hứng các phần tử thỏa đk để in ra
   
  for(let i = 0; i< listOfNeighbours.length; i++){
  //'i<=' không lấy dấu '=' được...????
  let arraytp = listOfNeighbours[i]; //arraytp : mảng thành phần
  
      if (arraytp.length >= 2) {
   
    for(let j = 1; j<arraytp.length; j++) {
      //j< , j không lấy dấu '=' được..., lấy dáu'=' thì nó sẽ gọi ra cả những phần tử không có giá trị?????
      console.log(arraytp[j]);
      inraphatuthu2trodi.push(arraytp[j]); // cộng vào mảng
    }
  }
   }
  
  console.log(inraphatuthu2trodi); // in ra màn hình 1 mảng chứa những phần tử đủ đk
  
  //18.6.3-Bạn sẽ cần một vòng lặp bên trong vòng lặp cho điều này. 
  //Điều này thực sự hơi phức tạp, 
  //vì vậy đừng lo lắng nếu nó quá khó đối với bạn! Bạn sẽ giải quyết được vấn đề này.
  
  
  //Lab 18.7 Vòng lặp While (10 phút)
  //18.7.1- Lấy lại từ lab Lặp trong array, break và continue, 
  //nhưng lần này hãy sử dụng vòng lặp while (gọi array 'percentages3').
  //Sử dụng vòng lặp for để tạo array 'percentages3' chứa phần trăm dân số thế giới cho 4 giá trị population. 
  //Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó.
  
  //Dũ liệu dân số 4 quốc gia bất kỳ ( dữ liệu bài 17.5).
  /* const population = [1441000000, 300000000, 120000000, 97000000];
  
  const percentageOfWorld1 = function (population) {
    return (population/7900000000)*100;
  }
  
  const percen1 =  percentageOfWorld1(population[0]);
  const percen2 =  percentageOfWorld1(population[1]);
  const percen3 =  percentageOfWorld1(population[2]);
  const percen4 =  percentageOfWorld1(population[population.length-1]);
  
  const percentages = [ percen1, percen2, percen3, percen4];
  console.log( percentages); */
  
  const percentages3 = [];
  let i = 0;
  while(i<=(population.length -1)) {
   percentages3.push(percentageOfWorld1(population[i]));
   i++;
  }
  
  console.log(percentages3);
  
  //Xác nhận rằng 'percentages3' chứa chính xác các giá trị trong array 'percentages' 
  //mà chúng ta đã tạo theo cách thủ công ở lab trước, để xem giải pháp này tốt hơn như thế nào.
  // dùng vòng lặp while, tên biến đếm có thể đã thay đổi khi đóng mở các /**/ cần quan sát tên biến
  
     let j=0;
     let flag = true;
     
    while (j <= (percentages.length-1)) {
    if (percentages[j] !== percentages3[j]) {
      flag = false;
      break;
   
    }
  
    j++; // lưu ý vị trí đưa j++ vào
  };
    if(flag == true) {
      // 2 mảng giống nhau
      console.log("Hai mảng giống nhau.");
      } 
      else {
      // 2 mảng khác nhau
      console.log("Hai mảng khác nhau.");
      
      }
  
  
  //18.7.2- Bạn thích giải pháp nào hơn cho nhiệm vụ này: vòng lặp for hay vòng lặp while?
  // while có cảm giác máy tính phải xử lý nhiều hơn, viết sai còn không chạy( không hiển thị ra bất cứ điều gì) 
  //for thấy máy tính chạy êm hơn, viết sai có chạy và báo lỗi.
  
  
  /* 18.8 Bài toán tổng hợp #4
  Lab 18.8.1. So sánh chỉ số IBM (phần 3)
  Hãy quay lại ví dụ so sánh chỉ số BMI của Mark và John! 
  Lần này, hãy dùng object để triển khai các phép tính! 
  Nhớ rằng: BMI = mass/[(height)^2)] = mass/(height*height) (mass tính bằng kg và height tính bằng mét)
  1. Nhiệm vụ của bạn:
  Với mỗi người (Mark Miller và John Smith), 
  hãy tạo một object có các thuộc tính như full name, mass, and height 
  Tạo phương thức 'calcBMI' ở mỗi object để tính BMI (phương thức như nhau ở cả hai object). 
  Lưu giá trị BMI vào một thuộc tính và trả về từ phương thức.
  In ra console người có BMI cao hơn cùng với tên đầy đủ và BMI tương ứng. 
  Ví dụ: "John's BMI (28.3) is higher than Mark's (23.9)!"
  2. Dữ liệu kiểm tra:
  Mark nặng 78 kg và cao 1m69. John nặng 92kg và cao 1m95.
  
  
  */
  
  const mark = {
  fullname: 'Mark Miller',
  mass: 78,
  heigh: 1.69,
  calcBMI: function() {
  this.ibm = this.mass/this.heigh**2;
  return this.ibm;
  }
  
  };
  
  const John = {
    fullname: 'John Smith)',
    mass: 92,
    heigh: 1.95,
    //tạo phương thức calcBMI, và tạo thuộc tính bmi
    calcBMI: function() {
      this.ibm = this.mass/this.heigh**2;
      return this.ibm;
      }
    
  };
  
  mark.calcBMI();
  John.calcBMI();
  console.log(mark.ibm, John.ibm);
  //Hoặc console.log(mark.calcBMI(), John.calcBMI()); thì không cần mark.calcBMI();John.calcBMI(); viết ở ngoài
  
  if(mark.ibm>John.ibm){
    console.log(`Mark's BMI (${mark.ibm}) is higher than John's (${John.ibm})!`);
  }
  else if(John.ibm>mark.ibm) {
    console.log(`John's BMI (${John.ibm}) is higher than Marks's (${mark.ibm})!`)
  }
  
  /* Lab 18.8.2. Cải thiện Tip calculator
  Hãy cải thiện thêm tip calculator của Steven trong bài lab 17.7.2, lần này sử dụng các vòng lặp!
  1. Nhiệm vụ của bạn:
  Tạo array 'bills' chứa tất cả 10 giá trị hóa đơn kiểm tra.
  Tạo các array rỗng cho 'tips' và 'totals'.
  Sử dụng hàm 'calcTip' mà chúng ta đã viết trước đó (không cần lặp lại) 
  để tính các giá trị tips và totals (hóa đơn + tiền boa) cho mỗi giá trị bill trong bills array. 
  Sử dụng vòng lặp for để thực hiện 10 phép tính!.
  2. Dữ liệu kiểm tra:
  22, 295, 176, 440, 37, 105, 10, 1100, 86 và 52
  Gợi ý: Gọi ‘calcTip‘ trong vòng lặp và dùng phương thức push để thêm giá trị cho các array tips và totals.
  
  
  
  
  */
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
  
  const calcTip = function(bills) {
   return bills >= 50 && bills <= 300? bills*0.15: bills*0.2;
  }
  for(let i=0; i< bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push((bills[i])+(calcTip(bills[i])));
  
  }
  
  /*for(let k=0; k< tips.length; k++){
    totals.push((bills[i])+(tips[k]));
  }*/
  // tại sao dùng vòng lặp for để tính totals thì không ra được kết quả.???
  
  console.log(bills, tips, totals);
  
  /* Bonus: Viết hàm 'calcAverage' nhận array 'arr' làm tham số. 
  Hàm này tính trung bình tất cả các số đã cho trong array. 
  Đây là một thử thách khó (chúng ta chưa từng thực hiện điều này trước đây)! 
  Dưới đây là hướng dẫn thực hiện:
  Trước tiên, bạn cần cộng tất cả các giá trị trong array. 
  Để thực hiện phép cộng, tạo biến 'sum' bắt đầu từ 0. 
  Sau đó lặp qua array, sử dụng vòng lặp for. 
  Ở mỗi lần lặp, cộng giá trị hiện tại vào biến 'sum'. 
  Như vậy, ở cuối vòng lặp, bạn sẽ cộng được tất cả các giá trị với nhau.
  Để tính trung bình, chia tổng mà bạn vừa tính trước đó cho độ dài của array 
  (vì đó là số phần tử).
  Gọi hàm với array 'totals'. */
  
  function calcAverage(arr) {
  if(arr.length === 0){
    return 0; //" không có phần tử nào trong mảng "
  }
  
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
    sum += arr[i];
    }
  
  let average = sum / arr.length;
  return average;
  
  }
  
  // average là giá trị trung bình của mảng arr
  //  calcAverage là hàm nhận mảng arr làm tham số.
  // toán tử += : ban đầu sum = 0, sau khi += với arr[i], 
  //trả về sum sau cùng là tổng giá trị của mảng arr.
  
  // ví dụ 
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]; 
   let average = calcAverage(arr);
   console.log(`Giá trị trung bình của mảng arr là : ${average}`);
  
   //
   /* tham khảo open ai
   function calcAverage(arr) {
    if (arr.length === 0) {
      return 0; // Tránh chia cho 0
    }
    
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    
    var average = total / arr.length;
    return average;
  } */