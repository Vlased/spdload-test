import { gql } from "@apollo/client";

export const LOAD_TOURS = gql`
{
    histories {
        flight {
            links {
                flickr_images
            }
            mission_name
        }
        id
        title
    }
}
`