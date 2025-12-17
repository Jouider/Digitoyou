import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

console.log('🔍 Testing Supabase Connection...\n');
console.log('SUPABASE_URL:', supabaseUrl);
console.log('SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 20)}...` : 'NOT SET');
console.log('');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test 1: Check connection
console.log('📡 Test 1: Checking connection...');
try {
  const { data, error } = await supabase
    .from('blogs')
    .select('count');
  
  if (error) {
    console.error('❌ Connection error:', error.message);
    console.error('Details:', error);
  } else {
    console.log('✅ Connection successful!');
  }
} catch (err) {
  console.error('❌ Connection failed:', err.message);
}

console.log('');

// Test 2: Fetch all blogs (published and unpublished)
console.log('📚 Test 2: Fetching ALL blogs...');
try {
  const { data, error } = await supabase
    .from('blogs')
    .select('*');
  
  if (error) {
    console.error('❌ Error fetching blogs:', error.message);
    console.error('Details:', error);
  } else {
    console.log(`✅ Found ${data.length} total blog(s)`);
    data.forEach((blog, index) => {
      console.log(`\n${index + 1}. ${blog.title}`);
      console.log(`   Slug: ${blog.slug}`);
      console.log(`   Published: ${blog.published}`);
      console.log(`   Created: ${blog.created_at}`);
    });
  }
} catch (err) {
  console.error('❌ Fetch failed:', err.message);
}

console.log('');

// Test 3: Fetch only published blogs
console.log('📰 Test 3: Fetching PUBLISHED blogs...');
try {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });
  
  if (error) {
    console.error('❌ Error fetching published blogs:', error.message);
    console.error('Details:', error);
  } else {
    console.log(`✅ Found ${data.length} published blog(s)`);
    data.forEach((blog, index) => {
      console.log(`\n${index + 1}. ${blog.title}`);
      console.log(`   Slug: ${blog.slug}`);
      console.log(`   Published at: ${blog.published_at}`);
    });
  }
} catch (err) {
  console.error('❌ Fetch failed:', err.message);
}

console.log('\n✨ Test completed!');
