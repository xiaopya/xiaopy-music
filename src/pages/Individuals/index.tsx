import React from 'react';
import classNames from "classnames";
import Snake from '@/components/Snake'

/**
 * 个人
 */
export default function () {
    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            <Snake/>
        </div>
    )
}