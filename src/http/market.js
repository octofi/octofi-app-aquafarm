import axios from 'axios';

import { marketCoins } from '../constants';

export default class MarketApi {
    constructor() {
        this.ids = marketCoins.map(coin => {
            return coin.id
        })
        this.baseURL = 'https://api.coingecko.com/api/v3'
    }

    get(type, payload = null) {
        switch(type) {
            case 'marketCoins': {
                return this.fetchMarketCoins(payload)
            }
            case 'all': {
                return this.fetchAllCoins(payload)
            }
            case 'selected': {
                return this.fetchSelectedCoin(payload)
            }
            case 'historical': {
                return this.fetchCoinHistorical(payload)
            }
            case 'global': {
                return this.fetchGlobalData(payload)
            }
            default: {
                return new Promise((resolve) => {
                    resolve(null);
                })
            }
        }
    }

    fetchMarketCoins() {
        return axios.get(`${this.baseURL}/coins/markets?vs_currency=USD&price_change_percentage=1h,24h,7d,30d,60d,200d,1y&ids=${this.ids.join(",")}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error;
            })
    }

    fetchGlobalData() {
        return axios.get(`${this.baseURL}/global`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error;
            })
    }

    fetchAllCoins(payload) {
        return axios.get(`${this.baseURL}/coins/markets?vs_currency=USD&price_change_percentage=1h,24h,7d,30d,60d,200d,1y&per_page=${payload.pageSize}&page=${payload.page}`)
            .then(response => {
                console.log(response);
                return response.data
            })
            .catch(error => {
                return error;
            })
    }

    fetchSelectedCoin(payload) {
        return axios.get(`${this.baseURL}/coins/${payload.id}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error;
            })
    }

    fetchCoinHistorical(payload) {
        return axios.get(`${this.baseURL}/coins/${payload.id}/market_chart?vs_currency=USD&days=${payload.days}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error;
            })
    }
}