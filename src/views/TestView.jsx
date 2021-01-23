import React from 'react'
import { CharacterList } from '../components/CharacterList'
import { EpisodeList } from '../components/EpisodeList'

export const TestView = _ => (
    <div>
        <CharacterList />
        <br/>
        <EpisodeList />
    </div>
)