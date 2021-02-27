import { gql} from '@apollo/client'

const FIND_ALL_COUNTRIES = gql`

 query {
     Country{
        name
        nativeName
        alpha2Code
        alpha3Code
        area
        population
        populationDensity
        capital
        demonym
        gini,
        officialLanguages {
        iso639_1
        iso639_2
        name
        nativeName
        },
        currencies {
        name
        symbol
        }
        flag {
        emoji
        emojiUnicode
        svgFile
        }
     }
 }

`;
const FIND_ONE_CLIENT = gql`

    query getByAlphaCodeClient {
      Country(alpha2Code: $filter)
      {
        name
        nativeName
        alpha2Code
        alpha3Code
        area 
      }
    }

 `
const FIND_ONE_TO_ONE = gql`
  query getByAlphacode($filter: String) {
    Country(alpha2Code: $filter)
    {
        name
        nativeName
        alpha2Code
        alpha3Code
        capital
        population
        area,
        flag {
        emoji
        emojiUnicode
        svgFile
        },
        officialLanguages {
        iso639_1
        iso639_2
        name
        nativeName
        },
        currencies {
        name
        symbol
        }
        topLevelDomains {
          name
        }  
    }
  }
`

export {
    FIND_ALL_COUNTRIES,
    FIND_ONE_TO_ONE,
    FIND_ONE_CLIENT
}