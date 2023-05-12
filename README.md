# Spotizou (em desenvolvimento)

Aplicação que permite conferir os seus artistas favoritos e as suas músicas mais tocadas no Spotify. Ele utiliza a API do Spotify para acessar e exibir informações sobre suas preferências musicais.

## 🛠️ Tecnologias utilizadas

Esta aplicação usa as seguintes tecnologias:

- **[Axios](https://axios-http.com/ptbr/)** - biblioteca JavaScript amplamente utilizada para fazer requisições HTTP.
- **[Node.JS](https://nodejs.org/en)** - ambiente de tempo de execução JavaScript.
- **[React.JS](https://react.dev/)** - biblioteca JavaScript de código aberto amplamente utilizada para criar interfaces de usuário.
- **[Styled Components](https://styled-components.com/)** - biblioteca para estilização de componentes em aplicações React.

## 🔧 Instalação

Para instalar esta aplicação em sua máquina local, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório da aplicação no terminal.
3. Execute o comando `npm install` para instalar as dependências necessárias.
4. Crie um arquivo `.env` com as seguintes variáveis e atribua a elas os seus respectivos valores (é possível encontrá-los [aqui](https://developer.spotify.com/dashboard)):

```
REACT_APP_CLIENT_ID=SEU_CLIENT_ID
REACT_APP_CLIENT_SECRET=SEU_CLIENT_SECRET
REACT_APP_REDIRECT_URI=SUA_REDIRECT_URI
```

5. Execute o comando `npm start` para iniciar o servidor.
6. Acesse a página inicial da aplicação no seu navegador (por exemplo, http://localhost:3000).

## 🤝 Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar um pull request. Antes de enviar um pull request, certifique-se de seguir estas etapas:

1. Crie um fork deste repositório.
2. Crie um branch para sua nova funcionalidade (`git checkout -b my-new-feature`).
3. Faça as alterações necessárias.
4. Commit suas alterações (`git commit -am 'Add some feature'`).
5. Envie para o branch (`git push origin my-new-feature`).
6. Crie um novo pull request.

## 📝 Licença

Esta aplicação está licenciada sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.
