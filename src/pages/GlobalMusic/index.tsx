import React, { useState } from 'react'
import { Input } from '@arco-design/web-react';
import classNames from "classnames";
import styles from './globalMusic.less';

const GitLogTime = () => {
    const [state,setState] = useState({
        focus: false,
    });

    const handlerOnFocus = () => {
        console.log(11);
    }

    return (
        <div className={classNames([styles.input_music])}>
             <input style={{ width: 350 }} onFocus={handlerOnFocus}  placeholder='输入你喜欢的歌曲' />
        </div>
    )
}

export default GitLogTime;