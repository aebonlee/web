import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-database',
  chapter: 2,
  titleKey: 'backend02',
  sections: [
    {
      title: '데이터베이스 기초 (Supabase)',
      titleEn: 'Database Basics (Supabase)',
      content: 'Supabase는 오픈소스 Firebase 대안으로, PostgreSQL 데이터베이스, 인증, 스토리지, Edge Functions를 제공합니다. SQL로 테이블을 정의하고 JavaScript SDK로 쉽게 CRUD 작업을 수행합니다.',
      contentEn: 'Supabase is an open-source Firebase alternative offering PostgreSQL database, auth, storage, and Edge Functions. Define tables with SQL and perform CRUD operations easily with the JavaScript SDK.',
      code: `// Supabase 클라이언트 설정
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
);

// 데이터 조회 (SELECT)
const { data: users } = await supabase
  .from('users')
  .select('*')
  .order('created_at', { ascending: false });

// 데이터 추가 (INSERT)
const { data } = await supabase
  .from('users')
  .insert({ name: '홍길동', email: 'hong@example.com' });

// 데이터 수정 (UPDATE)
await supabase
  .from('users')
  .update({ name: '김길동' })
  .eq('id', 1);

// 데이터 삭제 (DELETE)
await supabase
  .from('users')
  .delete()
  .eq('id', 1);`,
      codeLanguage: 'javascript'
    }
  ]
};

export default chapter;
