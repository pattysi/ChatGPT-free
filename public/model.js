// 获取模态窗口
var modal = document.getElementById('myModal');

// 获取关闭按钮
var span = document.getElementsByClassName('close')[0];

// 点击关闭按钮关闭模态窗口
span.onclick = function() {
    modal.style.display = 'none';
}

// 点击窗口外区域也能关闭模态窗口
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 页面加载完毕时显示模态窗口
window.onload = function() {
    modal.style.display = 'block';
}
