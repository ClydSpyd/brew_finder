import axios from "axios"

const base_url = "https://api.punkapi.com/v2/beers"

const checkLimit = ( remaining ) =>{ 
    console.log(`ratelimit-remaining: ${remaining}`)
    return remaining > 0
}

const limitResponse = { error: "Rate limit reached" }
const emptyResponse = { empty: true }

export const getRandomBeer = async () => {
    try {

        const { data, headers } = await axios.get(`${base_url}/random`)
        
        return checkLimit(headers["x-ratelimit-remaining"]) ? data[0] : limitResponse
        
    } catch (error) {
        
        return { error: error.message }
    }
}

export const getRandomNonAlcoholic = async () => {
    
    try {

        const { data, headers } = await axios.get(`${base_url}?abv_lt=0.6&per_page=80`)
        const randomBeer = data[Math.floor(Math.random() * data.length)]
        
        return checkLimit(headers["x-ratelimit-remaining"]) ? randomBeer : limitResponse
        
    } catch (error) {
        return { error: error.message }
        
    }
}

export const getTextSearch = async ( searchTerm ) => {
    try {

        const { data, headers } = await axios.get(`${base_url}?beer_name=${searchTerm}&per_page=80`)
        const result = data.length ? data : emptyResponse
        
        return checkLimit(headers["x-ratelimit-remaining"]) ? result : limitResponse
        
    } catch (error) {
        return { error: error.message }
        
    }
}

export const getBrewedBefore = async ( inputDate ) => {
    try {
        
        const { data, headers } = await axios.get(`${base_url}?brewed_before=${inputDate}&per_page=80`)
        const result = data.length ? data : emptyResponse
        
        return checkLimit(headers["x-ratelimit-remaining"]) ? result : limitResponse
        
    } catch (error) {
        return { error: error.message }
        
    }
}

