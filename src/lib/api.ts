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

export default async function fetchAPI(url: string) {
	const headers = { 'User-Agent': 'chrome' };

	try {
		let response = await fetch(url, { headers });
		let text = await response.text();
		try {
			if (text === null) {
				return { error: 'Not found' };
			}
			return JSON.parse(text);
		} catch (e) {
			console.error(`Recevied from API: ${text}`);
			console.error(e);
			return { error: e };
		}
	} catch (error) {
		return { error };
	}
}
