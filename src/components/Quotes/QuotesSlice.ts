import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface Quote {
    id: number,
    quote: string,
    author: string
}

interface QuotesAPIResponse {
    quotes: Quote[],
    total: number,
    skip: number,
    limit: number
}

export const QuotesSlice = createApi({
    reducerPath:"quotesApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/quotes"}),
    tagTypes: ["Quotes"],
    endpoints: build => ({
        getQuotes: build.query<QuotesAPIResponse, number>({
            query: (limit = 10) => `?limit=${limit}`,
            providesTags: (result, error, id) => [{type:"Quotes", id}],
        }),
    }),
})

export const { useGetQuotesQuery } = QuotesSlice