from flask import Flask, send_file, jsonify, request
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

load_dotenv()

api = Flask(__name__)
CORS(api)

logger = logging.getLogger('personal_website_logger')
logger.setLevel(logging.INFO)
file_handler = logging.FileHandler('app.log')
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
logger.addHandler(file_handler)


FROM_EMAIL = os.getenv('FROM_EMAIL')
FROM_EMAIL_PASSWORD = os.getenv('FROM_EMAIL_PASSWORD')
TO_EMAIL = os.getenv('TO_EMAIL')
TO_EMAIL_BACKUP = os.getenv('TO_EMAIL_BACKUP')
SMTP_HOST = os.getenv('SMTP_HOST')
SMTP_PORT = os.getenv('SMTP_PORT')


@api.route('/api/download/resume')
def send_resume():
    file_path = os.path.join('files', 'christianbates.docx')
    if os.path.exists(file_path):
        logger.info('Client has requested resume download.')
        return send_file(file_path, as_attachment=True)
    else:
        logger.error('Could not find file, client could not download resume.')
        return jsonify({'error': 'file not found'}), 404


@api.route('/api/send-email', methods=['GET', 'POST'])
def send_email():
    logger.info('Client has sent a message to email.')
    data = request.get_json()
    user_email = data['email']
    user_message = data['message']
    logger.info(f'{user_email} has sent a message: {user_message}')

    msg = MIMEMultipart()
    msg['From'] = FROM_EMAIL
    msg['To'] =TO_EMAIL
    msg['Subject'] = f'{user_email} reached out through your personal website.'
    msg.attach(MIMEText(user_message, 'plain'))
   
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
        smtp_server.login(FROM_EMAIL, FROM_EMAIL_PASSWORD)
        smtp_server.sendmail(FROM_EMAIL, TO_EMAIL, msg.as_string())
        
    return jsonify({'message': f'Recieved message: {data}'})
    
    
if __name__ == '__main__':
    api.run(debug=True)