#!/bin/bash
if [ -z "$1" ]; then
    echo: "Commit message required"
    exit 1
fi

commit_msg="$1"

npm run build --prefix ./frontend/

git add .
git commit -m "$commit_msg"
git push origin master

ssh admin@10.0.97.210 << EOF
  cd /app

  sudo git pull origin master
  
  sudo systemctl restart flaskapp
  sudo systemctl restart nginx
EOF