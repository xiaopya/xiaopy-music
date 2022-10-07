import * as React from 'react';
import {history, Link, Outlet, useAppData, useLocation} from 'umi';
import styles from './index.less';

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
            <div className={styles.headerMenu}>
                <div className={styles.navs}>
                    <div className={styles.logo} onClick={clickLogoHandler}>
                        {"{"}<span>xiaopy</span>{"}"}
                    </div>
                    <div className={styles.navLink}>
                        {Object.values(routes)?.filter((val) => !val?.isLayout).map((action: any) => (
                            <Link
                                style={{
                                    display: 'inline-block',
                                    padding: '10px 10px',
                                    textDecoration: action.path === pathname ? 'line-through' : '',
                                }}
                                to={action.path}
                                key={action.id}
                            >
                                {action.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

