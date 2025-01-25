# docker buildx build --no-cache --platform linux/amd64 -t personal_website_frontend .
docker build --no-cache -t cjbates02/personal_website_frontend .
docker login
docker push cjbates02/personal_website_frontend