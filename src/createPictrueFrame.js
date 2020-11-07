
let bt5Btn = document.getElementById("bt5-btn");
bt5Btn.addEventListener("click", () => {
  bt5Result();
});

function bt5Result() {
  let bt5Input = document.getElementById("bt5-input").value;
  let bt5Arr = []
  bt5Arr = bt5Input.split(" ");
  lenngth = parseInt( bt5Arr[0]);
  rows = parseInt (bt5Arr[1]);
  smbl = bt5Arr[2];
  for (rw = 1; rw <= rows; rw ++) {
      if (rw == 1 || rw == rows) {
          let TopBot = rowTopBot (length)
          console.log(TopBot)
      }
      else { 
          let middle = rowMiddle(length);
          console(middle)
      }
  }
}

function rowTopBot (length) {
    for (len = 1; len = length; len ++) {
        let lengthArr = [];
        lengthArr.push(symbl);
    }
    let lengthBotTopStr = lengthArr.join().replace(/,/g,' ');
    return lengthBotTopStr;
}
 
// function rowMiddle (length) {
//     let lengthMiddle = [];
//     for (len = 2; len = length -1; len ++) {
//         lengthMiddle.push (" ")
//     }
//     lengthMiddle.unshift(symbl);
//     lengthMiddle.push(symbl)
//     return lengthMiddle;
// }


let bt5Btn = document.getElementById("bt5-btn");
bt5Btn.addEventListener("click", () => {
  bt5Result();
});

function bt5Result() {
  let bt5Input = document.getElementById("bt5-input").value;
  let bt5Arr = [];
  bt5Arr = bt5Input.split(" ");
  lenngth = parseInt(bt5Arr[0]);
  rows = parseInt(bt5Arr[1]);
  smbl = bt5Arr[2];
  let row1 = rowTopBot(length, smbl);
  console.log(row1);
  let rowInside = "";
  for (rw = 2; rw < rows; rw++) {
    rowInside = rowMiddle(length, smbl);
    console.log(rowInside);
  }
  let rowEnd = rowTopBot(length, smbl);
  console.log(rowEnd)
}

function rowTopBot(length, smbl) {
  let lengthStr = "";
  let lengthLoop;
  for (len = 1; (len = length); len++) {
    lengthLoop = lengthStr + smbl;
  }

  return lengthLoop;
}

function rowMiddle(length, smbl) {
  let lengthStr2 = smbl;
  let lengthLoop2;
  for (len = 2; (len = length - 1); len++) {
    lengthLoop2 = lengthStr2 + " ";
  }
  lengthLoop2 = lengthStr2 + smbl;
  return lengthLoop2;
}
