### API Instrumentos

- API para conservatorio - docentes de música
- Conexión con Base de datos relacional PostgreSQL
- Contiene validaciones de datos con dependencia Joi version 17.13.3
- Hash para las contraseñas
- Tokens
- ORM Prisma para la creacion de tablas y schema

## Entorno de desarrollo

| Node.js | PostgreSQL |

### Dependencias utilizadas

| Nombre        | Version  |
| ------------- | -------- |
| express       | v6.4.5   |
| dotenv        | v16.4.5  |
| cors          | v2.8.5   |
| express-jwt   | v8.4.1   |
| joi           | v17.13.3 |
| bcrypt        | v^5.1.1  |
| uuid          | v10.0.0  |
| prisma/client | v5.17.0  |
| jsonwebtoken  | v9.0.2   |

### Tablas en PostgreSQL

| Nombre                        | Contenido                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------- |
| instruments                   | Contiene el id del instrumento musical, descripción, tipo y nombre                                         |
| users                         | Contiene el id de los usuarios, nombres , email, contraseñas y su rol, sea usuario o administrador         |
| users_assignated_instruments | Contiene a los usuarios con sus instrumentos asignados, relacion entre id del usuario y id del instrumento |

### Endpoints

- GET/api/instruments
- - Para obtener nombre, descripcion y tipo de instrumento

- POST/api/register/
- - Para registrar un usuario; El valor por defecto al registrar un usuario es USER, podemos modificar este valor colocando el rol, sea USER o ADMIN
  - - {
  "email": "m-fernandez988@hotmail.com",
  "name": "Gabriel",
  "password": "1010"
   "role":"ADMIN"
  }
   

- POST/api/login/
- - Para loguear nuestro usuario creado por ejemplo
- {
  "email": "m-fernandez988@hotmail.com",
  "name": "Gabriel",
  "password": "1010"
  }

- POST/api/instrument-assigned
- - Para asignar un instrumento a un usuario por ejemplo
- - - {
      "userId": 1,
      "instrumentId": 1
      }

- GET/api/profile/2
- - Para obtener el usuario creado segun su id
