import React from 'react';
import {Timeline} from '@arco-design/web-react';
import timeOptions from './time.json'
import {randomColor} from '@/utils'
import classNames from "classnames";

const TimelineItem = Timeline.Item;

function TimeLineUi() {
    return (
        <div className={classNames({
            'mainPadding': true,
        })}>
            <Timeline mode="alternate" labelPosition="same">
                {
                    timeOptions.map(v => (
                        <TimelineItem key={v.time} label={v.time} dotColor={randomColor()}>
                            {v.title}
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    );
}

export default TimeLineUi;
