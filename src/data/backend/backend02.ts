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

// 데이터 수정 (UPDATE) / 삭제 (DELETE)
await supabase.from('users').update({ name: '김길동' }).eq('id', 1);
await supabase.from('users').delete().eq('id', 1);`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'Supabase가 기반으로 하는 관계형 데이터베이스는?',
        questionEn: 'Which relational database is Supabase built on?',
        options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        optionsEn: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        correctIndex: 1,
        explanation: 'Supabase는 오픈소스 PostgreSQL을 기반으로 하며, SQL과 강력한 관계형 기능을 그대로 활용할 수 있습니다.',
        explanationEn: 'Supabase is built on open-source PostgreSQL, letting you use SQL and powerful relational features directly.'
      }
    },
    {
      title: '필터·정렬·페이지네이션',
      titleEn: 'Filtering, Sorting, and Pagination',
      content: '실무에서는 전체 데이터를 한 번에 가져오지 않고 조건으로 필터링하고, 정렬하고, 페이지 단위로 나눠 가져옵니다. Supabase는 eq, gt, like 같은 필터 메서드와 order, range로 이를 체이닝 방식으로 지원합니다.',
      contentEn: 'In practice, you don\'t fetch all data at once — you filter by conditions, sort, and paginate. Supabase supports filter methods like eq, gt, and like, plus order and range, all in a chainable style.',
      code: `// 조건 필터 + 정렬
const { data } = await supabase
  .from('posts')
  .select('id, title, views')
  .eq('published', true)         // published = true
  .gt('views', 100)              // views > 100
  .ilike('title', '%react%')     // 제목에 react 포함(대소문자 무시)
  .order('views', { ascending: false });

// 페이지네이션 (10개씩, 2페이지)
const page = 2, size = 10;
const from = (page - 1) * size;
const { data: pageData, count } = await supabase
  .from('posts')
  .select('*', { count: 'exact' })
  .range(from, from + size - 1);`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'Supabase에서 "특정 열의 값이 정확히 일치"하는 행을 필터링하는 메서드는?',
        questionEn: 'Which Supabase method filters rows where a column value exactly matches?',
        options: ['.like()', '.eq()', '.gt()', '.order()'],
        optionsEn: ['.like()', '.eq()', '.gt()', '.order()'],
        correctIndex: 1,
        explanation: '.eq(column, value)는 해당 열의 값이 정확히 일치하는 행만 조회합니다. .gt는 초과, .like는 패턴 일치입니다.',
        explanationEn: '.eq(column, value) returns rows where the column exactly equals the value. .gt is greater-than and .like is pattern matching.'
      }
    },
    {
      title: '인증과 행 수준 보안(RLS)',
      titleEn: 'Authentication and Row Level Security (RLS)',
      content: 'Supabase Auth는 이메일/소셜 로그인으로 사용자를 인증하고 JWT 토큰을 발급합니다. 데이터베이스에는 RLS(Row Level Security) 정책을 켜서, 로그인한 사용자가 자신의 데이터만 읽고 쓰도록 행 단위로 권한을 제어해야 합니다.',
      contentEn: 'Supabase Auth authenticates users via email/social login and issues JWT tokens. On the database, enable RLS (Row Level Security) policies so logged-in users can read and write only their own data, controlling permissions at the row level.',
      code: `// 회원가입 / 로그인
await supabase.auth.signUp({ email, password });
const { data } = await supabase.auth.signInWithPassword({ email, password });
const { data: { user } } = await supabase.auth.getUser();

-- RLS 정책 (SQL) - 본인 데이터만 접근 허용
alter table posts enable row level security;

create policy "자신의 글만 수정"
  on posts for update
  using ( auth.uid() = user_id );`,
      codeLanguage: 'javascript',
      quiz: {
        question: 'Supabase에서 사용자가 자신의 행 데이터만 접근하도록 제어하는 기능은?',
        questionEn: 'Which feature controls users to access only their own row data in Supabase?',
        options: ['CORS', 'RLS (Row Level Security)', 'CDN', 'JWT 만료'],
        optionsEn: ['CORS', 'RLS (Row Level Security)', 'CDN', 'JWT expiry'],
        correctIndex: 1,
        explanation: 'RLS는 행 단위 보안 정책으로, auth.uid() 등을 사용해 로그인한 사용자가 허용된 행에만 접근하도록 제한합니다.',
        explanationEn: 'RLS is a row-level security policy that uses auth.uid() and others to restrict logged-in users to permitted rows only.'
      }
    }
  ]
};

export default chapter;
