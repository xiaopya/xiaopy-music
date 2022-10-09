import {Carousel} from '@arco-design/web-react';

function CarouselUi({imageSrc = []}) {
    return (
        <Carousel
            autoPlay
            animation='card'
            showArrow='never'
            indicatorPosition='outer'
            style={{width: '100%', height: 240}}
        >
            {imageSrc.map((src, index) => (
                <div
                    key={index}
                    style={{width: '60%'}}
                >
                    <img
                        src={src.imageUrl}
                        style={{width: '100%'}}
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default CarouselUi;
