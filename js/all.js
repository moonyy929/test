// alert("hi")

// 根據傳入的值，找到 DOM 中 id 為 'xxx' 的元素。
// document.getElementById('xxx');

// 針對給定的 tag 名稱，回傳所有符合條件的集合
// document.getElementsByTagName('xxx');

// 針對給定的 class 名稱，回傳所有符合條件的集合
// document.getElementsByClassName('xxx');

// 針對給定的 Selector 條件，回傳第一個 或 所有符合條件的 NodeList。
// document.querySelector('.xxx'); (class) //或document.querySelector('#xxx'); (id)
// document.querySelectorAll('xxx'); (class) //或document.querySelectorAll('#xxx'); (id)


// document.getElementById("title1").addEventListener("click", al, true)

function al(){
    alert("js worked!!!")
}

// var dd = document.getElementById("demo1")
// dd.addEventListener("click", function () {
//     alert("Good job!")
// })
document.getElementById("demo1").addEventListener("click", function () {
    swal("Good job! Ruby!!", "You clicked the button!", "success")
})
// document.getElementById("demo1").addEventListener("click", function () {
//     swal("Good job!", "You clicked the button!", "success")
// })
document.getElementById("demo4").addEventListener("click", function () {
    swal({
        Title: "hey",
        Text: "hello world!",
        icon: "info",
        buttons: {
            Btn: false,
            cancel: {
                text: "取消",
                visible: true
            },
            confirm: {
                text: "Confirm",
                visible: true
            },
            danger: {
                text: "Danger",
                visible: true
            }
        }
    })
})

function changetextContent() {
    document.getElementById("title1").innerText = "Hello World"
    // 用innerText或textContent都可以，innerHTML也可以，innerHTML好像是會連 標籤tag 一起改變

}

var Name;
Name = "Tim";
console.log(Name);

// var a = [1,2,3,4,5,6,7,8,9]
// var b = [1,2,3,4,5,6,7,8,9]

var el = document.querySelectorAll(".box")

for (var i = 1; i<=9; i++){
    var str = "" // 預計將結果填入 str
    for (var j = 1; j<=9; j++){
        var count = i + "*" + j + "=" + i*j
        console.log(count)
        str += "<div>" + count + "</div>" 
        //使用str加總的功能，把所有的組合完成後，變成<p>標籤，丟回str裡面
        el[i-1].innerHTML = str //透過剛剛變數 tr的設定，渲染到網頁上
    }
}

var str = document.createElement("em")
str.textContent = "新增文字"
document.querySelector(".create").appendChild(str)

var data = [
    {
      team: "湖人隊",
      player: "Shaquille O'Neal",
    },
    {
      team: "公牛隊",
      player: "Michael Jordan",
    },
    {
      team: "爵士隊",
      player: "Karl Marlon",
    },
];

var team = document.getElementById("teamId"); //change 選單
var list = document.querySelector(".list"); // 清單內容

//在change選單，建立好 function 名稱
team.addEventListener("change", updateList, false);
var dataLen = data.length;

// 用innerHTML寫
function updateList(e) {
    var select = e.target.value; //宣告這個事件中的目標為選單的值
    var str = ""; //組一個字串
    for (var i = 0; i < dataLen; i++) {
        //用 for 迴圈篩選資料
        if (select == data[i].team) {
        //如選單當中找到 team
        str += "<li>" + data[i].player + "</li>"; //球員名稱字串
        }
    }
    list.innerHTML = str; //將 list 內容丟回字串，印在網頁上
}

// 用createElement寫
// var str = document.createElement("li")
// function updateList(e){
//     var select = e.target.value
    
//     for (var i =0; i<dataLen; i++){
//         if (select == data[i].team){
//             str.textContent = data[i].player
//         }
//     }
//     list.appendChild(str)
// }