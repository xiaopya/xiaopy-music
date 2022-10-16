import {Switch} from '@arco-design/web-react';
import Taiyang from '@/static/taiyang'
import Yueliang from '@/static/yueliang'
import {changeTheme} from '@/utils'
import {useState} from "react";
import {localCache} from '@/utils/loaclStorage'


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


const SwitchUi = () => {

    const theme = localCache.getItem('theme');

    const [state] = useState<boolean>(isTheme(theme));

    const changeHandler = (check: boolean) => {
        changeTheme()
    }

    return <Switch defaultChecked={state} onChange={changeHandler} size="small" checkedIcon={<Yueliang/>}
                   uncheckedIcon={<Taiyang/>}/>;
};

export default SwitchUi;
