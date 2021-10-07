const baseUrl = 'https://api.openai.com/v1'

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpResponse<T = any> = {
  ok: boolean
  data?: T
}

export type FetchOptions = {
  endpoint: string
  data?: Record<string, unknown>
  method: HttpMethods
  token?: string
  throwError?: boolean
}

export const customFetch = async <T = any>(
  options: FetchOptions
): Promise<HttpResponse<T>> => {
  const { endpoint, method, data, token, throwError } = options

  const url = `${baseUrl}/${endpoint}`

  const init = {
    method,
  } as RequestInit

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    init.headers = {
      'Content-type': 'application/json',
    }
  }

  if (token) {
    init.headers = {
      ...init.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  init.body = JSON.stringify(data)

  const resp = await fetch(url, init)

  // eslint-disable-next-line no-magic-numbers
  if (resp.status >= 210) {
    if (throwError) {
      throw new Error('Request error')
    }
    return {
      ok: false,
    }
  }

  const response = await resp.json()
  return {
    data: response,
    ok: true,
  }
}
