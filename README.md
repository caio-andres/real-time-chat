# Real-time Chat

### Technologies Used

#### `Front-end`

- **Programming Language:** TypeScript
- **Libraries:**
  - React.js
  - socket.io-client
  - uuid
  - styled-components
  - react-icons
- **Build Tool:** Vite

#### `Back-end`

- **Programming Language:** TypeScript
- **Framework:** NestJS
- **Libraries:**
  - @nestjs/platform-socket.io
  - @nestjs/websockets
  - reflect-metadata
  - rxjs

### Scripts

- **start:** "vite" (For Front-end)
- **build:** "vite build" (For Front-end)
- **test:** "react-scripts test" (For Front-end)
- **start:** "nest start" (For Back-end)
- **build:** "nest build" (For Back-end)
- **lint:** "eslint \"{src,apps,libs,test}/\*_/_.ts\" --fix" (For Back-end)
- **test:** "jest" (For Back-end)

# Getting started

### `Clone the repository`

```bash
git clone https://github.com/caio-andres/real-time-chat.git
```

### `Run back-end`

#### Open a terminal

```bash
cd chat-api
```

```bash
yarn install
```

```bash
nest start --watch
```

### `Run front-end`

#### Open a second terminal without close the first

```bash
cd chat-interface
```

```bash
yarn
```

```bash
yarn start
```

#### Use the URL `localhost:3000` in your browser

# Architecture Overview

### Back-end:

- Developed using TypeScript with the NestJS framework.
- Structured with a `src` folder containing modules such as `users`, `auth`, etc., each with its respective controller, service, module, and DTO files.
- Utilization of decorators and dependency injection for defining routes, middleware, and database connections.

### Front-end:

- Developed in React.js to create the user interface.
- Structured with a `src` folder containing components, pages, and hooks directories.
- Components directory holds reusable UI components, pages directory contains pages of the application, and hooks directory stores custom hooks for managing state and side effects.
- Utilization of styled-components for styling components.

### Communication between back-end and front-end:

- The front-end communicates with the back-end using WebSocket connections.
- Socket.IO is used for real-time communication between the front-end and back-end.

### Architecture Benefits:

- Strong typing with TypeScript ensures code robustness and reduces runtime errors.
- NestJS provides a modular and scalable architecture, making it easy to add new features and modules.
- React.js offers a component-based architecture, enabling reusability and maintainability of UI components.
- Utilization of styled-components allows for better component styling management and theming.

# Project Developer and README Author

```
@caio_andress
```
