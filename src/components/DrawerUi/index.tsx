import {Drawer} from '@arco-design/web-react';

export function DrawerUi({visible, content, footer = null, onCancel, onOk, title = '', width = 500}) {
    return (
        <Drawer
            width={width}
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            footer={footer}
        >
            {content}
        </Drawer>
    );
}
