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