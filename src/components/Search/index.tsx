import React from "react"
import "./autocomplete.css"
import { getAlgoliaResults } from "@algolia/autocomplete-js"
import algoliasearch from "algoliasearch"
import { Autocomplete } from "./Autocomplete"
import { SearchResult } from "./SearchResult"
import "@algolia/autocomplete-theme-classic"

const appId = process.env.GATSBY_SEARCH_APP_ID
const apiKey = process.env.GATSBY_SEARCH_API_KEY
const searchClient = algoliasearch(appId, apiKey)
function App() {
  return (
    <div className="root">
      <Autocomplete
        placeholder="Search for any food"
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "products",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "ff_index",
                    query,
                  },
                ],
              })
            },
            templates: {
              item({ item, components }) {
                return <SearchResult hit={item} components={components} />
              },
            },
          },
        ]}
      />
    </div>
  )
}

export default App
