# OpenWhispr local no Linux

Este fork mantém o nome e a identidade **OpenWhispr**. Os arquivos abaixo
servem apenas para facilitar o desenvolvimento local no computador do Davi.

## Onde está o código

```text
~/Projects/OpenWhispr
```

O GitHub do fork é <https://github.com/dsvi-b/openwhispr>. O repositório
original continua configurado como `upstream`.

## Depois de editar a interface

```bash
cd ~/Projects/OpenWhispr
./scripts/build-local-linux.sh
systemctl --user restart openwhispr-fork.service
```

O build roda com prioridade baixa e limita o Node a 2 GB. Ele não executa a
suíte completa de testes automaticamente.

## Abrir manualmente

```bash
cd ~/Projects/OpenWhispr
./scripts/run-local-linux.sh
```

## Atualizar a partir do projeto original

```bash
cd ~/Projects/OpenWhispr
git fetch upstream
git switch main
git merge upstream/main
```

Revise os conflitos antes de enviar a atualização para `origin`.

## Configuração desta máquina

- dados do modo local: `~/.config/OpenWhispr-development`;
- chave de ditado: `Super+Shift+F23` (tecla Copilot);
- chave Groq: armazenada criptografada pelo Electron;
- serviço: `openwhispr-fork.service`;
- limite do serviço: 2 GB de memória e uma CPU.

Nunca coloque chaves de API, bancos de dados, modelos ou o diretório
`node_modules` no Git.
