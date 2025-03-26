# Usar una imagen base de Node.js
FROM node:23.9-alpine3.20

# Crear el directorio de la aplicación
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación (incluyendo index.js)
COPY . .

# Exponer el puerto 2000
EXPOSE 2000

# Iniciar la aplicación
CMD ["node", "index.js"]