import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables: SUPABASE_URL and SUPABASE_ANON_KEY are required');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for blog posts
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  published: boolean;
  published_at: string;
  created_at: string;
}

// Fetch all published blog posts (for listing)
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data ?? [];
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
}

// Fetch all slugs for static path generation
export async function getAllSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('slug')
    .eq('published', true);

  if (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }

  return data?.map((post) => post.slug) ?? [];
}
