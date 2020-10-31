

// function tạo thẻ div bên khung tasks
export function createTaskDiv(content) {
  //tạo button cho từng task hoàn thành, sửa, xóa
  const btnComp = document.createElement("BUTTON");
  btnComp.setAttribute("class", "list-btn-fin");
  btnComp.setAttribute("type", "button");
  btnComp.innerHTML = "&#10004;";

  const btnFix = document.createElement("BUTTON");
  btnFix.setAttribute("class", "list-btn-fix");
  btnFix.setAttribute("type", "button");
  btnFix.innerHTML = "SỬA";

  const btnDel = document.createElement("BUTTON");
  btnDel.setAttribute("class", "list-btn-del");
  btnDel.setAttribute("type", "button");
  btnDel.innerHTML = "X";

  // tạo thẻ div chứa 3 button và append - thẻ chính 2
  const divListBtn = document.createElement("DIV");
  divListBtn.setAttribute("class", "list-btn");
  divListBtn.appendChild(btnComp);
  divListBtn.appendChild(btnFix);
  divListBtn.appendChild(btnDel);

  // tạo thẻ div nội dung của task cần làm -thẻ chính 1
  const divListTask = document.createElement("DIV");
  divListTask.setAttribute("class", "list-task");
  divListTask.innerHTML = content;

  // tạo thẻ div chứa 2 thẻ chính bên trên
  const divListItems = document.createElement("DIV");
  divListItems.setAttribute("class", "list-items");
  divListItems.appendChild(divListTask);
  divListItems.appendChild(divListBtn);

  // append toàn bộ nội dung vào khung task
  const divListBox = document.getElementById("list-box");
  divListBox.appendChild(divListItems);
}



