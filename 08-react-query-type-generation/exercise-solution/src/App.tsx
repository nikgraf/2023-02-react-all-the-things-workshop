import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { graphql } from "./gql/gql";

const allFilmsQueryDocument = graphql(/* GraphQL */ `
  query allFilms($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          id
          title
          releaseDate
        }
      }
    }
  }
`);

function App() {
  const { data } = useQuery(["films"], async () =>
    request(
      "https://swapi-graphql.netlify.app/.netlify/functions/index",
      allFilmsQueryDocument,
      {
        first: 10,
      }
    )
  );

  return (
    <div className="App">
      {data && (
        <ul>
          {data.allFilms?.edges?.map(
            (edge) =>
              edge?.node && (
                <div key={`film-${edge.node.id}`}>
                  <h3>{edge.node.title}</h3>
                  <p>{edge.node.releaseDate}</p>
                </div>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
