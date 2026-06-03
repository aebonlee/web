import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-start',
  chapter: 1,
  titleKey: 'streamlit01',
  sections: [
    {
      title: 'Streamlit 시작하기',
      titleEn: 'Getting Started with Streamlit',
      content: 'Streamlit은 파이썬 스크립트만으로 데이터 앱·대시보드를 만드는 프레임워크입니다. HTML/CSS/JS 없이 st.write, st.title 같은 함수를 위에서 아래로 쓰면 그대로 웹 화면이 됩니다. streamlit run 명령으로 실행합니다.',
      contentEn: 'Streamlit is a framework for building data apps and dashboards with just a Python script. Without HTML/CSS/JS, functions like st.write and st.title written top-to-bottom become a web page. Run it with the streamlit run command.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell) — 가상환경 + 설치',
          code: `python -m venv venv
venv\\Scripts\\activate
pip install streamlit`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux — 가상환경 + 설치',
          code: `python3 -m venv venv
source venv/bin/activate
pip install streamlit`,
          codeLanguage: 'bash',
        },
      ],
      code: `# app.py
import streamlit as st

st.title("Web AtoZ 데이터 앱")
st.write("Streamlit으로 만든 첫 화면입니다.")
st.metric("방문자", 1234, "+12%")

# 실행 → 브라우저 자동 오픈
# streamlit run app.py`,
      codeLanguage: 'python',
      quiz: {
        question: 'Streamlit 앱을 실행하는 명령은?',
        questionEn: 'Which command runs a Streamlit app?',
        options: ['python app.py', 'streamlit run app.py', 'flask run', 'st start'],
        optionsEn: ['python app.py', 'streamlit run app.py', 'flask run', 'st start'],
        correctIndex: 1,
        explanation: 'streamlit run app.py 로 실행하면 로컬 서버가 뜨고 브라우저가 자동으로 열립니다.',
        explanationEn: 'streamlit run app.py starts a local server and automatically opens the browser.'
      }
    },
    {
      title: '텍스트·데이터·차트 표시',
      titleEn: 'Displaying Text, Data, and Charts',
      content: 'st.title·st.header·st.markdown으로 글을, st.dataframe·st.table로 표를, st.line_chart·st.bar_chart로 차트를 한 줄에 표시합니다. pandas DataFrame을 그대로 넘기면 인터랙티브 표·차트가 됩니다.',
      contentEn: 'Show text with st.title/st.header/st.markdown, tables with st.dataframe/st.table, and charts with st.line_chart/st.bar_chart in one line. Pass a pandas DataFrame directly to get interactive tables/charts.',
      code: `import streamlit as st
import pandas as pd

st.header("월별 매출")

df = pd.DataFrame({
    "월": ["1월", "2월", "3월"],
    "매출": [120, 150, 90],
})

st.dataframe(df)                 # 인터랙티브 표
st.bar_chart(df, x="월", y="매출")  # 막대 차트`,
      codeLanguage: 'python',
      quiz: {
        question: 'Streamlit에서 막대 차트를 그리는 함수는?',
        questionEn: 'Which function draws a bar chart in Streamlit?',
        options: ['st.plot()', 'st.bar_chart()', 'st.graph()', 'st.draw()'],
        optionsEn: ['st.plot()', 'st.bar_chart()', 'st.graph()', 'st.draw()'],
        correctIndex: 1,
        explanation: 'st.bar_chart(데이터) 로 막대 차트를, st.line_chart로 선 차트를 한 줄에 그릴 수 있습니다.',
        explanationEn: 'st.bar_chart(data) draws a bar chart and st.line_chart draws a line chart, each in one line.'
      }
    },
    {
      title: '실습 예제: 미니 대시보드',
      titleEn: 'Practice: A Mini Dashboard',
      content: '지표(metric)·표·차트를 한 화면에 모아 간단한 대시보드를 구성해 봅니다. st.columns로 여러 지표를 가로로 배치하는 레이아웃 패턴을 익힙니다.',
      contentEn: 'Compose a simple dashboard combining metrics, a table, and a chart on one screen. Learn the layout pattern of placing several metrics horizontally with st.columns.',
      code: `import streamlit as st
import pandas as pd

st.title("📊 판매 대시보드")

c1, c2, c3 = st.columns(3)
c1.metric("매출", "₩4.2M", "+8%")
c2.metric("주문", "312", "+24")
c3.metric("환불", "5", "-2")

df = pd.DataFrame({
    "일자": ["월", "화", "수", "목", "금"],
    "매출": [80, 95, 70, 120, 130],
})
st.line_chart(df, x="일자", y="매출")
st.dataframe(df, use_container_width=True)`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
