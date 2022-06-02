import React from 'react'
import { GlobalContext } from '../context/NewsContext'
import "./News.scss"

const News = () => {
    const { news } = GlobalContext()

    return (
        <>
            <div className="container">
                {news.map((el, _) => (
                    <div className="" key={el.objectID}>
                        <div className="">
                            <h1>{el.author}</h1>
                        </div>
                        <div className="">
                            <h1>{el.title}</h1>
                        </div>

                        <div className="">
                            <a target="_blank" href={el.url}>{el.url}</a>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default News