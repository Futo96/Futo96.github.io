// This file initializes the Supabase client for use throughout the application.
// It uses environment variables to avoid hardcoding sensitive keys.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || window.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || window.SUPABASE_ANON_KEY;

console.log('supabaseClient.js: Initializing Supabase client...');
console.log('supabaseClient.js: Supabase URL:', supabaseUrl ? 'Set' : 'Undefined');
console.log('supabaseClient.js: Supabase Anon Key:', supabaseAnonKey ? 'Set' : 'Undefined');

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('supabaseClient.js: Supabase URL or Anon Key is missing. Check environment variables or window globals.');
}

// Create and export the Supabase client.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('supabaseClient.js: Supabase client created:', !!supabase);

// Make the client available globally for older scripts or inline scripts that don't use modules.
window.supabase = supabase;
console.log('supabaseClient.js: window.supabase assigned:', !!window.supabase);
