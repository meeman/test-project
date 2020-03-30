import gql from 'graphql-tag'

const USER_QUERY = gql`
query {
    histories {
        id
        title
        details
    }
}
`

export default USER_QUERY;