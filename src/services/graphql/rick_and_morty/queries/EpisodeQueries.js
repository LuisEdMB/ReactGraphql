import { gql } from '@apollo/client'

export const GET_ALL_EPISODES = gql`
    query GetAllEpisodes {
        episodes {
            results {
                id
                name
            }
        }
    }
`