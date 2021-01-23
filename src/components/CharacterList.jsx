import React from 'react'
import { useQuery } from '@apollo/client'
import * as CharacterQueries from '../services/graphql/rick_and_morty/queries/CharacterQueries'
import { ApiGraphqlEnum } from '../enums/ApiGraphqlEnum'

export const CharacterList = _ => {
    const { loading, error, data } = useQuery(CharacterQueries.GET_ALL_CHARACTERS, { context: { apiGraphql: ApiGraphqlEnum.RICK_AND_MORTY } })

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
                    data.characters.results.map(character => 
                        <CharacterItem key = { character.id } { ...character } />)
                }
            </tbody>
        </table>
    )
}

const CharacterItem = props => (
    <tr key = { props.id }>
        <td>{props.name}</td>
    </tr>
)