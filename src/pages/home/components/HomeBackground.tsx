import React, { useRef, useCallback, useMemo, useEffect } from 'react'
import { A11y, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper'
import Image from 'ui/image/Image'
import 'swiper/css';
import 'swiper/css/autoplay';
import Button from 'ui/button/Button'

interface HomeBackgroundProps {
    downRef: React.RefObject<HTMLDivElement>
}

const HomeBackground: React.FC<HomeBackgroundProps> = (props) => {
    const navigationNextRef = useRef<HTMLDivElement>(null);

    const scrollDown = useCallback(() => {
        const { downRef } = props;
        if(downRef.current){
            downRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if(navigationNextRef.current){
                navigationNextRef.current.click();
            }
        }, 4000);
        return () => clearInterval(interval);
      }, []);

    const homeSlides = useMemo(() => {
        const result = [];
        for(let i = 1; i < 4; i++){
            let imageLink = process.env.PUBLIC_URL + `/images/homeImage${i}.png`
            result.push(
                <SwiperSlide key={imageLink}>
                    <Image 
                        width="100%" 
                        height="100%" 
                        objectFit="cover"
                        src={imageLink}
                    />
                </SwiperSlide>
            )
        }
        return result;
    }, [])

    return (
        <>
            <FlexWrapper
                width="100%"
            >
                <Swiper
                    modules={[Navigation, A11y]}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    speed={1100}
                    watchSlidesProgress={true}
                    loop={true}
                >
                    {homeSlides}
                </Swiper>
                <div ref={navigationNextRef}></div>
            </FlexWrapper>
            <Button
                background="transparent"
                width="231px"
                height="42px"
                margin="-80px 0 100px 0"
                zIndex="50"
                onClick={scrollDown}
            >
                <Image
                    width="100%"
                    height="100%"
                    src={process.env.PUBLIC_URL + "/images/exploreTours.png"}
                />
            </Button>
        </>
    )
}

export default HomeBackground
