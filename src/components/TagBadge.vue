<!--
 Copyright (C) 2023 Theros < MisModding | SvalTek >
 
 This file is part of therosin.github.io.
 
 therosin.github.io is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 therosin.github.io is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with therosin.github.io.  If not, see <http://www.gnu.org/licenses/>.
-->
<template>    
      <div class="tag-badge">
        <span class="tag-label">
          <a :href="href">{{ tag }}</a>
        </span>
      </div>
</template>
  
  <style scoped>  
    .tag-badge {
      padding: 0px 8px 0px 8px;
      overflow: hidden;
      background: rgba(63, 72, 96, 0.15);
      border-radius: 20px;
    }
  
    .tag-label, a {
      color: #2f2b43;
      font-size: 14px;
      font-weight: 500;
      font-family: Inter;
      line-height: 20px;
      text-align: CENTER;
      letter-spacing: -0.01em;
    }
  </style>
  
  <script lang="ts">
    export default {
      name: 'TagBadge',
      props: {
        tag: String,
        href: {
          type: String,
          default: '#',
        }
      },
    };
  </script>
  