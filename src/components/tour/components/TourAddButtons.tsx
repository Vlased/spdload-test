import React, { useCallback } from 'react'
import BlueButton from 'components/blue-button/BlueButton'
import { useRecoilState } from 'recoil'
import { favoritesAtom } from 'recoil/atoms'
import Button from 'ui/button/Button'
import FlexWrapper from 'ui/flex-wrapper/FlexWrapper'
import ITour from 'interfaces/tour'
import GraySquare from 'ui/grey-square/GraySquare'

const TourAddButtons: React.FC<{ tour: ITour }> = (props) => {
    const [favoriteTours, setFavoriteTours] = useRecoilState(favoritesAtom);

    const changeFavorites = useCallback(() => {
        const { tour } = props;
        if (favoriteTours.every(favoriteTour => favoriteTour.id !== tour.id)) {
            setFavoriteTours(prevTours => [...prevTours, props.tour])
        }
    }, [props, favoriteTours, setFavoriteTours])

    const getImageLink = useCallback(() => {
        const { tour } = props;
        return favoriteTours.some(favoriteTour => favoriteTour.id === tour.id) ?
            process.env.PUBLIC_URL + "/images/whiteHeart.svg" :
            process.env.PUBLIC_URL + "/images/blackHeart.svg";
    }, [props, favoriteTours])

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
                <GraySquare 
                    imageLink={getImageLink()} 
                    isPink={favoriteTours.some(favoriteTour => favoriteTour.id === props.tour.id)}
                />
            </Button>
        </FlexWrapper>
    )
}

export default TourAddButtons