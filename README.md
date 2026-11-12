# 📚 API RESTful de Biblioteca Digital - Arquitectura MVC

Trabajo Práctico para el **Curso de Backend Developer (UTN.BA)**. Consiste en una API RESTful desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB (Mongoose)** implementando el patrón de diseño **MVC** para gestionar una colección de libros.

## 🛠️ Tecnologías Utilizadas

* **Lenguaje:** TypeScript
* **Entorno de ejecución:** Node.js (usando `process.loadEnvFile()`)
* **Framework Web:** Express.js
* **Base de Datos:** MongoDB con Mongoose

## ⚙️ Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd tp-biblioteca
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Crear un archivo `.env` en la raíz del proyecto (guiándose por `.env.example`):
   ```env
   PORT=3000
   URI_DB=mongodb://127.0.0.1:27017/biblioteca_utn
   ```

4. **Ejecutar el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Compilar y ejecutar en producción:**
   ```bash
   npm run build
   npm start
   ```

## 🔄 Endpoints Disponibles

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `GET` | `/books` | Listar todos los libros |
| `GET` | `/books/:id` | Obtener un libro por ID |
| `POST` | `/books` | Crear un nuevo libro |
| `PATCH` | `/books/:id` | Actualizar un libro existente |
| `DELETE` | `/books/:id` | Eliminar un libro |