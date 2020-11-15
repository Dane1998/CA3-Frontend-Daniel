const URLs = {
    "Home": "/",
    "Login": "/login",
    "Joke": "/joke",
    "Scrape": "/scrape",
    
}

function URLSettings() {
    const getURL = (key) => { return URLs[key] }

    return {
        getURL
    }
}
export default URLSettings();


