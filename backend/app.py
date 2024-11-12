from flask import Flask, send_file, jsonify, request
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import os
import smtplib

load_dotenv()

api = Flask(__name__)
CORS(api)

FROM_EMAIL = os.getenv('FROM_EMAIL')
FROM_EMAIL_PASSWORD = os.getenv('FROM_EMAIL_PASSWORD')
TO_EMAIL = os.getenv('TO_EMAIL')
SMTP_HOST = os.getev('SMTP_HOST')
SMTP_PORT = os.getenv('SMTP_PORT')


@api.route('/download/resume')
def send_resume():
    file_path = os.path.join('files', 'christianbates.docx')
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return jsonify({'error': 'file not found'}), 404


@api.route('/send-email', methods=['GET', 'POST'])
def send_email():
    data = request.get_json()
    return jsonify({'message': f'Recieved message: {data}'})
    
    
if __name__ == '__main__':
    api.run(debug=True)