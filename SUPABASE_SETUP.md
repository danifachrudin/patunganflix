# Supabase Authentication Setup Guide

## 1. Setup Supabase Project

1. Pergi ke [Supabase](https://supabase.com) dan buat account
2. Buat project baru
3. Ambil Project URL dan Anon Key dari Settings > API

## 2. Environment Variables

1. Copy `.env.example` ke `.env`
2. Isi dengan credentials Supabase Anda:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 3. Database Setup

Jalankan SQL berikut di Supabase SQL Editor untuk membuat tabel profiles:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT CHECK (role IN ('admin', 'user')) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::TEXT, NOW()),
  PRIMARY KEY (id)
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public profiles are viewable by everyone." ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create function to handle new user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (new.id, new.email, 'user');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

## 4. Google OAuth Setup

1. Pergi ke Supabase Dashboard > Authentication > Providers
2. Enable Google provider
3. Buat Google OAuth credentials:
   - Pergi ke [Google Console](https://console.cloud.google.com/)
   - Buat project baru atau pilih existing
   - Enable Google+ API
   - Buat OAuth 2.0 credentials
   - Tambahkan authorized redirect URI: `https://your-project-id.supabase.co/auth/v1/callback`
4. Masukkan Client ID dan Client Secret ke Supabase

## 5. Running the Application

```bash
npm install
npm run dev
```

## 6. Testing

1. Buka `http://localhost:5173/login`
2. Test Google login dan email/password registration
3. Setelah login sukses, akan diarahkan ke `/dashboard`
4. Dashboard akan menampilkan role user (admin/user)

## 7. Create Admin User

Untuk membuat admin user, update role di Supabase database:

```sql
UPDATE profiles SET role = 'admin' WHERE email = 'your-admin-email@example.com';
```

## Fitur

- ✅ Google OAuth login
- ✅ Email/Password authentication
- ✅ User registration
- ✅ Role-based dashboard (admin/user)
- ✅ Protected routes
- ✅ Automatic profile creation
- ✅ Modern responsive UI
- ✅ Loading states dan error handling