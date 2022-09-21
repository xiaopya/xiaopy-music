import * as React from 'react';
import Box from '@mui/material/Box';
import LoadingSvg from '@/images/loading.svg'

/**
 * 懒加载动画
 * @constructor
 */
export default function LinearIndeterminate() {
    return (
        <Box sx={{width: '100%', height: '100vh',}}>
            <div style={{
                textAlign: 'center',
                paddingTop: '300px',
            }}>
                <img src={LoadingSvg}/>
            </div>
        </Box>
    );
}
