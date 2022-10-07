import React, { useMemo, useCallback } from "react";
import Tour from "components/tour/Tour";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRecoilState } from "recoil";
import { favoritesAtom } from "recoil/atoms";
import GridWrapper from "ui/grid-wrapper/GridWrapper";
import FlexWrapper from "ui/flex-wrapper/FlexWrapper";
import Button from "ui/button/Button";
import Text from "ui/text/Text";
import TourRemoveButtons from "components/tour/components/TourRemoveButtons";

const FavoriteCarousel: React.FC = () => {
    const [favoriteTours, setFavoriteTours] = useRecoilState(favoritesAtom)

    const tourSlides = useMemo(() => favoriteTours.map(tour => (
        <Tour tour={tour} key={tour.id}>
            <TourRemoveButtons tour={tour} />
        </Tour>
    )), [favoriteTours])

    const clearAll = useCallback(() => {
        setFavoriteTours([])
    }, [setFavoriteTours])

    return (
        <FlexWrapper
            width="100%"
            direction="column"
            gap="40px"
            margin="40px 0 0 0"
        >
            <FlexWrapper
                width="95%"
                justify="end"
            >
                <Button 
                    background="white"
                    onClick={clearAll}
                >
                    <Text
                        weight={300}
                        size="16px"
                        color="#556B84"
                    >
                        Clear all
                    </Text>
                </Button>
            </FlexWrapper>
            <GridWrapper width="95%">
                {tourSlides}
            </GridWrapper>
        </FlexWrapper>
    )
}

export default FavoriteCarousel