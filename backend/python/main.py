import os
from route_config import *
from dotenv import load_dotenv

load_dotenv()

app.debug = True
host = os.environ.get('IP', '0.0.0.0')
port = int(os.environ.get('PORT', 8080))

app.run(host=host, port=port)
