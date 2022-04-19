// TypeScript Version: 3.0

export type AxiosRequestHeaders = Record<string, string | number | boolean>

export type AxiosResponseHeaders = Record<string, string> & {
	'set-cookie'?: string[]
}

export interface AxiosRequestTransformer {
	(data: unknown, headers?: AxiosRequestHeaders): unknown
}

export interface AxiosResponseTransformer {
	(data: unknown, headers?: AxiosResponseHeaders): unknown
}

export interface AxiosAdapter {
	(config: AxiosRequestConfig): AxiosPromise
}

export interface AxiosBasicCredentials {
	username: string
	password: string
}

export interface AxiosProxyConfig {
	host: string
	port: number
	auth?: {
		username: string
		password: string
	}
	protocol?: string
}

export type Method =
	| 'get'
	| 'GET'
	| 'delete'
	| 'DELETE'
	| 'head'
	| 'HEAD'
	| 'options'
	| 'OPTIONS'
	| 'post'
	| 'POST'
	| 'put'
	| 'PUT'
	| 'patch'
	| 'PATCH'
	| 'purge'
	| 'PURGE'
	| 'link'
	| 'LINK'
	| 'unlink'
	| 'UNLINK'

export type ResponseType =
	| 'arraybuffer'
	| 'blob'
	| 'document'
	| 'json'
	| 'text'
	| 'stream'

export type responseEncoding =
	| 'ascii'
	| 'ASCII'
	| 'ansi'
	| 'ANSI'
	| 'binary'
	| 'BINARY'
	| 'base64'
	| 'BASE64'
	| 'base64url'
	| 'BASE64URL'
	| 'hex'
	| 'HEX'
	| 'latin1'
	| 'LATIN1'
	| 'ucs-2'
	| 'UCS-2'
	| 'ucs2'
	| 'UCS2'
	| 'utf-8'
	| 'UTF-8'
	| 'utf8'
	| 'UTF8'
	| 'utf16le'
	| 'UTF16LE'

export interface TransitionalOptions {
	silentJSONParsing?: boolean
	forcedJSONParsing?: boolean
	clarifyTimeoutError?: boolean
}

export interface AxiosRequestConfig<D = unknown> {
	url?: string
	method?: Method
	baseURL?: string
	transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[]
	transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[]
	headers?: AxiosRequestHeaders
	params?: unknown
	paramsSerializer?: (params: unknown) => string
	data?: D
	timeout?: number
	timeoutErrorMessage?: string
	withCredentials?: boolean
	adapter?: AxiosAdapter
	auth?: AxiosBasicCredentials
	responseType?: ResponseType
	responseEncoding?: responseEncoding | string
	xsrfCookieName?: string
	xsrfHeaderName?: string
	onUploadProgress?: (progressEvent: unknown) => void
	onDownloadProgress?: (progressEvent: unknown) => void
	maxContentLength?: number
	validateStatus?: ((status: number) => boolean) | null
	maxBodyLength?: number
	maxRedirects?: number
	socketPath?: string | null
	httpAgent?: unknown
	httpsAgent?: unknown
	proxy?: AxiosProxyConfig | false
	cancelToken?: CancelToken
	decompress?: boolean
	transitional?: TransitionalOptions
	signal?: AbortSignal
	insecureHTTPParser?: boolean
}

export interface HeadersDefaults {
	common: AxiosRequestHeaders
	delete: AxiosRequestHeaders
	get: AxiosRequestHeaders
	head: AxiosRequestHeaders
	post: AxiosRequestHeaders
	put: AxiosRequestHeaders
	patch: AxiosRequestHeaders
	options?: AxiosRequestHeaders
	purge?: AxiosRequestHeaders
	link?: AxiosRequestHeaders
	unlink?: AxiosRequestHeaders
}

export interface AxiosDefaults<D = unknown>
	extends Omit<AxiosRequestConfig<D>, 'headers'> {
	headers: HeadersDefaults
}

export interface AxiosResponse<T = unknown, D = unknown> {
	data: T
	status: number
	statusText: string
	headers: AxiosResponseHeaders
	config: AxiosRequestConfig<D>
	request?: unknown
}

export interface AxiosError<T = unknown, D = unknown> extends Error {
	config: AxiosRequestConfig<D>
	code?: string
	request?: unknown
	response?: AxiosResponse<T, D>
	isAxiosError: boolean
	toJSON: () => object
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AxiosPromise<T = unknown> extends Promise<AxiosResponse<T>> {}

export interface CancelStatic {
	new (message?: string): Cancel
}

export interface Cancel {
	message: string | undefined
}

export interface Canceler {
	(message?: string): void
}

export interface CancelTokenStatic {
	new (executor: (cancel: Canceler) => void): CancelToken
	source(): CancelTokenSource
}

export interface CancelToken {
	promise: Promise<Cancel>
	reason?: Cancel
	throwIfRequested(): void
}

export interface CancelTokenSource {
	token: CancelToken
	cancel: Canceler
}

export interface AxiosInterceptorManager<V> {
	use<T = V>(
		onFulfilled?: (value: V) => T | Promise<T>,
		onRejected?: (error: unknown) => unknown
	): number
	eject(id: number): void
}

export declare class Axios {
	constructor(config?: AxiosRequestConfig)
	defaults: AxiosDefaults
	interceptors: {
		request: AxiosInterceptorManager<AxiosRequestConfig>
		response: AxiosInterceptorManager<AxiosResponse>
	}
	getUri(config?: AxiosRequestConfig): string
	request<T = unknown, R = AxiosResponse<T>, D = unknown>(
		config: AxiosRequestConfig<D>
	): Promise<R>
	get<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		config?: AxiosRequestConfig<D>
	): Promise<R>
	delete<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		config?: AxiosRequestConfig<D>
	): Promise<R>
	head<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		config?: AxiosRequestConfig<D>
	): Promise<R>
	options<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		config?: AxiosRequestConfig<D>
	): Promise<R>
	post<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig<D>
	): Promise<R>
	put<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig<D>
	): Promise<R>
	patch<T = unknown, R = AxiosResponse<T>, D = unknown>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig<D>
	): Promise<R>
}

export interface AxiosInstance extends Axios {
	(config: AxiosRequestConfig): AxiosPromise
	(url: string, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosStatic extends AxiosInstance {
	create(config?: AxiosRequestConfig): AxiosInstance
	Cancel: CancelStatic
	CancelToken: CancelTokenStatic
	Axios: typeof Axios
	readonly VERSION: string
	isCancel(value: unknown): boolean
	all<T>(values: Array<T | Promise<T>>): Promise<T[]>
	spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R
	isAxiosError(payload: unknown): payload is AxiosError
}
