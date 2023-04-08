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


/** Base User Interface
 * @typedef {Object} IComment
 */
export interface IUser {
    /** UserId */
	id: string;
    /** Error message */
    error?: string;
    /** Username */
    username: string;
    /** Email */
    email?: string;
    /** Avatar */
    avatar?: string;
    /** User's bio */
	about?: string;
    /** User's creation date */
    created: Date;
    /** User's last edit date */
    updated?: Date;
}

/** Base Comment Interface
 * @typedef {Object} IComment
*/
export interface IComment {
    id: string;
    /** Error message */
    error?: string;
    /** User who posted the comment */
    user: IUser;
    /** Comment content */
	content: string;
    /** Comment's creation date */
    created: Date;
    /** Comment's last edit date */
    updated?: Date;
    /** Comment's reputation (based on upvotes) */
    reputation: number;
    /** Comment's parent */
    parent?: IComment;
    /** Comment's children */
	comments?: IComment[];
}

/** Base Post Interface
 * @typedef {Object} IPost
*/
export interface IPost {
    /** PostId */
    id: string;
    /** Error message */
    error?: string;
    /** Post's title */
    title: string;
    /** Post's content */
    content: string;
    /** Post's creation date */
    created: Date;
    /** Post's last edit date */
    updated?: Date;
    /** Post's reputation (based on upvotes) */
    reputation: number;
    /** Post's author */
    author: IUser;
    /** Post's comments */
    comments?: IComment[];
}
