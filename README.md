# 🖼️ Galeria de Artes Online - Azure Cloud

> Projeto Full Stack desenvolvido utilizando serviços modernos de computação em nuvem da Microsoft Azure.

<div align="center">

[![Azure Static Web Apps](https://img.shields.io/badge/Azure-Static_Web_Apps-blue?style=for-the-badge&logo=microsoftazure)](https://azure.microsoft.com/)
[![Azure Functions](https://img.shields.io/badge/Azure-Functions_Python-F2C811?style=for-the-badge&logo=azurefunctions)](https://azure.microsoft.com/en-us/products/functions/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![SQL](https://img.shields.io/badge/Database-Azure_SQL-CC2927?style=for-the-badge&logo=microsoftsqlserver)](https://azure.microsoft.com/)

</div>

---

## 👨‍🎓 Identificação do Aluno

| Nome | Matrícula |
| :--- | :--- |
| **Marcus Vinicius Azevedo Moreira** | **202308752103** |

---

## 🚀 Sobre o Projeto

Este projeto consiste em uma aplicação web completa para exibição de obras de arte. O sistema utiliza uma arquitetura **Serverless** e **Cloud Native**, onde o frontend consome dados de uma API Python hospedada na Azure, que por sua vez consulta um banco de dados relacional e um armazenamento de objetos para imagens.

### 🌐 Acesse o Projeto Online
👉 **[Clique aqui para ver a Galeria no Ar](https://proud-flower-0454a3e0f.3.azurestaticapps.net)**

---

## 🛠️ Arquitetura e Tecnologias

O projeto foi estruturado em microsserviços e componentes independentes:

| Componente | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Frontend** | **React (Vite)** | Interface moderna estilo "Netflix", responsiva e hospedada no **Azure Static Web Apps**. |
| **Backend** | **Azure Functions** | Função Serverless em **Python** (HTTP Trigger) que serve como API para o frontend. |
| **Banco de Dados** | **Azure SQL** | Banco relacional na nuvem que armazena os metadados (Nome, Artista, Descrição). |
| **Armazenamento** | **Blob Storage** | Container público na Azure que hospeda as imagens das obras em alta resolução. |
| **DevOps** | **GitHub Actions** | Pipeline de CI/CD configurado para deploy automático do Frontend e Backend a cada commit. |

---

## ✅ Checklist de Requisitos (AS)

O projeto cumpre 100% dos requisitos solicitados:

- [x] **Azure Function (Backend):** Criada com HTTP Trigger em Python.
- [x] **Banco de Dados:** Leitura de dados feita via Azure SQL Database.
- [x] **Blob Storage:** Container configurado com acesso público e imagens hospedadas.
- [x] **Frontend:** Desenvolvido em React, consumindo a API e exibindo imagens.
- [x] **CI/CD:** Deploy automatizado via GitHub Actions configurado e funcional.
- [x] **Acesso Público:** Aplicação acessível via URL na web.

---

## 📸 Screenshots

### Tela Principal (Estilo Galeria)
*(Adicione aqui um print da sua tela final se quiser, ou deixe apenas a descrição)*

---

## ⚙️ Como Rodar Localmente

Caso queira testar o projeto em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/iwillsback/galeria-arte-online-azure.git](https://github.com/iwillsback/galeria-arte-online-azure.git)