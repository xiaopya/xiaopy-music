import React, {useEffect} from 'react';
import './snake.less'

const Snake = () => {

    const player = [
        [1, 1]
    ]

    useEffect(() => {
        const rows = 20;
        const cols = 20;
        const size = 20;
        const snake = document.getElementById('snake');
        const result = [];

        // 更新做标
        const updatePlayer = () => {
            document.querySelectorAll('.player').forEach(v => v.classList.remove('player'));
            player.forEach(v => {
                document.querySelector(`[data-v="${v?.join("-")}"]`)?.classList.add('player');
            })
        }

        let key = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const isEat = Math.random() > 0.9
                result.push(`<div data-v="${i}-${j}" class="item ${isEat ? 'eat' : ''}" style="width:${size}px;height: ${size}px"></div>`)
            }

        }
        if (snake) {
            snake.innerHTML = result.join("")
            snake.style.width = `${cols * size}px`
        }

        document.addEventListener('keydown', e => {
            key = e.key;
        })

        const intervalId = setInterval(() => {
            if (key) {
                const needPos = JSON.parse(JSON.stringify(player.slice(0, player.length - 1)));
                switch (key) {
                    case 'w':
                        player[0][0] -= 1;
                        break;
                    case 'a':
                        player[0][1] -= 1;
                        break;
                    case 's':
                        player[0][0] += 1;
                        break;
                    case 'd':
                        player[0][1] += 1;
                        break;
                }
                const el = document.querySelector(`[data-v="${player[0].join('-')}"]`);
                if (!el) {
                    clearInterval(intervalId);
                    alert("撞墙了");
                } else {
                    for (let i = 0; i < player.length; i++) {
                        player[i] = needPos[i - 1];
                    }
                    if (el.className.indexOf('eat') >= 0) {
                        el.classList.remove('eat'); // 吃掉食物
                        player.push([...player[0]]);
                    }
                    updatePlayer();
                }
            }
        }, 100)
        updatePlayer()


    }, [player])
    return (
        <div id="snake"/>
    )
}

export default Snake;