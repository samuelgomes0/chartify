# Chartify

**Desvende suas estatísticas musicais de forma visual e interativa.**

Chartify é uma aplicação web que transforma seus dados de audição no Spotify em gráficos e estatísticas personalizadas. Descubra seus artistas favoritos, músicas mais ouvidas, e explore suas tendências musicais ao longo do tempo com uma interface moderna e intuitiva. Ideal para qualquer entusiasta da música que deseja mergulhar fundo em seus hábitos de audição.

## 🛠 Tecnologias Utilizadas

- **[Vite](https://vitejs.dev/)**
- **[Axios](https://axios-http.com/ptbr/)**
- **[Node.js](https://nodejs.org/en)**
- **[React.JS](https://react.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Spotify API](https://developer.spotify.com/documentation/web-api)**

## ✨ Funcionalidades Principais

- **Análise de Músicas e Artistas Favoritos**  
   Visualize os artistas e músicas que você mais ouviu, filtrados por períodos como últimos 30 dias, últimos 6 meses ou todos os tempos.

- **Estatísticas de Gêneros e Tendências**  
   Veja um resumo detalhado de quais gêneros musicais você tem explorado e descubra suas tendências musicais ao longo do tempo.

- **Integração Direta com o Spotify**  
   Utilize sua conta Spotify para fazer login e permitir que Chartify acesse suas estatísticas, mantendo sua privacidade e segurança.

- **Interface Gráfica Intuitiva**  
   Gráficos interativos e personalizáveis para uma experiência de análise divertida e envolvente.

## ⚙️ Instalação

Para instalar esta aplicação em sua máquina local, siga estas etapas:

1. Clone este repositório em sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/chartify.git
   ```

2. Navegue até o diretório da aplicação no terminal:
   ```bash
   cd chartify
   ```

3. Execute o comando para instalar as dependências necessárias:
   ```bash
   npm install
   ```

4. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis com os seus respectivos valores (é possível encontrá-los [aqui](https://developer.spotify.com/dashboard)):

   ```bash
   VITE_SPOTIFY_CLIENT_ID=SEU_CLIENT_ID
   VITE_SPOTIFY_CLIENT_SECRET=SEU_CLIENT_SECRET
   VITE_SPOTIFY_REDIRECT_URI=SUA_REDIRECT_URI
   ```

5. Execute o comando para iniciar o servidor local:
   ```bash
   npm run dev
   ```

6. Acesse a página inicial da aplicação no seu navegador (por exemplo, [http://localhost:5173](http://localhost:5173)).

## 🤝 Contribuindo

Se você deseja contribuir para este projeto, siga os passos:

1. Faça um fork deste repositório.
2. Crie uma nova branch com a sua funcionalidade (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionar minha nova feature'`).
4. Envie para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## 📝 Licença

Este projeto está licenciado sob a **MIT License** – veja o arquivo [LICENSE](LICENSE) para mais detalhes.
