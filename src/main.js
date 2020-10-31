import {createTaskDiv} from "../src/taskDivCreate"
// ấn nút để tạo task cần hoàn thành
const btnAdd = document.getElementById("input-addNow");
let inputField = document.getElementById("input-field");
btnAdd.addEventListener("click", () => {
  if (!inputField.value.replace(/\s/g, "").length) {
    alert("Bạn quên điền vào khung remember me rồi ^.^");
    return;
  } else {
    createTaskDiv(inputField.value);
  }
});

// nút hoàn thành

$(document).on('click','.list-btn-fin', function(){
    $(this).closest('.list-items').children('.list-task').toggleClass("active");
})

 //nút xóa

 $(document).on('click','.list-btn-del', function(){
     $(this).closest('.list-items').remove();
 })
