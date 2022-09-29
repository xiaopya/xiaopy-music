/**
 * 区分时间
 */
export function distinguishTime() {
    let date = new Date();
    if (date.getHours() >= 6 && date.getHours() < 12) {
        return 1; // 早
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        return 2; // 中
    } else {
        return 3; // 晚
    }
}

/**
 * 随机生成16进制颜色
 * @returns
 */
export function randomColor() {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    while (color.length < 6) {
        color = '0' + color;
    }
    return '#' + color;
}


/**
 * 监听浏览器窗口切换
 */
export function visibilitychangeHandler() {
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') { // 状态判断：显示（切换到当前页面）
            document.title = '欢迎回来🎉'
        } else if (document.visibilityState === 'hidden') { // 状态判断：隐藏（离开当前页面）
            document.title = '需要重新激活哟😘'
        }
    })
}