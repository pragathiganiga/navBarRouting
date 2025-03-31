# React & Next.js Navbar Routing

This project is a simple React and Next.js application that implements a navigation bar with routing to multiple pages.

## Features
- Navigation bar with multiple routes
- Uses Next.js for routing
- Pages include Home, About, Contact, Projects, Qualification, and Certificates
- Simple and clean UI

## Technologies Used
- React
- Next.js

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/navbar-routing.git
   cd navbar-routing
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm run dev
   ```

## File Structure
```
navbar-routing/
│── components/
│   ├── Navbar.tsx
│── pages/
│   ├── index.tsx (Home)
│   ├── about.tsx
│   ├── contact.tsx
│   ├── projects.tsx
│   ├── qualification.tsx
│   ├── certificates.tsx
│── package.json
│── README.md
```

## Code Overview

### Navbar Component (`Navbar.tsx`)
```typescript
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <Link href="/">Home</Link> | 
      <Link href="/about">About</Link> | 
      <Link href="/contact">Contact</Link> | 
      <Link href="/projects">Projects</Link> | 
      <Link href="/qualification">Qualification</Link> | 
      <Link href="/certificates">Certificates</Link>
    </nav>
  );
};

export default Navbar;
```

### Home Page (`index.tsx`)
```typescript
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Home Page</h1>
    </div>
  );
};

export default Home;
```

### About Page (`about.tsx`)
```typescript
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
    </div>
  );
};

export default About;
```

### Contact Page (`contact.tsx`)
```typescript
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact Us</h1>
    </div>
  );
};

export default Contact;
```

### Projects Page (`projects.tsx`)
```typescript
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
```

### Qualification Page (`qualification.tsx`)
```typescript
import Navbar from '../components/Navbar';

const Qualification = () => {
  return (
    <div>
      <Navbar />
      <h1>Qualification</h1>
    </div>
  );
};

export default Qualification;
```

### Certificates Page (`certificates.tsx`)
```typescript
import Navbar from '../components/Navbar';

const Certificates = () => {
  return (
    <div>
      <Navbar />
      <h1>Certificates</h1>
    </div>
  );
};

export default Certificates;
```

## Contributing
Feel free to submit pull requests to improve the project.
