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
    <div class="blog-post-card">
        <div class="blog-post-content">
            <div class="blog-post-date">
                <slot name="post-date" />
            </div>
            <div class="blog-post-title">
                <slot name="post-title" />
            </div>
            <slot name="post-description" />
            <!-- read more button -->
            <span class="read-more-button">
                <a :href="url">Read More</a>
            </span>
        </div>
        <div class="blog-post-meta">
            <slot name="post-image" />
            <div class="taggroup">
                <fieldset class="taglist">
                    <legend>Tags</legend>
                    <TagBadge v-for="tag in tags" :key="tag" :tag="tag" :href="'/blog/tag/' + tag" />
                </fieldset>
            </div>
        </div>
    </div>
</template>
  
<style lang="sass" scoped>

.blog-post-card
    display: flex
    flex-direction: row
    min-width: 400px
    max-width: 900px
    position: relative
    border-color: #3f486040
    border-style: solid
    border-width: 1px
    border-radius: 10px
    margin: 0 auto
    margin-bottom: 1ch
    padding: 10px

.blog-post-title
    font-size: 19px
    font-weight: 300
    font-family: Montserrat
    text-align: left

.blog-post-card:hover
    border-color: #37adff


.blog-post-date
    flex-direction: row
    color: #6a738b
    font-size: 16px
    font-weight: 400
    font-family: Montserrat
    text-align: left
    width: 100%

.blog-post-content
    flex-direction: row
    width: 70%


.read-more-button
    width: 100px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    border: 1px solid #3f4860
    border-radius: 10px
    padding: 5px

.read-more-button:hover
    border: 1px solid #37adff

.blog-post-meta
    flex-direction: column
    text-align: right
    width: 30%


.taggroup
    display: flex
    width: 100%

.taglist
    min-width: content
    display: inline-flex
    flex-direction: row
    flex-wrap: wrap
    vertical-align: middle
    border: darkgrey 1px solid

.tag-badge
    background: grey
    width: content
    border-radius: 10px
    margin-left: 1px
    margin-right: 1px

.tag-badge:hover
    background: #37adff
    border-color: #37adff

</style>
  
<script lang="ts">
import TagBadge from './TagBadge.vue';

export default {
    components: {
        TagBadge,
    },
    props: {
        url: {
            type: String,
            required: true,
        },
        tags: {
            type: Array as () => string[],
            required: true,
        },
    },
};
</script>
  