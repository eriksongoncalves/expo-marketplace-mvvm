import { RegisterHttpParams, RegisterHttpResponse } from '../interfaces/http/register'
import { marketplaceApiClient } from '../api/marketplace.api'

export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketplaceApiClient.post<RegisterHttpResponse>('/auth/register', userData)

  return data
}
