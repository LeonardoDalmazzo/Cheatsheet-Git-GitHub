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
