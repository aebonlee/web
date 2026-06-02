import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '03-share-deploy',
  chapter: 3,
  titleKey: 'gradio03',
  sections: [
    {
      title: '공유와 배포',
      titleEn: 'Sharing and Deployment',
      content: 'launch(share=True)를 쓰면 임시 공개 URL이 생성되어 누구에게나 데모를 보여줄 수 있습니다. 영구 배포는 Hugging Face Spaces가 가장 간편하며, app.py와 requirements.txt만 올리면 자동으로 호스팅됩니다.',
      contentEn: 'launch(share=True) creates a temporary public URL so anyone can see your demo. For permanent hosting, Hugging Face Spaces is the easiest — just upload app.py and requirements.txt and it hosts automatically.',
      code: `import gradio as gr

def echo(x):
    return x

demo = gr.Interface(fn=echo, inputs="text", outputs="text")

# 임시 공개 링크 생성 (72시간 유효)
demo.launch(share=True)

# Hugging Face Spaces 배포 시 필요한 파일
# requirements.txt:
#   gradio
# app.py: 위 코드 그대로`,
      codeLanguage: 'python',
      quiz: {
        question: '임시 공개 URL을 만들어 데모를 공유하는 옵션은?',
        questionEn: 'Which option creates a temporary public URL to share a demo?',
        options: ['launch(public=True)', 'launch(share=True)', 'launch(open=True)', 'share()'],
        optionsEn: ['launch(public=True)', 'launch(share=True)', 'launch(open=True)', 'share()'],
        correctIndex: 1,
        explanation: 'demo.launch(share=True) 는 외부에서 접속 가능한 임시 공개 링크를 생성합니다.',
        explanationEn: 'demo.launch(share=True) creates a temporary public link accessible externally.'
      }
    },
    {
      title: '이미지·파일 다루기',
      titleEn: 'Handling Images and Files',
      content: 'gr.Image, gr.File, gr.Audio 같은 컴포넌트로 미디어 입출력을 처리합니다. 이미지 입력은 numpy 배열 또는 PIL 이미지로 함수에 전달되며, 반환값을 그대로 출력 컴포넌트가 표시합니다.',
      contentEn: 'Handle media I/O with components like gr.Image, gr.File, gr.Audio. Image input is passed to the function as a numpy array or PIL image, and the return value is shown by the output component.',
      code: `import gradio as gr
import numpy as np

def to_gray(img):
    # img: numpy 배열 (H, W, 3)
    gray = img.mean(axis=2).astype("uint8")
    return np.stack([gray] * 3, axis=2)

demo = gr.Interface(
    fn=to_gray,
    inputs=gr.Image(label="원본"),
    outputs=gr.Image(label="흑백"),
)
demo.launch()`,
      codeLanguage: 'python',
      quiz: {
        question: 'gr.Image 입력은 함수에 어떤 형태로 전달되나요?',
        questionEn: 'In what form is gr.Image input passed to the function?',
        options: ['문자열 경로만', 'numpy 배열(또는 PIL 이미지)', 'JSON', 'base64 문자열만'],
        optionsEn: ['Only a string path', 'A numpy array (or PIL image)', 'JSON', 'Only a base64 string'],
        correctIndex: 1,
        explanation: '기본적으로 gr.Image는 numpy 배열로 전달됩니다(type="pil"로 PIL 이미지 지정 가능).',
        explanationEn: 'By default gr.Image is passed as a numpy array (use type="pil" for a PIL image).'
      }
    },
    {
      title: '실습 예제: 단어 빈도 분석기',
      titleEn: 'Practice: A Word Frequency Analyzer',
      content: '문장을 입력하면 단어별 등장 횟수를 표(Dataframe)로 보여주는 데모를 만들어 봅니다. 출력에 gr.Dataframe을 사용해 분석 결과를 표 형태로 시각화합니다.',
      contentEn: 'Build a demo that shows word counts as a table (Dataframe) when you input a sentence. Use gr.Dataframe in the output to visualize the analysis as a table.',
      code: `import gradio as gr
from collections import Counter

def word_freq(text):
    words = text.lower().split()
    counts = Counter(words).most_common()
    return [[w, c] for w, c in counts]   # [[단어, 횟수], ...]

demo = gr.Interface(
    fn=word_freq,
    inputs=gr.Textbox(label="문장", lines=3),
    outputs=gr.Dataframe(headers=["단어", "횟수"]),
    title="단어 빈도 분석기",
)
demo.launch()`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
