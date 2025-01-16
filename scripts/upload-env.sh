#!/bin/bash

ENV_FILE=".env"
URL=$(git config --get remote.origin.url)
REPO=$(echo "$URL" | sed -E 's#^(git@github.com:|https://github.com/)([^/]+)/([^/\.]+)(\.git)?$#\2/\3#')

if [[ -z "$REPO" ]]; then
  echo "リポジトリ名を取得できませんでした。git remote origin が設定されているか確認してください。"
  exit 1
fi

echo "Detected repository: $REPO"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "$ENV_FILE が存在しません。"
  exit 1
fi

while IFS= read -r line || [ -n "$line" ]; do
  # 空行と # で始まる行はスキップ
  if [[ -z "$line" || "$line" == "#"* ]]; then
    continue
  fi

  KEY=$(echo "$line" | cut -d '=' -f1)
  VALUE=$(echo "$line" | cut -d '=' -f2-)

  echo "-----------------------------------"
  echo "Environment variable found:"
  echo "  KEY:   $KEY"
  echo "  VALUE: $VALUE"
  echo

  # 対話的な入力だけ /dev/tty から受け取る
  read -r -p "Do you want to upload this as a GitHub Secret? (y/n) " answer < /dev/tty

  case "$answer" in
    [yY][eE][sS]|[yY])
      echo "Setting secret: $KEY"
      gh secret set "$KEY" \
        --repo "$REPO" \
        --body "$VALUE"
      ;;
    *)
      echo "Skipped: $KEY"
      ;;
  esac
done < "$ENV_FILE"

echo
echo "Done. Secrets have been processed for $REPO."
