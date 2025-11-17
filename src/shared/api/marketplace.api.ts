import axios, { AxiosInstance } from 'axios'
import { Platform } from 'react-native'

const getBaseURL = () => {
  return Platform.select({
    ios: 'http://localhost:3001',
    android: 'https://192.168.15.7:3001'
  })
}

const baseURL = getBaseURL()

export class MarketPlaceApiClient {
  private instance: AxiosInstance
  private isRefreshing = false

  constructor() {
    this.instance = axios.create({
      baseURL
    })
  }

  getInstance() {
    return this.instance
  }
}

export const marketplaceApiClient = new MarketPlaceApiClient().getInstance()
