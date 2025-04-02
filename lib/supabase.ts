import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

// 定義聯絡表單的資料類型
export interface ContactMessage {
  id?: number;
  name?: string;
  email?: string | null;
  message: string;
  created_at?: string;
}

// 儲存聯絡表單訊息的函數
export const saveContactMessage = async (message: Omit<ContactMessage, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error saving contact message:', error);
    throw error;
  }
};

export const checkHealth = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('hello-world', {
      body: { name: 'Functions' },
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};
