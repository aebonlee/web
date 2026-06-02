import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-widgets',
  chapter: 2,
  titleKey: 'streamlit02',
  sections: [
    {
      title: '위젯과 상호작용',
      titleEn: 'Widgets and Interaction',
      content: 'st.slider·st.text_input·st.selectbox·st.button 같은 위젯은 사용자 입력을 받아 그 값을 변수로 돌려줍니다. 위젯 값이 바뀌면 스크립트가 위에서부터 다시 실행되며 화면이 갱신되는 것이 Streamlit의 핵심 동작 모델입니다.',
      contentEn: 'Widgets like st.slider, st.text_input, st.selectbox, and st.button take user input and return the value as a variable. When a widget value changes, the script re-runs top-to-bottom and the screen updates — this is Streamlit\'s core execution model.',
      code: `import streamlit as st

name = st.text_input("이름", "방문자")
age = st.slider("나이", 0, 100, 25)
lang = st.selectbox("관심 언어", ["Python", "JavaScript", "Go"])

if st.button("인사하기"):
    st.success(f"{name}님({age}세)은 {lang}에 관심이 있군요!")`,
      codeLanguage: 'python',
      quiz: {
        question: 'Streamlit에서 위젯 값이 바뀌면 일어나는 일은?',
        questionEn: 'What happens when a widget value changes in Streamlit?',
        options: ['아무 일도 없음', '스크립트가 위에서부터 다시 실행되어 화면 갱신', '서버가 재시작', '페이지가 새 탭으로 열림'],
        optionsEn: ['Nothing', 'The script re-runs from top, updating the screen', 'The server restarts', 'A new tab opens'],
        correctIndex: 1,
        explanation: 'Streamlit은 위젯 상호작용마다 스크립트 전체를 다시 실행해 최신 값으로 화면을 다시 그립니다.',
        explanationEn: 'Streamlit re-runs the entire script on each widget interaction, redrawing the screen with the latest values.'
      }
    },
    {
      title: 'session_state와 캐시',
      titleEn: 'session_state and Caching',
      content: '스크립트가 매번 다시 실행되므로, 값을 유지하려면 st.session_state에 저장합니다. 무거운 데이터 로딩·계산은 @st.cache_data로 캐싱해 재실행 시 반복 비용을 줄입니다.',
      contentEn: 'Since the script re-runs every time, store values in st.session_state to persist them. Cache heavy data loading/computation with @st.cache_data to avoid repeated cost on re-runs.',
      code: `import streamlit as st

# 재실행에도 유지되는 카운터
if "count" not in st.session_state:
    st.session_state.count = 0

if st.button("증가"):
    st.session_state.count += 1

st.write("클릭 수:", st.session_state.count)

@st.cache_data            # 결과 캐싱 (무거운 작업 1회만)
def load_data():
    return [i * i for i in range(1000)]

data = load_data()`,
      codeLanguage: 'python',
      quiz: {
        question: '재실행에도 값을 유지하려면 어디에 저장하나요?',
        questionEn: 'Where do you store values to persist them across re-runs?',
        options: ['전역 변수', 'st.session_state', '파일', 'st.cache만'],
        optionsEn: ['A global variable', 'st.session_state', 'A file', 'Only st.cache'],
        correctIndex: 1,
        explanation: '스크립트가 매번 재실행되므로 일반 변수는 초기화됩니다. st.session_state에 저장해야 상태가 유지됩니다.',
        explanationEn: 'Since the script re-runs each time, normal variables reset. Store in st.session_state to keep state.'
      }
    },
    {
      title: '실습 예제: 단위 변환기',
      titleEn: 'Practice: A Unit Converter',
      content: '위젯과 즉시 갱신 모델을 활용해, 입력을 바꾸면 결과가 실시간으로 바뀌는 단위 변환기를 만들어 봅니다. 별도 버튼 없이 위젯 변경만으로 재실행되어 결과가 갱신됩니다.',
      contentEn: 'Using widgets and the instant re-run model, build a unit converter whose result updates live as you change inputs. With no separate button, changing a widget triggers a re-run that updates the result.',
      code: `import streamlit as st

st.title("📏 단위 변환기")

unit = st.radio("변환 종류", ["cm → inch", "kg → lb"])
value = st.number_input("값", value=0.0)

if unit == "cm → inch":
    result = value / 2.54
    st.metric("inch", f"{result:.2f}")
else:
    result = value * 2.20462
    st.metric("lb", f"{result:.2f}")`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
