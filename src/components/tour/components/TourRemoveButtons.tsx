import React, { useCallback } from 'react'
import ITour from 'interfaces/tour'
import { useRecoilState } from 'recoil';
import { favoritesAtom } from 'recoil/atoms';
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper';
import BlueButton from 'ui/blue-button/BlueButton';
import Button from 'ui/button/Button';
import GraySquare from 'ui/grey-square/GraySquare';

const TourRemoveButtons: React.FC<{ tour: ITour }> = (props) => {
    const [favoriteTours, setFavoriteTours] = useRecoilState(favoritesAtom);

    const changeFavorites = useCallback(() => {
        const { tour } = props;
        const newFavorites = favoriteTours.filter(favoriteTour => favoriteTour.id !== tour.id);
        setFavoriteTours(newFavorites);
    }, [props, favoriteTours, setFavoriteTours])

    return (
        <FlexWrapper
            width="90%"
            justify="space-between"
            gap="10px"
            margin="20px 0 0 0"
        >
            <BlueButton
                text="BUY"
                width="calc(100% - 63px)"
            />
            <Button onClick={changeFavorites}>
                <GraySquare imageLink={process.env.PUBLIC_URL + "/images/trash.svg"} />
            </Button>
        </FlexWrapper>
    )
}

export default TourRemoveButtons