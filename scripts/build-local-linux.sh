#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ ! -x "$PROJECT_DIR/node_modules/.bin/vite" ]]; then
  echo "Dependências ausentes. Execute primeiro:"
  echo "  cd $PROJECT_DIR && pnpm dlx npm@11.6.0 ci"
  exit 1
fi

echo "Compilando os componentes Linux..."
nice -n 15 node "$PROJECT_DIR/scripts/build-linux-key-listener.js"
nice -n 15 node "$PROJECT_DIR/scripts/build-linux-fast-paste.js"

echo "Compilando a interface com limite de 2 GB..."
cd "$PROJECT_DIR/src"
nice -n 15 env NODE_OPTIONS=--max-old-space-size=2048 ../node_modules/.bin/vite build

echo "OpenWhispr pronto para executar."
