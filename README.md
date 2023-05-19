# Backend da API de Gestão de Tarefas
Este é o repositório do backend de uma API de gestão de tarefas desenvolvida em TypeScript. A API permite a criação de usuários, criação de tarefas e atribuição das tarefas aos usuários cadastrados. O projeto foi desenvolvido utilizando programação orientada a objetos (POO) e uma arquitetura em camadas para facilitar a organização e manutenção do código.

## Tecnologias utilizadas
O backend da API de gestão de tarefas foi desenvolvido utilizando as seguintes tecnologias e frameworks:

### TypeScript
* Uma linguagem de programação que adiciona recursos de tipagem estática ao JavaScript, fornecendo assim maior segurança e produtividade durante o desenvolvimento.

### 
### Express: 
* Um framework web rápido e minimalista para Node.js, utilizado para construir a infraestrutura da API e tratar as requisições HTTP.

### Cors: 
* Um middleware que permite requisições de origens diferentes na API, fornecendo mais segurança e controle sobre a comunicação entre o frontend e o backend.

### Dotenv: 
* Uma biblioteca que carrega variáveis de ambiente a partir de um arquivo .env, permitindo configurar facilmente as informações sensíveis e personalizáveis do projeto.### Jsonwebtoken: 
* Uma biblioteca utilizada para gerar e verificar tokens de autenticação JWT (JSON Web Tokens), garantindo a segurança das rotas e autenticação dos usuários.

### Knex: 
 * Uma biblioteca SQL query builder para Node.js, utilizada para interagir com o banco de dados SQLite3 e realizar operações como criação, leitura, atualização e remoção de registros.

### SQLite3: 
* Um banco de dados SQL embutido que armazena as informações da API de gestão de tarefas.

### UUID: 
* Uma biblioteca utilizada para gerar identificadores únicos para os usuários e tarefas, garantindo a integridade e unicidade dos registros.

### Zod: 
* Uma biblioteca de validação de esquemas utilizada para validar e normalizar os dados de entrada da API.

# Funcionalidades
## A API de gestão de tarefas possui as seguintes funcionalidades principais:

* Cadastro de usuários: Permite a criação de novos usuários com nome, e-mail e senha.

* Autenticação de usuários: Gera tokens de autenticação JWT para os usuários, permitindo a autorização e controle de acesso às rotas protegidas.

* Criação de tarefas: Permite a criação de novas tarefas com título, descrição e data de vencimento.

* Atribuição de tarefas: Possibilita a atribuição de tarefas aos usuários cadastrados, associando um usuário responsável a uma determinada tarefa.

# Documentação
A documentação da API de gestão de tarefas está disponível no [Postman](https://documenter.getpostman.com/view/24880324/2s93m1ZjBB), com informações detalhadas sobre as rotas, parâmetros e exemplos de requisições.

# Importância e aprendizados
O desenvolvimento deste projeto foi de extrema importância para aprimorar meus conhecimentos em programação orientada a objetos (POO), arquitetura em camadas e manipulação de bancos de dados com SQL. Além disso, pude explorar a utilização de tecnologias modernas e frameworks populares, contribuindo para expandir minhas habilidades como desenvolvedor backend.

Durante o desenvolvimento, pude aplicar os princípios da programação orientada a objetos, o que me permitiu criar uma estrutura de código mais organizada e modular. A arquitetura em camadas também foi fundamental para separar as responsabilidades e facilitar a manutenção do projeto.

Manipular o banco de dados utilizando SQL e a biblioteca Knex foi uma experiência enriquecedora. Aprendi a criar consultas eficientes, gerenciar relacionamentos entre tabelas e garantir a integridade dos dados.

A escolha de tecnologias modernas, como TypeScript e Express, permitiu desenvolver a API de forma mais segura, robusta e escalável. 


Estou satisfeito com os resultados alcançados neste projeto. Através dele, consegui solidificar meus conhecimentos em POO, aprimorar minhas habilidades em SQL e fortalecer minha compreensão de conceitos de arquitetura e boas práticas de desenvolvimento de APIs.

O próximo passo será hospedar essa API na nuvem e criar um frontend para fornecer uma experiência completa aos usuários. Estou animado com as possibilidades e oportunidades que surgirão com a conclusão deste projeto.

# Como Baixar e Testar Localmente

1 - Clone o repositório executando o seguinte comando:

``git clone https://github.com/seu-usuario/to-do-list-backend.git
Substitua "seu-usuario" pelo seu nome de usuário do GitHub.``

2 - Após clonar o repositório, navegue até o diretório do projeto executando o seguinte comando:


``cd to-do-list-backend``

3 - Antes de executar o projeto, certifique-se de ter as dependências instaladas. No terminal, execute o seguinte comando para instalar as dependências listadas no arquivo package.json:

``npm install
``

Isso irá baixar e instalar todas as dependências necessárias para executar o projeto.

4 -Após a instalação das dependências, você precisará configurar as variáveis de ambiente. Renomeie o arquivo .env.example para .env e preencha as variáveis de acordo com suas configurações locais.

``
PORT = 3003

DB_FILE_PATH = ./src/database/db.db

JWT_KEY = minha_senha-segura_bananinha
JWT_EXPIRES_IN=7D ``

5 - Agora, você pode iniciar o servidor localmente executando o seguinte comando:


``npm run dev
``

Isso iniciará o servidor e você poderá acessar a API localmente no endereço http://localhost:3003.

Com o servidor em execução, você pode testar as rotas e funcionalidades da API utilizando o Postman ou qualquer outra ferramenta de cliente HTTP.

Consulte a documentação para obter informações detalhadas sobre as rotas, parâmetros e exemplos de requisições.