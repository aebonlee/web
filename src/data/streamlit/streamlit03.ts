import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-layout-deploy',
  chapter: 3,
  titleKey: 'streamlit03',
  sections: [
    {
      title: '레이아웃: 사이드바·컬럼·탭',
      titleEn: 'Layout: Sidebar, Columns, Tabs',
      content: 'st.sidebar로 좌측 설정 패널을, st.columns로 가로 분할을, st.tabs로 탭을 구성해 화면을 정리합니다. with 블록 안에 컴포넌트를 넣으면 해당 영역에 배치됩니다.',
      contentEn: 'Organize the screen with st.sidebar for a left settings panel, st.columns for horizontal splits, and st.tabs for tabs. Placing components inside a with block puts them in that area.',
      code: `import streamlit as st

with st.sidebar:
    st.header("설정")
    theme = st.selectbox("테마", ["라이트", "다크"])

tab1, tab2 = st.tabs(["요약", "상세"])
with tab1:
    c1, c2 = st.columns(2)
    c1.metric("매출", "4.2M")
    c2.metric("주문", "312")
with tab2:
    st.write("상세 내용이 여기에 표시됩니다.")`,
      codeLanguage: 'python',
      quiz: {
        question: '좌측 설정 패널을 만드는 Streamlit 요소는?',
        questionEn: 'Which Streamlit element creates a left settings panel?',
        options: ['st.panel', 'st.sidebar', 'st.left', 'st.menu'],
        optionsEn: ['st.panel', 'st.sidebar', 'st.left', 'st.menu'],
        correctIndex: 1,
        explanation: 'st.sidebar(또는 with st.sidebar:)에 넣은 위젯은 화면 왼쪽 사이드바에 배치됩니다.',
        explanationEn: 'Widgets placed in st.sidebar (or with st.sidebar:) appear in the left sidebar.'
      }
    },
    {
      title: 'Streamlit Community Cloud 배포',
      titleEn: 'Deploying to Streamlit Community Cloud',
      content: 'GitHub 저장소에 app.py와 requirements.txt를 올리고 Streamlit Community Cloud에 연결하면 무료로 배포됩니다. 코드를 push하면 자동으로 다시 배포되어 운영이 간단합니다.',
      contentEn: 'Push app.py and requirements.txt to a GitHub repo and connect it to Streamlit Community Cloud for free hosting. Pushing code auto-redeploys, keeping operations simple.',
      code: `# 프로젝트 구조
# my-app/
#   app.py
#   requirements.txt   ← streamlit, pandas 등 의존성

# requirements.txt 예시
#   streamlit
#   pandas

# 배포 순서
# 1) GitHub에 push
# 2) share.streamlit.io 에서 New app → 저장소/브랜치/app.py 선택
# 3) Deploy → push 할 때마다 자동 재배포`,
      codeLanguage: 'python',
      quiz: {
        question: 'Streamlit 앱 배포 시 의존성을 명시하는 파일은?',
        questionEn: 'Which file lists dependencies when deploying a Streamlit app?',
        options: ['package.json', 'requirements.txt', 'Dockerfile', 'setup.cfg'],
        optionsEn: ['package.json', 'requirements.txt', 'Dockerfile', 'setup.cfg'],
        correctIndex: 1,
        explanation: 'requirements.txt에 streamlit 등 파이썬 의존성을 적어두면 배포 환경이 자동으로 설치합니다.',
        explanationEn: 'Listing Python dependencies like streamlit in requirements.txt lets the deploy environment install them automatically.'
      }
    },
    {
      title: '실습 예제: CSV 업로드 분석기',
      titleEn: 'Practice: A CSV Upload Analyzer',
      content: 'st.file_uploader로 CSV를 업로드받아 표와 기초 통계를 보여주는 앱을 만들어 봅니다. 파일이 없을 때의 안내 처리까지 포함한 실전 데이터 앱 패턴입니다.',
      contentEn: 'Build an app that uploads a CSV via st.file_uploader and shows the table and basic statistics. It includes guidance when no file is present — a practical data-app pattern.',
      code: `import streamlit as st
import pandas as pd

st.title("📁 CSV 분석기")

file = st.file_uploader("CSV 파일 업로드", type="csv")

if file is not None:
    df = pd.read_csv(file)
    st.subheader("데이터 미리보기")
    st.dataframe(df.head())
    st.subheader("기초 통계")
    st.write(df.describe())
else:
    st.info("CSV 파일을 업로드하면 분석 결과가 표시됩니다.")`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
