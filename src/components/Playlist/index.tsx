import React, {memo, useEffect, useState} from 'react';
import {Grid, Image} from '@arco-design/web-react';
import Flippy, {BackSide, FrontSide} from 'react-flippy';
import './playlist.less'

const Row = Grid.Row;


const PlaylistUi = memo(({list, palyRef, reverseHideHandler}) => {

    const [state, setState] = useState({
        playListId: undefined,
    });

    useEffect(() => {

        console.log(state, 'useEffect')

    }, [state.playListId])

    return (
        <div>
            <Flippy
                flipOnHover={false}
                flipOnClick={false}
                flipDirection="vertical"
                ref={palyRef}
            >
                <FrontSide>
                    <Row className='grid-gutter-demo'>
                        {
                            list.map((listval) => (
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                }}
                                     key={listval.id}

                                     onClick={() => {
                                         palyRef.current.toggle();
                                         reverseHideHandler()
                                         setState((s) => ({...s, playListId: listval.id,}))
                                     }}
                                >
                                    <div style={{
                                        padding: '10px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                    }}>
                                        <Image
                                            width={150}
                                            style={{
                                                borderRadius: '6px',
                                            }}
                                            preview={false}
                                            src={listval.picUrl}
                                            title={listval.name}
                                            footerPosition='outer'
                                            alt='lamp'
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </Row>
                </FrontSide>
                <BackSide style={{backgroundColor: '#175852'}}>
                    ROCKS
                </BackSide>
            </Flippy>
        </div>
    )
})

export default PlaylistUi;