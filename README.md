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
CTRL + SHIFT + V

#### Atalhos do Vim (se abrir acidentalmente):

- i → inserir texto

- ESC → sair do modo edição

- :wq → salvar e sair

- :q! → sair sem salvar

[**🔗 Guia rápido do Vim**](https://www.hostgator.com.br/blog/como-usar-o-editor-de-texto-vim-do-linux/)

#### Comandos básicos do Git:
[**🔗 Hostinger - Comandos Git**](https://www.hostinger.com/br/tutoriais/comandos-git)

---