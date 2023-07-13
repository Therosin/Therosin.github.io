// Copyright (C) 2023 Theros < MisModding | SvalTek >
// 
// This file is part of therosin.github.io.
// 
// therosin.github.io is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// therosin.github.io is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with therosin.github.io.  If not, see <http://www.gnu.org/licenses/>.



/**
 * Fetches data from the API
 * @param url The URL to fetch from
 * @param options The options to pass to fetch
 * @param asJson Whether to parse the response as JSON
 * @returns The response from the API as a string or object
 */
export async function fetchAPI(url: string, options?: RequestInit): Promise<Response> {
	
	const headers = { 'User-Agent': 'chrome' };

	try {
		let response = await fetch(url, { headers, ...options });
		if (response.ok) {
			return response;
		} else {
			throw new Error(response.statusText);
		}
	} catch (error: any) {
		throw new Error(`Error fetching ${url}: ${error.message}`);
	}
}

/**
 * Posts data to the API
 * @param url The URL to post to
 * @param data The data to post
 * @param options The options to pass to fetch
 * @param asJson Whether to parse the response as JSON
 * @returns The response from the API as a string or object
 * @throws Error if the response is not ok
 * @throws Error if the response is not JSON
*/
export async function postAPI(url: string, data: any, options?: RequestInit): Promise<Response> {
	
	const headers = { 'User-Agent': 'chrome' };

	try {
		let response = await fetch(url, { headers, method: 'POST', body: JSON.stringify(data), ...options });
		if (response.ok) {
			return response;
		} else {
			throw new Error(response.statusText);
		}
	} catch (error: any) {
		throw new Error(`Error posting to ${url}: ${error.message}`);
	}
}

export default function useAPI(url: string, options?: RequestInit) {
	return {
		fetch: (path: string, opt?: RequestInit) => fetchAPI(url + path, { ...options, ...opt }),
		post: (path: string, data: any, opt?: RequestInit) => postAPI(url + path, data, { ...options, ...opt })
	};
}