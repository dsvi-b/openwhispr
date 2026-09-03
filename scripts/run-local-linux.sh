#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ELECTRON_BIN="$PROJECT_DIR/node_modules/electron/dist/electron"
RENDERER="$PROJECT_DIR/src/dist/index.html"

if [[ ! -x "$ELECTRON_BIN" ]]; then
  echo "Electron não instalado. Execute:"
  echo "  cd $PROJECT_DIR && pnpm dlx npm@11.6.0 ci"
  exit 1
fi

if [[ ! -f "$RENDERER" ]]; then
  echo "Interface ainda não compilada. Execute:"
  echo "  $PROJECT_DIR/scripts/build-local-linux.sh"
  exit 1
fi

cd "$PROJECT_DIR"
exec "$ELECTRON_BIN" . --ozone-platform=x11 "$@"
