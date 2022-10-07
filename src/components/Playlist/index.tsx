import React, {memo} from 'react';
import {Grid, Image} from '@arco-design/web-react';

const Row = Grid.Row;
const Col = Grid.Col;

const PlaylistUi = memo(({list}) => {
    console.log(list, 'list')
    return (
        <div>
            <Row className='grid-gutter-demo'>
                {
                    list.map(listval => (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}>
                            <div style={{
                                padding: '10px',
                                overflow: 'hidden',
                            }}>
                                <Image
                                    width={150}
                                    style={{
                                        borderRadius: '6px',
                                    }}
                                    src={listval.picUrl}
                                    title={listval.name}
                                    // description={description}
                                    footerPosition='outer'
                                    alt='lamp'
                                />
                            </div>
                        </div>
                    ))
                }
            </Row>
        </div>
    )
})

export default PlaylistUi;