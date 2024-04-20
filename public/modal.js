console.log("JavaScript文件已加载");

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

document.addEventListener('DOMContentLoaded', function() {
    // 获取模态窗口元素
    var modal = document.getElementById('myModal');
    // 获取关闭按钮元素
    var span = document.getElementsByClassName('close')[0];

    // 点击关闭按钮时隐藏模态窗口
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // 点击模态窗口外部时隐藏模态窗口
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // 页面加载完毕时显示模态窗口
    modal.style.display = 'block';
});
