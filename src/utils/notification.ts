import {Notification} from '@arco-design/web-react';

export function promptSuccess(s: string) {
    Notification.success({
        title: s,
        content: "",
    })
}

export function promptError(s: string) {
    Notification.error({
        title: s,
        content: "",
    })
}

export function promptInfo(s: string) {
    Notification.info({
        title: s,
        content: "",
    })
}