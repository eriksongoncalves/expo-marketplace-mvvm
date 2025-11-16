import axios, { AxiosInstance } from 'axios'

export class MarketplaceApi {
  private instance: AxiosInstance
  private isRefreshing = false

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://192.168.15.7/'
    })
  }

  getInstance() {
    return this.instance
  }
}

export const marketplaceApiClient = new MarketplaceApi().getInstance()
