# 📑 Cheatsheet Git & GitHub

“manual” de Git & GitHub pra você usar como referência rápida.

---

## 🔹 Fluxo básico com boas práticas

```

# Garantir main atualizada
git checkout main
git pull origin main

# Criar branch nova (feature/fix/hotfix)
git checkout -b feature/nome-da-feature

# Fazer alterações e salvar
git add .
git commit -m "feat: descrição curta e objetiva"

# Subir branch
git push origin feature/nome-da-feature

# Abrir PR no GitHub → revisar → merge
# Atualizar local depois do merge
git checkout main
git pull origin main

```

---

