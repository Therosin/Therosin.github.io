import { defineCollection, z } from 'astro:content';
import  BlogPost from '../schemas/BlogPost';

export const collections = {
    'blog': BlogPost
};
