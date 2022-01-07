FROM python:3.9-slim-buster

LABEL maintainer="Jonathan Almanza <john.alm.cam@icloud.com>"

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential cmake \
    git-all libssl-dev \
    jq curl

ADD . /app 

RUN pip install -r requirements.txt

# Expose ports
EXPOSE 3000

# Set the entrypoint
CMD ["python", "main.py"]