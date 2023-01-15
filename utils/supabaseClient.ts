import { createClient } from '@supabase/supabase-js'



const supabase = createClient(
    'https://jyqohwlqqqggdjnommmy.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cW9od2xxcXFnZ2Rqbm9tbW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzMDA1NDMsImV4cCI6MTk4ODg3NjU0M30.3nFYr2oDtJyvmx_WuWfFbRKq64fo4K1BVp6srcYoeU0'
);

export default supabase;