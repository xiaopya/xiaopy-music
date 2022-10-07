import {Notification} from '@arco-design/web-react';
import qs from 'qs';

export function promptSuccess(s: unknown) {
    Notification.error({
        title: 'success',
        content: qs.stringify(s),
    })
}

export function promptError(s: unknown) {
    Notification.error({
        title: 'error',
        content: qs.stringify(s),
    })
}

export function promptInfo(s: unknown) {
    Notification.error({
        title: 'info',
        content: qs.stringify(s),
    })
}