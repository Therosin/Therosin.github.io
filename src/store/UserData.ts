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
import { persistentMap } from "@nanostores/persistent";
import { action } from "nanostores";
import { fetchAPI } from "../lib/api";


export const login = async (username: string, password: string) => {
    const response = await fetchAPI("https://api.therosin.com/login", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
        }),
    });

    const data = await response.json();
    if (data.success) {
        return data.user
    }

    return response;
};

export type UserData = {
    loggedIn: "true" | "false";
    username?: string;
    profilePicture?: string;
    discordId?: string;
    discordToken?: string;
}

export const UserData = persistentMap<UserData>(
    "UserData",
    {
        loggedIn: "false",
        username: undefined,
        profilePicture: undefined,
        discordId: undefined,
        discordToken: undefined,
    }
);

export const setUser = action(UserData, "setUser", (state, user: UserData) => {
    state.setKey("loggedIn", user.loggedIn);
    state.setKey("username", user.username);
    state.setKey("profilePicture", user.profilePicture);
    state.setKey("discordId", user.discordId);
    state.setKey("discordToken", user.discordToken);
});

export default UserData;
