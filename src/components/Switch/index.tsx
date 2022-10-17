import {changeTheme} from '@/utils'
import {localCache} from '@/utils/loaclStorage'
import React, {useState} from "react";
import './switch.less'

interface checkType {
    target: { checked: boolean | ((prevState: boolean) => boolean); };
}

function isTheme(key: string) {
    let is = false;
    switch (key) {
        case 'dark':
            is = true;
            break;
        case 'light':
            is = false;
            break;
        default:
            is = false;
            break;
    }
    return is;
}

export default function () {

    const theme = localCache.getItem('theme') as string;

    const [checked, setChecked] = useState<boolean>(!isTheme(theme));
    console.log(isTheme(theme), 'sTheme(theme)')

    const clickHandler = (val: checkType) => {
        setChecked(val.target.checked);
        changeTheme();
    }

    return (
        <label className="switch">
            <input type="checkbox" checked={checked} onChange={clickHandler}/>
            <span className="slider"></span>
        </label>
    )
}
