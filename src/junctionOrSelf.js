// Bài tập 3 junction or Self
function junctionOrSelf (num) {
    let finalArr = []; // kết quả cuối cùng 0 = Self >0 Junction
    let numLength = num.toString().split("").length; //đếm số digits của number 
    let numStart = Math.abs(num - (9*numLength)); //số thấp nhất có thể để bắt đầu vòng lặp

    for (let i= numStart; i < num; i++) {
        numStartArr = i.toString().split("")
        let numSum = numStartArr.reduce((sum, val) => {return parseInt(sum) + parseInt(val)})
        if ((i + numSum) ===  num) {
            finalArr.push(i);
        }
        else {
            continue
        }
        return finalArr;
    }

}