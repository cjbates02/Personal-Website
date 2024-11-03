from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Christian",
        "message": "Hello React!"
    }
    return response_body



if __name__ == '__main__':
    api.run(debug=True)