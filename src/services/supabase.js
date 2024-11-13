import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vhbqdebzwitgkiedgkoc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoYnFkZWJ6d2l0Z2tpZWRna29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNzY1ODgsImV4cCI6MjAzMzk1MjU4OH0.3TadssnLvMFEVqlzF7pXdICInzM49hSTzcrttqiqYkU";

  // Create a function to handle inserts
const handleInserts = (payload) => {
  console.log('Change received!', payload)
}

// Listen to inserts
supabase
  .channel('todos')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, handleInserts)
  .subscribe()

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;