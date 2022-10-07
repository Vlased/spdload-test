export default interface ITour {
    flight: {
        links: {
            flickr_images: string[],
            __typename: string,
        }
        mission_name: string,
        __typename: string,
    }
    id: string,
    title: string,
}