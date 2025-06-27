Passos para utilizar o projeto

1. Clone o repositório
   git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
2. Instale as dependências
   npm install
3. Execute a aplicação
   npm run dev


Este projeto é uma aplicação front-end desenvolvida com React em VITE que interage com uma API RESTful para realizar o gerenciamento de usuários. A interface permite visualizar, cadastrar, editar e excluir usuários de forma simples e eficiente.

Através de chamadas à API utilizando Axios, a aplicação consome a rota /usuarios do back-end para manter a lista de usuários sempre atualizada.

🧩 Funcionalidades
✅ Exibição de mensagem de boas-vindas ao usuário.

🔍 Requisição GET para listar todos os usuários da API.

📝 Formulário com campos para nome e email.

➕ Envio de dados via POST para cadastro de novos usuários.

✏️ Edição de usuários com PUT na rota /usuarios/:id.

❌ Exclusão de usuários com DELETE na rota /usuarios/:id.

🔄 Atualização automática da lista após cada operação.

🛠️ Tecnologias utilizadas
React (hooks: useState, useEffect)

Axios para comunicação HTTP

JavaScript ES6+

HTML/CSS básico (pode ser adaptado para usar bibliotecas como Tailwind ou Material UI)
