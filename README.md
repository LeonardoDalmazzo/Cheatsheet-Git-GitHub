# 📘 Guia Pessoal de Git & GitHub

Este é um guia rápido de comandos, boas práticas e atalhos para usar no dia a dia com **Git** e **GitHub**.  
Feito para consultas rápidas 🚀

---

## 📑 Fluxo de Trabalho Padrão

```bash
# Garantir que a branch main está atualizada
git checkout main
git pull origin main

# Criar e entrar em uma branch nova
git checkout -b feature/nome-da-feature

# Adicionar mudanças
git add .

# Commit com mensagem clara (Conventional Commits)
git commit -m "feat: descrição curta e objetiva"

# Subir branch
git push origin feature/nome-da-feature

# Abrir PR no GitHub → revisar → merge

# Atualizar local depois do merge
git checkout main
git pull origin main
```

---

## 📝 Padrões de Commit (Conventional Commits)

- feat: ➝ nova funcionalidade

- fix: ➝ correção de bug

- chore: ➝ manutenção/infraestrutura

- docs: ➝ alterações na documentação

- refactor: ➝ refatoração de código

- test: ➝ adição/alteração de testes

[**🔗 Conventional Commits - v1.0.0-beta.4**](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/#especifica%c3%a7%c3%a3o)

---

## 📂 Status dos Arquivos no Git (VS Code & Terminal)
```bash
U   → Untracked   # arquivo novo, ainda não adicionado
A   → Added       # arquivo adicionado ao stage (git add)
M   → Modified    # arquivo modificado
D   → Deleted     # arquivo removido
R   → Renamed     # arquivo renomeado
C   → Copied      # arquivo copiado
??  → Untracked   # equivalente a U (quando roda git status)
```


### 👉 Exemplos no VS Code:

U = arquivo novo não rastreado

A = arquivo adicionado (git add)

M = arquivo já rastreado que foi modificado

---

## 🔄 Desfazendo git add

```bash
git restore --staged arquivo.txt   # remove 1 arquivo do stage
git restore --staged .             # remove todos do stage
```

---

## ✏️ Editando Mensagens de Commit

#### Último commit (antes do push):
```bash
git commit --amend
```

#### Commits antigos (antes do push):
```bash
git rebase -i HEAD~3   # últimos 3 commits
# troque 'pick' por 'reword' nos commits desejados
```

#### Depois do push (⚠️ use com cuidado):
```bash
git commit --amend
git push --force
```

[**🔗 StackOverflow - editar mensagens de commit**](https://pt.stackoverflow.com/questions/61429/como-editar-uma-mensagem-de-commit-incorreta-no-git)

---

## 💡 Dicas Extras

#### Preview do README no VS Code:
- `CTRL + SHIFT + V` → Preview de Markdown (README, docs, etc.)  
- `CTRL + SHIFT + L` → Seleciona todas as ocorrências da seleção atual  
- `CTRL + D` → Seleciona próxima ocorrência da palavra selecionada  
- `ALT + Click` → Criar múltiplos cursores  
#### Atalhos do Vim (se abrir acidentalmente):

- i → inserir texto

- ESC → sair do modo edição

- :wq → salvar e sair

- :q! → sair sem salvar

[**🔗 Guia rápido do Vim**](https://www.hostgator.com.br/blog/como-usar-o-editor-de-texto-vim-do-linux/)

#### Comandos básicos do Git:
[**🔗 Hostinger - Comandos Git**](https://www.hostinger.com/br/tutoriais/comandos-git)

---

## 📚 Referências

- [Conventional Commits - v1.0.0-beta.4](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/#especificacao) – Especificação oficial de Conventional Commits, usado como guia para mensagens de commit claras.  

- [StackOverflow - Editar mensagens de commit](https://pt.stackoverflow.com/questions/61429/como-editar-uma-mensagem-de-commit-incorreta-no-git) – Tutorial passo a passo sobre como alterar mensagens de commits locais e remotos.  

- [Guia rápido do Vim (HostGator)](https://www.hostgator.com.br/blog/como-usar-o-editor-de-texto-vim-do-linux/) – Introdução ao editor Vim, atalhos básicos e dicas de uso.  

- [Hostinger - Comandos Git](https://www.hostinger.com/br/tutoriais/comandos-git) – Lista completa de comandos básicos do Git, usado para referência e consulta rápida.

## ⚡ Atalhos de Produtividade

### 📄 Edição de Código (VS Code)
- `SHIFT + ↓ / ↑` → Seleciona linhas para baixo/cima  
- `ALT + ↓ / ↑` → Move a(s) linha(s) selecionada(s) para baixo/cima  
- `SHIFT + ALT + ↓ / ↑` → Duplica a(s) linha(s) selecionada(s)  
- `CTRL + X` → Recorta a linha inteira (mesmo sem selecionar)  
- `CTRL + C` → Copia a linha inteira (mesmo sem selecionar)  
- `CTRL + SHIFT + K` → Deleta a linha atual  
- `CTRL + /` → Comenta/descomenta a linha  
- `SHIFT + ALT + A` → Comentário em bloco (`/* ... */`)

### 🔍 Navegação e Busca (VS Code)
- `CTRL + F` → Buscar no arquivo atual  
- `CTRL + H` → Substituir no arquivo atual  
- `CTRL + SHIFT + H` → Substituir em múltiplos arquivos  
- `F12` → Ir para definição  
- `ALT + ← / →` → Voltar/avançar na navegação  
- `CTRL + P` → Abrir rapidamente arquivos do projeto  
- `CTRL + SHIFT + O` → Navegar entre símbolos do arquivo atual  
- `CTRL + SHIFT + P` → Paleta de comandos

### 🖥️ Janela e Multitarefas (VS Code)
- `CTRL + B` → Mostrar/ocultar sidebar  
- `CTRL + \` → Dividir editor em painéis  
- `CTRL + 1 / 2 / 3` → Focar em cada coluna do editor  
- `CTRL + TAB` → Alternar entre arquivos recentes  
- `CTRL + W` → Fechar editor atual  
- `CTRL + K Z` → Zen Mode  

### 🌱 Git no VS Code
- `CTRL + SHIFT + G` → Abrir **Source Control**  
- `CTRL + SHIFT + G G` → Commit rápido  
- `CTRL + SHIFT + G P` → Push para o remoto  
- `CTRL + SHIFT + G U` → Pull/Sync com o remoto  
- `CTRL + SHIFT + '` → Novo terminal integrado  
- `CTRL + SHIFT + ~` → Alternar entre terminais integrados  
- `CTRL + SHIFT + C` → Abrir terminal externo na pasta do projeto  
- `CTRL + SHIFT + E` → Ir para Explorer (arquivos)

### 🖥️ Atalhos de Terminal / CLI
- `↑ / ↓` → Navegar pelo histórico de comandos  
- `!!` → Repetir último comando  
- `!git` → Reexecutar último comando que começa com `git`  
- `CTRL + R` → Buscar por comandos anteriores (reverse search)  
- `TAB` → Autocompletar nome de comando/arquivo/branch  
- `CTRL + A` → Ir para o início da linha  
- `CTRL + E` → Ir para o final da linha  
- `CTRL + U` → Apagar da posição atual até o início da linha  
- `CTRL + K` → Apagar da posição atual até o fim da linha  
- `CTRL + W` → Apagar a palavra anterior  
- `CTRL + L` → Limpar a tela (mesmo que `clear`)  
- `CTRL + C` → Cancelar o comando atual  
- `CTRL + D` → Sair do terminal  