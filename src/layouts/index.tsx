import * as React from 'react';
import {history, Outlet, useAppData, useLocation} from 'umi';
import './index.less';
import classNames from "classnames";
import SwitchUi from '@/components/Switch'

/**
 * 路由菜单
 * @constructor
 */
export default function SpeedDialTooltipOpen() {
    const {routes} = useAppData();
    const {pathname} = useLocation();

    const clickLogoHandler = () => {
        history.push('/music')
    }

    return (
        <div>
            <div className={classNames({
                headerMenu: true,
            })}>
                <div className={classNames({
                    navs: true,
                })}>
                    <div className={classNames({
                        logo: true,
                    })} onClick={clickLogoHandler}>
                        {"{"}<span>xiaopy</span>{"}"}
                    </div>
                    <div className={classNames({
                        navLink: true,
                    })}>
                        {Object.values(routes)?.filter((val) => !val?.isLayout).map((action: any) => (
                            <span
                                className={classNames({
                                    'nav-link': true,
                                    'active': action.path === pathname ? true : false,
                                })}
                                onClick={() => {
                                    history.push(action.path)
                                }}
                                key={action.id}
                            >
                                {action.name}
                            </span>
                        ))}
                        <SwitchUi/>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

