import { defineCollection, z } from 'astro:content';
import  BlogPost from '../schemas/BlogPost';
import  Project from '../schemas/Project';

export const collections = {
    'blog': BlogPost,
    'project': Project
};
