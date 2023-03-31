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
import { defineCollection, z } from 'astro:content';

export default defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		showMeta: z.boolean().optional().default(true),
		hideTitle: z.boolean().optional().default(false),
		description: z.string(),
		hideDescription: z.boolean().optional().default(false),
		tags: z.array(z.string()),
		// Transform string to Date object
		pubDate: z.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		imageSize: z.string().optional(),
		isDraft: z.boolean()
			.optional()
			.default(false),
	}),
});
