import React, { useEffect, useState } from 'react'


export default  function Scrape(){
    const [scrapeData, setScrapeData] = useState("")
    function fetchScrape() {
        fetch("http://localhost:8080/jpareststarter/api/scrape/parallel")
            .then(res => res.json())
            .then(data => {
                setScrapeData(data)
            })
    }
    useEffect(() => {
        fetchScrape()
    }, [])

    return (
        <div>
            <h2>Scrape</h2>
            <p>{scrapeData.title}</p>
            <p>{scrapeData.timeSpent}</p>
            <table>
                {scrapeData.tags && scrapeData.tags.map((element) => (
                    <tbody key={element.url}>
                        <br></br>
                        <tr>                          
                            <td>{element.url}</td>
                        </tr>
                        <tr>
                            <p>divCount:</p>
                            <td>{element.divCount}</td>
                        </tr>
                        <tr>
                            <p>bodyCount:</p>
                            <td>{element.bodyCount}</td>
                            
                        </tr>
                        <br></br>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

