import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import ReactCascaderChecker from '@/components/CascaderMui'
import {options} from './options'

export default function () {

    const [state, setState] = useState();

    useEffect(() => {
        setTimeout(() => {
            setState(options)
        })
    }, [])

    const onChange = (val) => {
        console.log(val)
    }

    return (
        <div className={classNames({
            "mainPadding": true,
        })}>
            <div style={{
                margin: '0 auto',
                width: '540px',
            }}>
                <ReactCascaderChecker
                    options={state}
                    placeholder="请选择"
                    onChange={onChange}
                />
            </div>
        </div>
    )
}