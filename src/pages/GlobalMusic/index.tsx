import React, {useEffect, useRef, useState} from 'react'
import { Input } from '@arco-design/web-react';
import classNames from "classnames";
import { searchLists } from '@/servers';
import RList from '@/components/List';
import _ from 'lodash';
import styles from './globalMusic.less';

const GlobalMusic = () => {
    const inputRef = useRef();
    const [state,setState] = useState({
        focus: false,
        list: [],
    });

    const handlerOnChange = (e: any) => {
        console.log(e.target.value);

    }

    // 快捷键自动获取焦点
    const handlerOnKeyDown = (e: any) => {
        const keyCode = e.keyCode || e.which || e.charCode;
        const ctrlKey = e.ctrlKey ;
        if(ctrlKey && keyCode == 32) {
            inputRef?.current?.focus();
        }
    }


    useEffect(() => {
        // 添加全局事件
        window.addEventListener('keydown', handlerOnKeyDown);
        return () => {
            // 销毁
            window.removeEventListener('keydown', handlerOnKeyDown);
        };
    }, []);

    return (
        <div className={classNames([styles.search_main])}>
            <div className={classNames([styles.input_music])}>
                <input ref={inputRef} style={{ width: 350 }} onChange={_.debounce(handlerOnChange, 250, { 'maxWait': 1000 })}  placeholder='🏀+空格 输入你喜欢的歌曲' />
            </div>
            {state.list?.length && <RList/> }
        </div>
    )
}

export default GlobalMusic;