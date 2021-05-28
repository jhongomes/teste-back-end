### Contexto

- Construir uma API REST capaz de realizar o `C.R.U.D.` manipulando os valores de entrada, processando e retornando os dados, mensagens e status coerentes.

<br>

### 🚀 Tecnologias
<br>
  Este projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://docs.microsoft.com/pt-br/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
- [TypeORM](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/tools/swagger-ui/)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

##### RF

- A entidade de Usuário possuir as seguintes informações:
  - id: string, (primário)(gerado uuid),
  - name: string,
  - lastname: string,
  - nickname: string, (único),
  - email: string, (único),
  - password: string,
  - cpf: string , (único),
  - birth_date: string,
  - phone: string,
  - address: string,
  - bio: string,
  - createdAt: Date,
  - updatedAt: Date

- Métodos:
  - [] Cria um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.
    - Se nickname, email, cpf já existe, retornar status e mensagem de erro.
  - [] Listar todos os usuários cadastrados.
  - [] Listar um usuário pelo email passado como parâmetro: retorna um único usuário com seus dados.
  - [] Alterar o name, lastname, nickname, email, cpf, birth_date, phone, address e bio  recebido no corpo da requisição, baseado no id(uuid) recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.
    - Se o nickname, email e cpf passado já existir, deve retornar status e mensagem de erro.
  - [] Deletar um usuário baseado no id recebido como parâmetro de rota: retorna o status de sucesso.

### ❗ Como baixar
<br>

Para clonar e executar esse projeto, você precisa do [Git](https://git-scm.com/), [Nodejs v12.16](https://nodejs.org/en/) ou superior + [Yarn 1.22](https://yarnpkg.com/) ou superior  instalado no seu computador. Digite na sua linha de comando:

``` bash

    # Clonar o repositório
    $ git clone https://github.com/jhongomes/teste-back-end.git

    # Entrar no repositório
    $ cd test-back-end

    # Instalar as dependências
    $ yarn

    # Abrir projeto
    $ code .

    # Execute o projeto
    $ yarn dev


```

### 🔗 Banco de dados

 Para estabelecer uma conexão com o banco, você precisa de [Docker v19.03](http://docs.docker.oeynet.com/toolbox/toolbox_install_windows/) ou superior instalado no seu computador. Digite na sua linha de comando:

 ``` bash
    # Criar uma imagem do postgres com docker
    $ docker run --name BACKEND -e POSTGRES_PASSWORD=docker -p  5432:5432 -d postgres

    # Executar o banco
    $ docker start BACKEND

    # Verificar a url host de conexão
    $ docker-machine ls

    # Configurar a url listada no comando acima dentro do 'ormconfig.json' do projeto
    ex url: 192.168.99.108



```
