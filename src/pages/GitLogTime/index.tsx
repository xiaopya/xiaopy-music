import React from 'react'
import classNames from "classnames";
import TimeLineUi from '@/components/TimeLine'

const GitLogTime = () => {

    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            <TimeLineUi/>
        </div>
    )
}

export default GitLogTime;