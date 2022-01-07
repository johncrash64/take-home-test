from flask import request
from utils.utils import *
import requests
import os


def get_commits(data):
    """
    This method is to fetch the students details
    """
    if request.method == 'GET':
        # using an access token
        TOKEN = os.getenv('GITHUB_TOKEN', '...')
        query_url = f"https://api.github.com/repos/{data['owner']}/{data['repo']}/{data['api']}"
        params = {
            "per_page": data['per_page'],
            "page": data['page'],
        }
        headers = {'Authorization': f'token {TOKEN}'}

        _result = requests.get(query_url, headers=headers, params=params)

    return success_response(flatten_object(_result.json()), f"These are the {data['api']}")
