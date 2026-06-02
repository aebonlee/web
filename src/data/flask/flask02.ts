import type { TopicChapter } from '../types';

const chapter: TopicChapter = {
  id: '02-rest-api',
  chapter: 2,
  titleKey: 'flask02',
  sections: [
    {
      title: 'JSON REST API 만들기',
      titleEn: 'Building a JSON REST API',
      content: 'Flask는 jsonify로 파이썬 딕셔너리·리스트를 JSON 응답으로 변환합니다. request.get_json()으로 요청 본문을 읽고, 적절한 HTTP 상태 코드와 함께 반환해 REST API를 구성합니다.',
      contentEn: 'Flask converts Python dicts/lists to JSON responses with jsonify. Read the request body with request.get_json() and return it with the appropriate HTTP status code to build a REST API.',
      code: `from flask import Flask, jsonify, request
app = Flask(__name__)

todos = [{"id": 1, "text": "Flask 배우기"}]

@app.route("/api/todos", methods=["GET"])
def list_todos():
    return jsonify(todos)

@app.route("/api/todos", methods=["POST"])
def add_todo():
    data = request.get_json()
    todo = {"id": len(todos) + 1, "text": data["text"]}
    todos.append(todo)
    return jsonify(todo), 201   # 201 Created`,
      codeLanguage: 'python',
      quiz: {
        question: 'Flask에서 파이썬 딕셔너리를 JSON 응답으로 변환하는 함수는?',
        questionEn: 'Which function converts a Python dict to a JSON response in Flask?',
        options: ['json.dumps()', 'jsonify()', 'render_json()', 'to_json()'],
        optionsEn: ['json.dumps()', 'jsonify()', 'render_json()', 'to_json()'],
        correctIndex: 1,
        explanation: 'jsonify()는 딕셔너리/리스트를 JSON으로 직렬화하고 Content-Type: application/json 헤더까지 설정해 줍니다.',
        explanationEn: 'jsonify() serializes dicts/lists to JSON and also sets the Content-Type: application/json header.'
      }
    },
    {
      title: '에러 처리와 상태 코드',
      titleEn: 'Error Handling and Status Codes',
      content: '요청이 잘못되면 적절한 상태 코드(400·404 등)로 응답해야 합니다. 튜플 (본문, 상태코드)로 반환하거나 abort()를 사용하고, @app.errorhandler로 공통 에러 응답을 정의할 수 있습니다.',
      contentEn: 'When a request is invalid, respond with the right status code (400, 404, etc.). Return a (body, status) tuple or use abort(), and define common error responses with @app.errorhandler.',
      code: `from flask import Flask, jsonify, request, abort
app = Flask(__name__)

@app.route("/api/todos/<int:id>")
def get_todo(id):
    todo = next((t for t in todos if t["id"] == id), None)
    if todo is None:
        abort(404)                       # 없으면 404
    return jsonify(todo)

@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "찾을 수 없습니다"}), 404`,
      codeLanguage: 'python',
      quiz: {
        question: '요청한 자원이 없을 때 반환할 적절한 상태 코드는?',
        questionEn: 'What is the appropriate status code when the requested resource does not exist?',
        options: ['200', '201', '404', '500'],
        optionsEn: ['200', '201', '404', '500'],
        correctIndex: 2,
        explanation: '404 Not Found는 자원이 존재하지 않음을 의미합니다. abort(404)로 즉시 반환할 수 있습니다.',
        explanationEn: '404 Not Found means the resource does not exist. You can return it immediately with abort(404).'
      }
    },
    {
      title: '실습 예제: 메모 CRUD API',
      titleEn: 'Practice: Memo CRUD API',
      content: '메모를 조회·생성·삭제하는 작은 REST API를 완성해 봅니다. 입력 검증(빈 값 거부)과 상태 코드를 함께 처리하는 실전 패턴입니다.',
      contentEn: 'Complete a small REST API to read, create, and delete memos. It is a practical pattern combining input validation (rejecting empty values) with status codes.',
      code: `from flask import Flask, jsonify, request, abort
app = Flask(__name__)

memos = []
next_id = 1

@app.route("/api/memos", methods=["GET"])
def list_memos():
    return jsonify(memos)

@app.route("/api/memos", methods=["POST"])
def create_memo():
    global next_id
    data = request.get_json() or {}
    text = (data.get("text") or "").strip()
    if not text:
        return jsonify({"error": "text는 필수입니다"}), 400
    memo = {"id": next_id, "text": text}
    next_id += 1
    memos.append(memo)
    return jsonify(memo), 201

@app.route("/api/memos/<int:id>", methods=["DELETE"])
def delete_memo(id):
    global memos
    if not any(m["id"] == id for m in memos):
        abort(404)
    memos = [m for m in memos if m["id"] != id]
    return "", 204`,
      codeLanguage: 'python'
    }
  ]
};

export default chapter;
