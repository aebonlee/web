import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-blocks',
  chapter: 2,
  titleKey: 'gradio02',
  sections: [
    {
      title: 'Blocks로 자유로운 레이아웃',
      titleEn: 'Flexible Layouts with Blocks',
      content: 'gr.Interface가 정형화된 UI라면, gr.Blocks는 행(Row)·열(Column)로 컴포넌트를 자유롭게 배치하고 이벤트를 직접 연결하는 방식입니다. 버튼 클릭(.click)에 함수를 연결하고 inputs/outputs를 지정해 동작을 정의합니다.',
      contentEn: 'While gr.Interface is a standardized UI, gr.Blocks lets you freely arrange components in Rows/Columns and wire events directly. Connect a function to a button click (.click) and specify inputs/outputs to define behavior.',
      code: `import gradio as gr

def add(a, b):
    return a + b

with gr.Blocks() as demo:
    gr.Markdown("## 덧셈 계산기")
    with gr.Row():
        a = gr.Number(label="A")
        b = gr.Number(label="B")
    out = gr.Number(label="결과")
    btn = gr.Button("계산")
    btn.click(fn=add, inputs=[a, b], outputs=out)

demo.launch()`,
      codeLanguage: 'python',
      quiz: {
        question: 'gr.Blocks에서 버튼 클릭에 함수를 연결하는 메서드는?',
        questionEn: 'Which method wires a function to a button click in gr.Blocks?',
        options: ['.on()', '.click()', '.bind()', '.submit()'],
        optionsEn: ['.on()', '.click()', '.bind()', '.submit()'],
        correctIndex: 1,
        explanation: 'btn.click(fn=..., inputs=..., outputs=...) 으로 버튼 클릭 시 실행할 함수와 입출력 컴포넌트를 연결합니다.',
        explanationEn: 'btn.click(fn=..., inputs=..., outputs=...) connects the function to run on click along with input/output components.'
      }
    },
    {
      title: '상태와 이벤트',
      titleEn: 'State and Events',
      content: 'gr.State로 세션별 상태를 유지하고, 입력 변경(.change)·제출(.submit) 등 다양한 이벤트에 함수를 연결할 수 있습니다. 함수가 상태를 받아 갱신된 상태를 반환하면 누적 동작을 구현할 수 있습니다.',
      contentEn: 'Keep per-session state with gr.State and wire functions to various events like input change (.change) and submit (.submit). When a function takes state and returns updated state, you can implement cumulative behavior.',
      code: `import gradio as gr

def add_item(item, items):
    items = items + [item]
    return items, "\\n".join(items)

with gr.Blocks() as demo:
    store = gr.State([])              # 세션 상태(리스트)
    inp = gr.Textbox(label="항목")
    out = gr.Textbox(label="목록")
    gr.Button("추가").click(add_item, [inp, store], [store, out])

demo.launch()`,
      codeLanguage: 'python',
      quiz: {
        question: 'Gradio에서 세션별 상태를 유지하는 컴포넌트는?',
        questionEn: 'Which component keeps per-session state in Gradio?',
        options: ['gr.Memory', 'gr.State', 'gr.Store', 'gr.Cache'],
        optionsEn: ['gr.Memory', 'gr.State', 'gr.Store', 'gr.Cache'],
        correctIndex: 1,
        explanation: 'gr.State는 사용자 세션별로 값을 저장해, 이벤트 함수에 입력으로 넘기고 갱신된 값을 다시 받을 수 있습니다.',
        explanationEn: 'gr.State stores values per user session, passed into event functions and returned updated.'
      }
    },
    {
      title: '실습 예제: 챗봇 인터페이스',
      titleEn: 'Practice: A Chatbot Interface',
      content: 'gr.ChatInterface로 몇 줄 만에 채팅 UI를 만들어 봅니다. 응답 함수는 (message, history)를 받아 답변 문자열을 반환하면 됩니다. 실제 LLM 호출 자리에 규칙 기반 응답을 넣어 구조를 익힙니다.',
      contentEn: 'Build a chat UI in a few lines with gr.ChatInterface. The response function takes (message, history) and returns a reply string. Use a rule-based reply in place of a real LLM call to learn the structure.',
      code: `import gradio as gr

def respond(message, history):
    if "안녕" in message:
        return "안녕하세요! 무엇을 도와드릴까요?"
    return f"'{message}' 라고 하셨네요. 더 알려주세요!"

demo = gr.ChatInterface(
    fn=respond,
    title="간단 챗봇",
    examples=["안녕", "Gradio가 뭐야?"],
)
demo.launch()`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
