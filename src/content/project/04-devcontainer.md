---
title: "Project: Devcontainer"
hideTitle: false
description: "Personalized reproducable development environments using docker and vscode"
hideDescription: false
showMeta: true
#heroImage: "/placeholder-hero.jpg"
#imageSize: "100%"
tags: ["project", "vscode", "docker", "environments"]
pubDate: "July 05 2023"
updatedDate: "July 05 2023"
isDraft: false
---

## Why?

reciently I've found myself working on a lot of small varied projects but using the same tooling, so rather than installing and configuring the same tools over and over again I've been using docker to create a reproducible containers for each project.
This repository builds a base image with the tools I use most often and some helpful scripts to manage things.

## What's included?

- [x] [git](https://git-scm.com/) - Version control
- [x] [build-essential](https://packages.ubuntu.com/bionic/build-essential) - Build tools
  - also includes cmake etc.
- [x] [ninja-build](https://ninja-build.org/) - Build system
- [x] [nvm](https://github.com/nvm-sh/nvm) - Node version manager
  - [x] [nodejs](https://nodejs.org/en/) - Javascript runtime (default version 18.6.1)
  - [x] [npm](https://www.npmjs.com/) - Node package manager
  - [x] [typescript](https://www.typescriptlang.org/) - Javascript superset (installed globally)
  - [x] [typescript-to-lua](https://typescripttolua.github.io/) - Typescript to lua compiler (installed globally)
- [x] [go](https://golang.org/) - Go programming language (default version 1.17.2)
- [x] [algernon](https://github.com/xyproto/algernon) - go based webserver with lua support (from source)
- [x] [luaver](https://github.com/DhavalKapil/luaver) - Easy lua version management
- [x] [lua](https://www.lua.org/) - Lua programming language (default version 5.1.3 from source)
- [x] [luarocks](https://luarocks.org/) - Lua package manager (default version 3.9.2 from source)
  - [x] [luafilesystem](https://keplerproject.github.io/luafilesystem/) - Filesystem access for lua
  - [x] [busted](https://olivinelabs.com/busted/) - Lua unit testing framework
  - [x] [luacheck](https://github.com/mpeterv/luacheck) - Lua static analysis tool
  - [x] [luasocket](https://luarocks.org/modules/luasocket/luasocket) - Lua networking library
  - [x] [moonscript](https://moonscript.org/) - Lua superset
  - [x] [luaformatter](https://github.com/Koihik/LuaFormatter) - Lua code formatter
