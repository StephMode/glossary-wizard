# About this Project

Two experiences helped shaping this idea:

1. Working on a project in `JavaScript` with a friend and asking oursevles:

> ❓ "How might we collect all definition and taxonomy we agreed upon for the project in one place both easily accessible and editable?"

2. Reading this paragraph of _The Pragmatic Programmer_ by David Thomas and Andrew Hunt:

> 📖 **Maintain a Glossary**
>
> As soon as you start discussing requirements, users and domain experts will use **certain terms** that have **specific meaning** to them. They may differentiate between a "client" and a "customer," for example. It would then **be inappropriate to use either word casually** in the system.
>
> Create and maintain **a project glossary one place that defines all the specific terms and vocabulary** used in a project. All participants in the project, from end users to support staff, should use the glossary to ensure consistency. This implies that the glossary needs to be widely accessible **a good argument for online documentation**.
>
> _Highlights in the text mine._

These experiences sparked the idea to create a tool for **small develeopment teams** and **individual developers** so that they can create project glossaries and documentations on the fly.

Furthermore, I've just always been passionate about good documentation and effective written communication. This is why I want to create an easy-to-use glossary and documentation "wizard" for my own projects and other developers like me.

# Learning & Project Goals

My learning and Project Goals are to put to practise what I've learned about these technologies and tools:

- TypeScript
- Jest

Also, I want to embrace these programming paradigms and methodoligies:

- Test Driven Development
- Object Orientied Programming

# Technology Stack

This project is build using these technologies:

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# Infos on Project Setup with React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
