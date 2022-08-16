# Executar o código

- git clone https://github.com/guibson91/stencil
- [Stencil Project] npm install
- [Stencil Project] npm run build
- [Stencil Project] npm link

- [Ionic Project] npm install
- [Ionic Project] npm link stencil
- [Ionic Project] ionic serve

# Jasmine Test

- Foi realizado teste nas duas requisições do sistema
- getLocalPokemons: Results com 1000 elementos a ser paginado de 25 em 25 na view.
- getServerPokemons: Results com 25 elementos a ser paginado diretamente do server.
- Executar o teste: ng test --main src/app/services/shared.service.spec.ts

# Capacitor Utils

- [Ionic Project] ionic capacitor add android
- [Ionic Project] cordova-res android --skip-config --copy
- [Ionic Project] npm link stencil
- [Ionic Project] ionic capacitor build android

# Stencil Utils

- Inicializar: npm init stencil components stencil-components
- Criar component: npx stencil generate my-component
- Rodar projeto: npm start
- Build e Link: npm run build && npm link
- Utilizar em projeto específico: npm link stencil-components

# Observações

- Foi utilizado o Firebase para realizar autenticação e cadastro de usuários, uma vez que já tinha criado uma série de classes e componentes que auxiliam nessa integração.
- Splashscreen desaparece após a página de loading receber o resultado do listenUser e ter a
  decisão de direcionar para 'home' ou para o 'login'.
- Foi construído a listagem utilizando componente StencilJS, conforme solicitado no desafio. Componente esse que foi reaproveitado nas páginas HOME e LISTAGEM.
- HOME paginação realizada localmente.
- LISTAGEM paginação realizada conforme next e previous do response fornecido.