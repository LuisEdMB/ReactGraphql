import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { ApiGraphqlEnum } from '../../enums/ApiGraphqlEnum'
import * as Config from '../../Config'

const customUri = (options) => {
    const apiGraphql = options.getContext().apiGraphql
    switch (apiGraphql) {
        case ApiGraphqlEnum.RICK_AND_MORTY:
            return Config.GRAPHQL_RICK_AND_MORTY
        default:
            console.log("URI Api don't found.")
            return '' //Show alert error or use errorHandle
    }
}

const link = createHttpLink({ uri: customUri })

export const clientGraphql = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})