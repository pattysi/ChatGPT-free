// 获取元素
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// 当用户点击 <span> (x), 关闭弹窗
span.onclick = function() {
  modal.style.display = "none";
}

// 当用户点击弹窗以外的区域, 也可以关闭弹窗
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 在页面加载完毕时显示弹窗
window.onload = function() {
  modal.style.display = "block";
}
