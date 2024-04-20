// 获取模态框、关闭按钮和段落标签的元素
const modal = document.getElementById("myModal") as HTMLElement;
const span = document.getElementsByClassName("close")[0] as HTMLElement;
const modalText = modal.querySelector("p") as HTMLParagraphElement;

// 当用户点击模态框的 (x) 按钮时，关闭模态框
span.onclick = function() {
  modal.style.display = "none";
}

// 当用户点击模态框之外的地方时，也可以关闭模态框
window.onclick = function(event: MouseEvent) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 动态改变模态框内的文本并显示模态框
function changeTextAndShowModal() {
  modalText.innerText = "请加我们的q群921551235"; // 更改文本内容
  modal.style.display = "block"; // 显示模态框
}
