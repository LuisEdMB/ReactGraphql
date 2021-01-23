import React from 'react'
import { useQuery } from '@apollo/client'
import * as EpisodeQueries from '../services/graphql/rick_and_morty/queries/EpisodeQueries'
import { ApiGraphqlEnum } from '../enums/ApiGraphqlEnum'

export const EpisodeList = _ => {
    const { loading, error, data } = useQuery(EpisodeQueries.GET_ALL_EPISODES, { context: { apiGraphql: ApiGraphqlEnum.RICK_AND_MORTY } })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.episodes.results.map(episode => 
                        <EpisodeItem key = { episode.id } { ...episode } />)
                }
            </tbody>
        </table>
    )
}

const EpisodeItem = props => (
    <tr key = { props.id }>
        <td>{props.name}</td>
    </tr>
)