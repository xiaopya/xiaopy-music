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