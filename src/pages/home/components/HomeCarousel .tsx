import React, { useState, useEffect, useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper';
import FlexWrapper from "ui/flex-wrapper/FlexWrapper";
import Text from "ui/text/Text";
import { useQuery } from "@apollo/client";
import { LOAD_TOURS } from 'graphql/queries';
import ITour from "interfaces/tour";
import Tour from "components/tour/Tour";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TourAddButtons from "components/tour/components/TourAddButtons";
import GraySquare from "ui/grey-square/GraySquare";

const HomeCarousel: React.FC = () => {
    const [toursToRender, setToursToRender] = useState<ITour[]>([])
    const { data } = useQuery(LOAD_TOURS);
    const navigationPrevRef = useRef<HTMLButtonElement>(null);
    const navigationNextRef = useRef<HTMLButtonElement>(null);
  
    useEffect(() => {
      if (data) {
        const dataToRender = (data.histories as ITour[]).filter(flight =>
          flight.flight &&
          flight.flight.links.flickr_images.length > 0
        );
        setToursToRender(dataToRender)
      }
    }, [data])
  
    const tourSlides = useMemo(() => toursToRender.map(tour => (
        <SwiperSlide key={tour.id}>
            <Tour tour={tour}>
                <TourAddButtons tour={tour} />
            </Tour>
        </SwiperSlide>
    )), [toursToRender])

    return (
        <>
            <FlexWrapper
                margin="50px 0 30px 0"
                justify="space-between"
                width="95%"
            >
                <Text
                    fontFamily="Syne"
                    weight={800}
                    size="30px"
                    color="#1E1E1E"
                >
                    POPULAR TOURS
                </Text>
                <FlexWrapper gap="20px">
                    <button ref={navigationPrevRef}>
                        <GraySquare imageLink={process.env.PUBLIC_URL + "/images/arrowBack.svg"} />
                    </button>
                    <button ref={navigationNextRef}>
                        <GraySquare imageLink={process.env.PUBLIC_URL + "/images/arrowForward.svg"} />
                    </button>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper
                width="95%"
                margin="0 0 20px 0"
            >
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    watchSlidesProgress={true}
                >
                    {tourSlides}
                </Swiper>
            </FlexWrapper>
        </>
    )
}

export default HomeCarousel