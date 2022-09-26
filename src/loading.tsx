import * as React from 'react';
import LoadingSvg from '@/images/loading.svg'

/**
 * 懒加载动画
 * @constructor
 */
export default function LinearIndeterminate() {
    return (
        <div style={{
            textAlign: 'center',
            paddingTop: '300px',
        }}>
            <img src={LoadingSvg}/>
        </div>
    );
}
