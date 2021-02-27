import { ApolloClient, InMemoryCache,makeVar } from '@apollo/client';

export const mycountries = makeVar([])
const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache({
    
    typePolicies: {
      Country: {
        fields: {
          name: {
            read(name) {
              return name.toLowerCase() 
            },
            read(name) {
               if(name === 'Brazil'){
                return 'Brasil melhor pais do mundo'
               }else {
                 return name
               }
               
            }
          }
        }
      }
    }
  })
});

export default client;