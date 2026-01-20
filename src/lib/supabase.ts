import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tdqcubjovocrgsmvwzrw.supabase.co';
const supabaseAnonKey = 'sb_publishable_FZoKx0mNfOZEo8v1lHekBQ_jxjxznur';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
