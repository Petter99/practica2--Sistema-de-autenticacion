# Sistema de Autenticación (Node.js)

## Descripción
Backend para un sistema de autenticación que incluye registro, login y recuperación de contraseña, siguiendo el patrón MVC y buenas prácticas.

## Estructura del Proyecto
```
practica2/
├── app.js
├── package.json
├── .env
├── .gitignore
├── controllers/
│   └── authController.js
├── models/
│   ├── userModel.js
│   └── tokenModel.js
├── routes/
│   └── router.js
```


## Uso
- Inicia el servidor:
  ```sh
  npm start
  ```
- El servidor estará disponible en `http://localhost:3001` (o el puerto configurado).

## Endpoints
### Registro
- `POST /register`
  - Body: `{ "username": "usuario", "email": "correo", "password": "clave" }`

### Login
- `POST /login`
  - Body: `{ "username": "usuario", "password": "clave" }`

### Recuperación de contraseña
- `POST /forgot-password`
  - Body: `{ "email": "correo" }`
  - Retorna un enlace de recuperación con token.

- `POST /reset-password?token=<token>`
  - Body: `{ "password": "nuevaClave" }`

## Algoritmo de recuperación
1. El usuario solicita recuperación con su email.
2. El sistema valida que el usuario exista.
3. Se genera un token seguro y se asocia al usuario.
4. Se retorna un enlace de recuperación.
5. El usuario usa el enlace para cambiar la contraseña.
6. El sistema valida el token y actualiza la contraseña.

## Notas
- El envío de correo está simulado (el enlace se muestra en la respuesta).
- Los datos se almacenan en arrays en memoria (no persistente).
- Puedes agregar más variables al `.env` según tus necesidades.

## Autor
Pedro Canil
