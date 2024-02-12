import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  

    export const spotifyApi = createApi({
        reducerPath: 'spotifyApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '19ef7ec4a2msh078bcd16e3524bfp1faafbjsn6940abea44c9');
                return headers;
            }
        }),
        endpoints: (builder) => ({
            getAlbumTracks: builder.query({ query: () => '/charts/track?' + new URLSearchParams({
                locale: 'en-US',
                // listId: 'ip-country-chart-IN',
                pageSize: '20',
                startFrom: '0',
            })}),
            getSongsByGenre : builder.query({query: (genre) => `charts/list/countries[14]/genres?name=${genre}`}),
            getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
            getSongsByCountry: builder.query({query: () => `/charts/track?` + new URLSearchParams({
                locale: 'en-US',
                listId: 'ip-city-chart-1275339',
                pageSize: '40',
                startFrom: '36',
            })}),
            getTopCharts: builder.query({query: () => `/charts/track?` + new URLSearchParams({
                locale: 'en-US',
                listId: 'ip-city-chart-1275339',
                pageSize: '20',
                startFrom: '16',
            })}),
            getTopArtists: builder.query({query: () => `/charts/track?` + new URLSearchParams({
                locale: 'en-US',
                listId: 'ip-country-chart-IN',
                pageSize: '60',
                startFrom: '17',
            })}),
            getSongsBySearch: builder.query({query: (searchTerm) => `/search?term=${searchTerm}`}),
        }),
    });

    export const{
        useGetAlbumTracksQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongsByCountryQuery,
        useGetTopChartsQuery,
        useGetTopArtistsQuery,
        useGetSongsBySearchQuery,
    } = spotifyApi;

    