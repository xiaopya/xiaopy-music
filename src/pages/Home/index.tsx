import React from 'react'
import classNames from 'classnames'
import styles from './home.less'
import { distinguishTime } from '@/utils'
import useTypewriter from 'react-typewriter-hook'
import { HOME_CONTENTS } from '@/constants'

/**
 * 首页
 * @constructor
 */
export default function Home() {
    const writer = useTypewriter(HOME_CONTENTS.WRITER_TEXT)

    return (
        <div
            className={classNames({
                [styles.xiaopyHome]: true,
                xiaopy: true,
                mainPadding: false
            })}
        >
            <div
                className={classNames({
                    [styles.pyCard]: true
                })}
            >
                [<span>{writer}</span>]
                {HOME_CONTENTS.TIME_TEXT.map(({ time, timeText, content }) => {
                    if (time === distinguishTime()) {
                        return (
                            <div
                                key={time}
                                className={classNames({
                                    [styles.text]: true
                                })}
                            >
                                <p>
                                    [{timeText}]&nbsp;&nbsp;&nbsp;{content}
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
