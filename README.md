# Ambi_Sight

Privacy-preserving organisational ambidexterity diagnostic platform powered by federated learning.

## About

Ambi_Sight is a web-based SaaS platform that delivers organizational ambidexterity diagnostics built from DBA research. The platform enables organizations to:

- **Measure** exploration and exploitation capabilities across key organizational drivers
- **Assess** the balance between exploration and exploitation activities
- **Identify** organizational ambidexterity style profiles (structural, sequential, contextual)
- **Learn** through privacy-preserving federated learning across organizations (future feature)

The platform analyzes multiple drivers including organizational design, market orientation, dynamic capabilities, culture, agility, and leadership to provide comprehensive insights without centralizing sensitive organizational data.

## Tech Stack

### Frontend & Platform
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React 19** - Latest React features

### Architecture
- **Route Groups** - Organized public vs authenticated routes
- **Mock Authentication** - Development auth system (to be replaced with production provider)
- **Component Library** - Reusable UI components (Button, Card, Input, etc.)
- **TypeScript Types** - Comprehensive type definitions for OA models

### Future Integration
- **Python ML Backend** - Scoring, explanations, and federated learning
- **Auth Provider** - Clerk, Auth0, or Auth.js
- **Database** - PostgreSQL via Prisma, Supabase, or Neon

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Imomazin/ambisight-app.git
cd ambisight-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials

The platform currently uses mock authentication for development:

**Admin User:**
- Email: `admin@example.com`
- Password: `admin123`
- Role: Org Super Admin

**Viewer User:**
- Email: `viewer@example.com`
- Password: `viewer123`
- Role: Leader Viewer

## Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
```

## Project Structure

```
ambisight-app/
├── app/
│   ├── (public)/          # Public routes (landing, login, register)
│   │   ├── page.tsx       # Landing page
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── (app)/             # Protected routes (require authentication)
│   │   ├── dashboard/     # Main dashboard
│   │   ├── diagnostics/   # OA diagnostics
│   │   └── admin/         # Admin console
│   ├── layout.tsx         # Root layout with AuthProvider
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/            # Layout components
│   │   └── AppShell.tsx
│   └── nav/               # Navigation components
│       ├── Sidebar.tsx
│       └── Topbar.tsx
├── context/
│   └── AuthContext.tsx    # Mock authentication context
├── lib/
│   ├── types.ts           # Core data models (OA types, diagnostics, etc.)
│   └── auth/
│       └── types.ts       # Authentication types and helpers
└── docs/
    └── architecture.md    # Architecture documentation
```

## Routes

### Public Routes
- `/` - Landing page with platform overview
- `/login` - User authentication
- `/register` - New organization registration (disabled in demo)

### Protected Routes (Authentication Required)
- `/dashboard` - Main dashboard with OA overview
- `/diagnostics` - Diagnostic management and history
- `/admin` - Admin console (role-based access)

## Development Workflow

### Branching Strategy
- `main` - Production-ready code
- `feature/<name>` - New features
- `chore/<name>` - Maintenance tasks
- `fix/<name>` - Bug fixes

### Creating a Pull Request

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

3. Run checks before pushing:
   ```bash
   npm run lint
   npm run build
   ```

4. Push and create PR:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request with:
   - Clear title describing the change
   - Description of what changed and why
   - Testing instructions
   - Any relevant screenshots

### Commit Message Convention
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## User Roles

The platform supports five user roles with different permission levels:

1. **Platform Admin** - Full platform access
2. **Org Super Admin** - Full organization access
3. **Org Admin** - Organization management
4. **Consultant** - Diagnostic access and insights
5. **Leader Viewer** - Read-only dashboard access

## Next Steps

### Immediate Priorities
1. **Authentication** - Integrate production auth provider (Clerk/Auth0/Auth.js)
2. **Database** - Set up PostgreSQL with Prisma ORM
3. **API Routes** - Implement diagnostic API endpoints
4. **ML Integration** - Connect Python ML backend for scoring

### Future Enhancements
1. **Diagnostic Engine** - Full diagnostic workflow
2. **Data Visualization** - Charts and graphs for OA scores
3. **Team Collaboration** - Multi-user diagnostic participation
4. **Federated Learning** - Privacy-preserving cross-org learning
5. **Reporting** - Exportable diagnostic reports

## Contributing

This is a private research project. For questions or collaboration inquiries, please contact the project maintainer.

## License

Proprietary - All rights reserved
