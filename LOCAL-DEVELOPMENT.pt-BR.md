# OpenWhispr local no Linux

Este fork mantém o nome e a identidade **OpenWhispr**. Os arquivos abaixo
servem apenas para facilitar o desenvolvimento local no computador do Davi.

## Onde está o código

```text
~/Projetos/OpenWhispr
```

O GitHub do fork é <https://github.com/dsvi-b/openwhispr>. O repositório
original continua configurado como `upstream`.

## Depois de editar a interface

```bash
cd ~/Projetos/OpenWhispr
./scripts/build-local-linux.sh
systemctl --user restart openwhispr-fork.service
```

O build roda com prioridade baixa e limita o Node a 2 GB. Ele não executa a
suíte completa de testes automaticamente.

## Abrir manualmente

```bash
cd ~/Projetos/OpenWhispr
./scripts/run-local-linux.sh
```

## Refazer a configuração pessoal

Se a configuração inicial voltar a aparecer, pare o aplicativo, execute o
configurador e abra-o novamente:

```bash
systemctl --user stop openwhispr-fork.service
cd ~/Projetos/OpenWhispr
./node_modules/electron/dist/electron scripts/configure-personal-groq.js
systemctl --user start openwhispr-fork.service
```

O configurador seleciona Groq, desativa modelos locais e usa a tecla Copilot.
Ele não contém nem copia a chave da API para o repositório.

## Atualizar a partir do projeto original

```bash
cd ~/Projetos/OpenWhispr
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
