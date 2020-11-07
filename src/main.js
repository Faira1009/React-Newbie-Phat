let bt3Btn = document.getElementById("bt3-btn");
bt3Btn.addEventListener("click", () => {
  bt3Result();
});

function bt3Result() {
  let bt3Num = parseInt(document.getElementById("bt3-input").value);
  let bt3Arr = [];
  bt3Arr = junctionOrSelf(bt3Num);
  if (bt3Arr.length == 0) {
    document.getElementById("ketQuaBt3").innerHTML = "Self";
    document.getElementById("ketQuaBt3Plus").innerHTML = "Không có số nào";
  } else {
    document.getElementById("ketQuaBt3").innerHTML = "Junction";
    document.getElementById("ketQuaBt3Plus").innerHTML = bt3Arr;
  }
}
// Bài tập 3 junction or Self
function junctionOrSelf(num) {
  let finalArr = []; // kết quả cuối cùng 0 = Self >0 Junction
  let numLength = num.toString().split("").length; //đếm số digits của number
  let numStart;
  if (numLength == 1) {
    numStart = 1;
  } else {
    numStart = num - 9 * numLength; //số thấp nhất có thể để bắt đầu vòng lặp
  }
  for (let i = numStart; i < num; i++) {
    numStartArr = i.toString().split("");
    let numSum = numStartArr.reduce((sum, val) => {
      return parseInt(sum) + parseInt(val);
    });
    if (i + numSum === num) {
      finalArr.push(i);
    } else {
      continue;
    }
  }
  return finalArr;
}

let bt4Btn = document.getElementById("bt4-btn");
bt4Btn.addEventListener("click", () => {
  bt4Result();
});

function bt4Result() {
  let bt4Input = document.getElementById("bt4-input").value;
  let Text = decodeMorse(bt4Input);
  document.getElementById("ketQuaBt4").innerHTML = Text;
}
function decodeMorse(bt4Input) {
  let bt4Arr = bt4Input.split(" ");
  let bt4Decoded = bt4Arr.map((val) => {
    return morseToDots[val];
  });
  let bt4Text = bt4Decoded.join();
  let bt4Text2 = bt4Text.replace(",,,", " ");
  let bt4Text3 = bt4Text2.replace(/,/g, "");
  return bt4Text3;
}
const morseToDots = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-.-.--": "!",
  "   ": " ",
  "..--..": "?",
  ".-.-.-": ".",
  ".----.": '"',
  "---...": ":",
  "--..--": ", ",
  " ": "",
};


let bt5Btn = document.getElementById("bt5-btn");
bt5Btn.addEventListener("click", () => {
  bt5Result();
});

function bt5Result() {
  let bt5Input = document.getElementById("bt5-input").value;
  let bt5Arr = bt5Input.split(" ");
  console.log( bt5Arr)
  let bt5Length = parseInt(bt5Arr[0]);
  let bt5Rows = parseInt(bt5Arr[1]);
  let bt5Smbl = bt5Arr[2];
  console.log (bt5Length, bt5Rows, bt5Smbl)
  let arr = [];
  for (let i=1; i <= bt5Length; i++) {
    arr.push("a") // bị lỗi khúc này @@ tức 
  }
console.log (arr) 
}
