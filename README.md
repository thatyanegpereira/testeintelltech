# testeintelltech
Parte 1:

Ferramenta utilizada: Cypress

Justificativa: O Cypress é uma ferramenta moderna para automação de testes end-to-end em aplicações web, adequado especialmente para testes funcionais como os cenários solicitados para esse teste, devido a capacidade de simular interações de forma eficiente. 

Dados de entrada utilizados: e-mails e senhas válidas para login. 

1.1 Registro e Login de Usuário
![image](https://github.com/user-attachments/assets/4d373e6d-acd1-4104-8f66-84618c0f1fd6)
![image](https://github.com/user-attachments/assets/f01b7451-c77a-4992-a625-ce8794087a83)
![image](https://github.com/user-attachments/assets/d689b73f-700f-4a8e-9c05-bccefae21c84)

1.2 Navegação e Pesquisa de Produtos 
![image](https://github.com/user-attachments/assets/4d37642d-f489-4890-be82-3d231ac3f218)
![image](https://github.com/user-attachments/assets/89e370b7-f0ea-470d-8fe3-5daaeb1d672e)

Parte 2: Teste de Integração 

Ferramenta utilizada: Postman 

Justificativa: Postman é uma ferramente extremamente eficaz para testes de integração de APIs de forma estruturada, permitindo autimatizar requisições HTTP e validar respostas. 

2.1 Registro e Login

2.1.1 Registro: Enviaria uma requisição POST para a API de registro, verificando se o status de resposta é 200 (OK).

2.1.2 Login: Enviaria uma requisição POST para a API de login, verificando se o token de autenticação é retornado corretamente.

2.2 Navegação e Pesquisa de Produtos 

2.2.1 Navegação entre categorias: Enviaria requisições GET para URLs das categorias dos produtos, verificando se o status de resposta é 200 em todas elas. 

2.2.2 Pesquisa de produtos: Enviaria uma requisição do tipo GET para a API de busca de produtos com termos específicos, validando se os resultados correspondem aos termos de pesquisa. 

Resultado final:
![image](https://github.com/user-attachments/assets/0818ceee-8031-4e60-b790-a1670d02555d)







