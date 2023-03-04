import {Drawer} from '@arco-design/web-react';
import Loading from '@/loading';
import './drawerui.less';
import classNames from "classnames";

export function DrawerUi({visible, content, footer = null, onCancel, onOk, title = '', width = "30%"}) {

    return (
        <Drawer
            className={classNames({
                drawerUiPy: true,
            })}
            width={width}
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
            footer={footer}
        >
            {!!content ? content : <Loading/>}
        </Drawer>

    );
}
