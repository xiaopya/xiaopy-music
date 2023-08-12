import React from 'react';
import classNames from 'classnames';
import { Popconfirm } from '@arco-design/web-react';
import styles from './home.less';
import { distinguishTime } from '@/utils';
import useTypewriter from 'react-typewriter-hook';
import { cloudsearchLists } from '@/servers';
import { HOME_CONTENTS } from '@/constants';

/**
 * 首页
 * @constructor
 */
export default function Home() {
    const writer = useTypewriter(HOME_CONTENTS.WRITER_TEXT)

    const props = {
        title: '要听这首 {Ephemeral Memories} 歌吗',
        defaultPopupVisible: true,
        icon: '🥱🥱',
        okText: '听',
        cancelText: '不听不听',
        onOk: async () => {
            cloudsearchLists({keywords: 'Ephemeral Memories',});
        },
        onCancel: () => {

        },
    };
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
                {"{"}<span>{writer}</span>{"}"}
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
                                    {"{"}{timeText}{" O.o }"}&nbsp;&nbsp;&nbsp;{content}{time === 2 && (
                                    <Popconfirm position='bl' {...props}>
                                        如何?
                                    </Popconfirm>
                                )}
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
