import * as React from 'react';
import {Outlet, Link, useAppData, useLocation} from 'umi';
import styles from './index.less';

export default function SpeedDialTooltipOpen() {
    const {routes} = useAppData();
    const {pathname} = useLocation();
    console.log('pathname', pathname)
    return (
        <div>
            <div className={styles.headerMenu}>
                <div className={styles.navs}>
                    <div className={styles.logo}>
                        {"{"}<span>xiaopy</span>{"}"}
                    </div>
                    <div className={styles.navLink}>
                        {Object.values(routes)?.filter(val => !val?.isLayout).map((action) => (
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

