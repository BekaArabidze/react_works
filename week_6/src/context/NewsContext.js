import { createContext, useContext, useEffect, useState } from "react";


const NewsContext = createContext()


const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([])
    const [query, setQuery] = useState("vue")
    const [page, setPage] = useState(49)


    const fetchNews = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setNews(data.hits)
        console.log(data);
    }

    useEffect(() => {
        fetchNews(`http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
    }, [query,page])


    const handleInput = (query) => {
        setQuery(query)
    }

    const handlePageChange = (NBPage) => {
        if (NBPage == 'prev' &&  page - 1 >= 0) {
            setPage(prev => prev - 1)
        }

        if (NBPage == 'next'  &&  page + 1 <= 50) {
            setPage(prev => prev + 1)
        }
    }


    const value = { news, query, handleInput,handlePageChange }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

export const GlobalContext = () => {
    return useContext(NewsContext)
}

export { NewsContext, NewsProvider }