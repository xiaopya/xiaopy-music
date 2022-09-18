import * as React from 'react';
import Box from '@mui/material/Box';
import useTypewriter from "react-typewriter-hook";

/**
 * 路由懒加载
 * @constructor
 */
export default function LinearIndeterminate() {
    const text = useTypewriter("...");
    return (
        <Box sx={{ width: '100%' }}>
            <div style={{
                textAlign: 'center',
                marginTop: '300px',
            }}>
                loading{text}
            </div>
        </Box>
    );
}
