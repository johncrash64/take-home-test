from flask import Flask, request, current_app
from flask_cors import CORS

from api_github.service import *
# app reference
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/v1/github')
def get_commits_history():
    """
    This method returns commits history list
    and by default method will be POST
    """
    current_app.logger.info("get_commits()")
    current_app.logger.info(request.args.to_dict())
    all_args = request.args.to_dict()

    return get_commits(all_args)
