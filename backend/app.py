from flask import Flask, send_file, jsonify
import os
from flask_cors import CORS, cross_origin

api = Flask(__name__)
CORS(api)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Christian",
        "message": "Hello React!"
    }
    return response_body

@api.route('/download/resume')
def send_resume():
    print('function called')
    file_path = os.path.join('files', 'christianbates.docx')
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return jsonify({'error': 'file not found'}), 404

if __name__ == '__main__':
    api.run(debug=True)