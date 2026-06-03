import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '01-start',
  chapter: 1,
  titleKey: 'gradio01',
  sections: [
    {
      title: 'Gradio 시작하기',
      titleEn: 'Getting Started with Gradio',
      content: 'Gradio는 머신러닝 모델이나 파이썬 함수를 몇 줄로 웹 UI로 감싸주는 라이브러리입니다. gr.Interface에 함수와 입력·출력 타입만 지정하면 즉시 데모 페이지가 생성됩니다. AI 데모·프로토타입 공유에 특히 유용합니다.',
      contentEn: 'Gradio is a library that wraps a machine learning model or Python function into a web UI in a few lines. Give gr.Interface a function and input/output types, and a demo page is generated instantly. It is especially useful for sharing AI demos and prototypes.',
      codeBlocks: [
        {
          label: '🪟 Windows (PowerShell) — 가상환경 + 설치',
          code: `python -m venv venv
venv\\Scripts\\activate
pip install gradio`,
          codeLanguage: 'powershell',
        },
        {
          label: '🍎 macOS / Linux — 가상환경 + 설치',
          code: `python3 -m venv venv
source venv/bin/activate
pip install gradio`,
          codeLanguage: 'bash',
        },
      ],
      code: `# app.py
import gradio as gr

def greet(name):
    return f"안녕하세요, {name}님!"

demo = gr.Interface(fn=greet, inputs="text", outputs="text")
demo.launch()   # 로컬 웹 UI 실행`,
      codeLanguage: 'python',
      quiz: {
        question: 'Gradio의 핵심 용도는?',
        questionEn: 'What is Gradio mainly used for?',
        options: ['데이터베이스 관리', '파이썬 함수/ML 모델을 웹 UI로 빠르게 감싸기', 'CSS 스타일링', '버전 관리'],
        optionsEn: ['Database management', 'Quickly wrapping Python functions/ML models in a web UI', 'CSS styling', 'Version control'],
        correctIndex: 1,
        explanation: 'Gradio는 함수와 입력/출력만 지정하면 웹 데모 UI를 자동 생성해, ML 모델·프로토타입을 쉽게 공유하게 해줍니다.',
        explanationEn: 'Gradio auto-generates a web demo UI from a function and its inputs/outputs, making it easy to share ML models and prototypes.'
      }
    },
    {
      title: 'Interface와 컴포넌트',
      titleEn: 'Interface and Components',
      content: 'gr.Interface의 inputs·outputs에 컴포넌트를 지정해 입력 형태를 정합니다. "text", "number", "slider" 같은 문자열이나 gr.Textbox(), gr.Image() 같은 객체를 쓸 수 있고, 여러 개를 리스트로 넘기면 다중 입력/출력이 됩니다.',
      contentEn: 'Specify components in gr.Interface\'s inputs/outputs to define input forms. Use strings like "text", "number", "slider" or objects like gr.Textbox(), gr.Image(), and pass a list for multiple inputs/outputs.',
      code: `import gradio as gr

def bmi(height_cm, weight_kg):
    h = height_cm / 100
    value = weight_kg / (h * h)
    return round(value, 1)

demo = gr.Interface(
    fn=bmi,
    inputs=[gr.Slider(120, 220, label="키(cm)"),
            gr.Number(label="몸무게(kg)")],
    outputs=gr.Number(label="BMI"),
)
demo.launch()`,
      codeLanguage: 'python',
      quiz: {
        question: '여러 개의 입력을 받으려면 inputs에 무엇을 전달하나요?',
        questionEn: 'How do you accept multiple inputs in gr.Interface?',
        options: ['문자열 하나', '컴포넌트들의 리스트', 'dict', '아무것도 전달 안 함'],
        optionsEn: ['A single string', 'A list of components', 'A dict', 'Pass nothing'],
        correctIndex: 1,
        explanation: 'inputs에 컴포넌트들의 리스트를 넘기면 함수가 그 순서대로 여러 인자를 받습니다.',
        explanationEn: 'Passing a list of components to inputs makes the function receive multiple arguments in that order.'
      }
    },
    {
      title: '실습 예제: 텍스트 변환 데모',
      titleEn: 'Practice: A Text Transform Demo',
      content: '입력 문자열을 대문자/소문자/길이로 변환해 보여주는 데모를 만들어 봅니다. 다중 출력과 예제(examples) 제공으로 사용성을 높이는 패턴을 익힙니다.',
      contentEn: 'Build a demo that transforms an input string into uppercase/lowercase/length. Learn the pattern of multiple outputs and providing examples to improve usability.',
      code: `import gradio as gr

def transform(text):
    return text.upper(), text.lower(), len(text)

demo = gr.Interface(
    fn=transform,
    inputs=gr.Textbox(label="문장 입력"),
    outputs=[gr.Textbox(label="대문자"),
             gr.Textbox(label="소문자"),
             gr.Number(label="글자 수")],
    examples=[["Hello Gradio"], ["Web AtoZ"]],
    title="텍스트 변환기",
)
demo.launch()`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
