(Projeto em andamento!)

# ** React + Spring Boot + MongoDB**

Este é um sistema simples para consulta de API com informações de universidades brasileiras.

O objetivo desse projeto é criar uma API com base na University Domains and Names API  (https://github.com/Hipo/university-domains-list-api), que retorne somente dados das universidades do Brasil.
Aém disso,no frontend de haver disponibilidade para consultar (listar, paginar, filtrar e exibir detalhes) desta API.

Deverão ser consideradas as seguintes tecnologias;

- Backend desenvolvido em Java;
- API rodando em Spring Boot;
- Frontend de consulta à API desenvolvido com framework React;


## **Configuração do Projeto:**

Siga as instruções.


### **JAVA**

Verifique a versão do seu Java. Caso não tenha a versão 14, continue a instalação

`$ java --version`

Baixe a versão do Java 14 direto no site da Oracle. Atenção! Não é OpenJDK. Fique a vontade para instalar conforme sua maneira. Porém, para prosseguir com as instrução abaixo, você deve baixar a versão binária 'Linux Compressed Archive' no seguinte enredeço: https://www.oracle.com/br/java/technologies/javase/jdk14-archive-downloads.html

Navegue até o diretório onde o download foi realizado e execute os comandos:

`$ sudo tar -xfv jdk-14.0.2_linux-x64_bin.tar.gz`

Mova o java para /usr/lib/jvm. 

`$ sudo mkdir -p /usr/lib/jvm` (Caso o diretório não exista)

`$ sudo mv ./jdk-14.0.2 /usr/lib/jvm/`

Prossiga!

`$ sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk-14.0.2/bin/java" 1 `

`$ sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk-14.0.2/bin/javac" 1`

Execute as permissões

`$ sudo chmod a+x /usr/bin/java`

`$ sudo chmod a+x /usr/bin/javac`

`$ sudo chown -R root:root /usr/lib/jvm/jdk-14.0.2`

Por último, selecione o Java 14 caso tenha outras versões instaladas

`$ sudo update-alternatives --config java`

`$ sudo update-alternatives --config javac`

Verifique a versão do java novamente
`$ java --version`


### **MongoDB**

Siga os comandos abaixo para instalar a versão estável mais recente do MongoDB:

`$ wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`

`$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list`

`$ sudo apt-get update`

`$ sudo apt-get install -y mongodb-org`

`$ sudo systemctl start mongod`

Qualquer erro durante a instalação, você pode consultar o manual para possíveis correções: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Vamos criar o database!

Acessar o  MongoDB

`$ mongo`

Criar um documento

`$ use universities`

Criar uma collection

`$ db.createCollection('university')`


### **BACKEND SPRING BOOT**

Atualize o repositório do ubuntu

`$ sudo apt update`

Instale o MAVEN

`$ sudo apt install maven`

Verifique a instalação com o comando

`$ mvn -version`

Tudo ok? Agora siga até o diretóro do projeto e acesse a subpasta /backend

Instale as dependências do Maven

`$ mvn clean install`

Execute o Spring Boot através da IDE de sua preferência ou por linha de comando

`$ mvn spring-boot:run`

Deixe executando!

### **FRONTEND REACT**

Instale o NodeJs. Nesse projeto foi utilizado a versão 14.16.0.

`$ sudo apt install nodejs`

Agora, siga até o diretóro do projeto, acesso a pasta /frontend e instale as dependências.

`$ npm install`

Pronto! Inicie o projeto

`$ npm start`

Ele será executado no seguinte local: http://locahost:3000
