# **API Gateway**

Este es el proyecto de la API Gateway que actúa como punto de entrada para gestionar la comunicación entre los microservicios del sistema, en este caso, **Booking** y **Liquor**. La API Gateway utiliza **NATS** para coordinar y comunicar los mensajes con los microservicios y tiene implementado **Swagger** para facilitar la documentación y pruebas de las peticiones.

## **Características**
- Manejo centralizado de las peticiones dirigidas a los microservicios.
- Comunicación eficiente y asincrónica entre microservicios usando **NATS**.
- Documentación interactiva de la API mediante **Swagger**.
- Fácil configuración mediante variables de entorno.

---

## **Requisitos**
Asegúrate de tener instalados los siguientes requisitos antes de ejecutar el proyecto:

- **Node.js**: >= 16.x
- **NATS Server**: >= 2.x
- **npm** o **yarn**

---

## **Instalación**
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/apigateway.git
   cd apigateway
    npm install
---
2. Configura el archivo .env con las siguientes variables:
   ```bash
    PORT=3000
    NATS_SERVERS=nats://localhost:4222
---

3. Inicia el servidor:
```bash
npm run start:dev
 ```

4. Documentacion de swagger:
## Swagger UI

Este microservicio incluye documentación con Swagger, puedes acceder a la interfaz de Swagger en:
http://localhost:3000/api/docs

Y listo tienes una apigateway que comunica tus peticiones con los microservicios correspondientes

