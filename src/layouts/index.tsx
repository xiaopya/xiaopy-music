import * as React from 'react';
import {history, Outlet, useAppData, useLocation} from 'umi';
import './index.less';
import classNames from "classnames";
import SwitchUi from '@/components/Switch';
import MusicPlayer from '@/components/MusicPlayer';

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
            <div className="headerMenu">
                <div className="navs">
                    <div className="logo" onClick={clickLogoHandler}>
                        {"{"}<span>xiaopy</span>{"}"}
                    </div>
                    <div className="navMain">
                        <div className="navLink">
                            {Object.values(routes)?.filter((val) => !val?.isLayout).map((action: any) => (
                                <span
                                    className={classNames({
                                        'nav-link': true,
                                        'active': action.path === pathname ? true : false,
                                        'apply-shake': action.path === pathname ? true : false
                                    })}
                                    onClick={() => {
                                        history.push(action.path)
                                    }}
                                    key={action.id}
                                >
                                {action.name}
                            </span>
                            ))}
                        </div>
                        <SwitchUi/>
                    </div>
                </div>
            </div>
            <MusicPlayer/>
            <Outlet/>
        </div>
    );
}

