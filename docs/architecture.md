# Ambi_Sight Architecture

## Overview

Ambi_Sight is built as a modern Next.js web application with a clean separation between public and authenticated routes, designed for scalability and future integration with a Python ML backend for organizational ambidexterity diagnostics.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js Frontend                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Public     │  │  Protected   │  │   Admin      │      │
│  │   Routes     │  │   Routes     │  │   Console    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                           │                                 │
│                  ┌────────▼─────────┐                       │
│                  │  Auth Context    │                       │
│                  │  (Mock / Future) │                       │
│                  └──────────────────┘                       │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          │ Future: API Routes
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                Python ML Backend (Future)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ OA Scoring   │  │ Explanations │  │  Federated   │      │
│  │   Engine     │  │   Generator  │  │  Learning    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

## Route Structure

### Route Groups

The application uses Next.js App Router with route groups to organize functionality:

#### Public Routes: `app/(public)/`
- **Landing** (`/`) - Marketing page with platform overview
- **Login** (`/login`) - Authentication page
- **Register** (`/register`) - Organization signup (disabled in demo)

**Characteristics:**
- No authentication required
- Simple layout without navigation shell
- Accessible to all visitors

#### Protected Routes: `app/(app)/`
- **Dashboard** (`/dashboard`) - Main overview and quick actions
- **Diagnostics** (`/diagnostics`) - Diagnostic management
- **Admin** (`/admin`) - Organization and user management

**Characteristics:**
- Authentication required
- Full app shell with sidebar and topbar
- Role-based access control
- Automatic redirect to `/login` if unauthenticated

### Layout Hierarchy

```
app/layout.tsx (Root)
├── AuthProvider wrapper
├── Global styles and fonts
└── Metadata

app/(public)/layout.tsx
└── Minimal wrapper (just renders children)

app/(app)/layout.tsx
├── Auth guard (redirects if not authenticated)
└── AppShell (Sidebar + Topbar + main content)
```

## Authentication Model

### Current State: Mock Authentication

For development, we use a client-side mock authentication system:

**Location:** `context/AuthContext.tsx`

**Features:**
- In-memory user state
- localStorage persistence across page refreshes
- Mock user database with demo credentials
- Role-based helper functions (`hasRole`, `hasAnyRole`)

**Mock Users:**
```typescript
{
  'admin@example.com': {
    role: 'org_super_admin',
    password: 'admin123'
  },
  'viewer@example.com': {
    role: 'leader_viewer',
    password: 'viewer123'
  }
}
```

### Future State: Production Auth

Will be replaced with a production auth provider:

**Options:**
- **Clerk** - Recommended for B2B SaaS with org management
- **Auth0** - Enterprise-grade with extensive customization
- **Auth.js (NextAuth)** - Self-hosted, flexible

**Migration Path:**
1. Replace `AuthContext` with provider-specific hooks
2. Update `useAuth()` calls to use new auth hooks
3. Implement server-side session validation
4. Add middleware for route protection
5. Configure role mapping from provider

## Role-Based Access Control (RBAC)

### User Roles

Defined in `lib/types.ts` and `lib/auth/types.ts`:

| Role | Hierarchy | Permissions |
|------|-----------|-------------|
| `platform_admin` | 100 | Full platform access |
| `org_super_admin` | 80 | Full org access, user management |
| `org_admin` | 60 | Org settings, limited user management |
| `consultant` | 40 | Diagnostics, insights |
| `leader_viewer` | 20 | Read-only dashboard access |

### Permission Helpers

```typescript
// Check exact role
hasRole(user, 'org_admin')

// Check if user has any of the specified roles
hasAnyRole(user, ['org_admin', 'org_super_admin'])

// Check if user meets minimum role level
hasMinimumRole(user, 'consultant')
```

### Implementation

**Component Level:**
```tsx
const { hasAnyRole } = useAuth();

if (!hasAnyRole(['org_admin', 'org_super_admin'])) {
  return <AccessDenied />;
}
```

**Route Level:**
Protected routes use the `(app)` layout which checks authentication before rendering.

## Data Models

### Core Types (`lib/types.ts`)

**Organizational Ambidexterity:**
```typescript
interface OAScore {
  exploration: number;    // 0-100
  exploitation: number;   // 0-100
  balance: number;        // Calculated balance score
  timestamp: Date;
}

interface OAStyleProfile {
  structural: number;     // % structural approach
  sequential: number;     // % sequential approach
  contextual: number;     // % contextual approach
  dominant: OAStyleType;  // Primary style
}
```

**Diagnostics:**
```typescript
interface DiagnosticRun {
  id: string;
  organisationId: string;
  configId: string;
  status: DiagnosticStatus;
  startedAt: Date;
  completedAt?: Date;
  responseCount: number;
  scores?: OAScore;
  styleProfile?: OAStyleProfile;
  insights?: string[];
}
```

**Entities:**
```typescript
interface Organisation {
  id: string;
  name: string;
  industry?: string;
  size?: number;
  createdAt: Date;
}

interface User {
  id: string;
  email: string;
  name: string;
  organisationId: string;
  role: UserRole;
  createdAt: Date;
}
```

## Component Architecture

### UI Components (`components/ui/`)

Reusable, composable primitives:

- **Button** - Multiple variants (primary, secondary, outline, ghost)
- **Card** - Container with header, content, footer subcomponents
- **Input** - Form input with label and error handling

**Design Principles:**
- TypeScript-first with exported interfaces
- Tailwind for all styling
- Composable with sensible defaults
- Accessible and responsive

### Layout Components

- **AppShell** (`components/layout/AppShell.tsx`)
  - Wrapper for authenticated pages
  - Combines Sidebar + Topbar + content area

- **Sidebar** (`components/nav/Sidebar.tsx`)
  - Navigation menu
  - Role-filtered nav items
  - User profile display

- **Topbar** (`components/nav/Topbar.tsx`)
  - User info and logout
  - Breadcrumbs (future)

## API Contract for ML Backend

### Planned Endpoints

While not yet implemented, the frontend is designed to integrate with these API routes:

#### Start Diagnostic
```
POST /api/diagnostics/start
Content-Type: application/json

{
  "organisationId": "org-123",
  "diagnosticType": "full_assessment",
  "config": {
    "drivers": ["culture", "design", "capabilities"],
    "targetRoles": ["leader_viewer", "org_admin"]
  }
}

Response:
{
  "diagnosticId": "diag-456",
  "status": "draft",
  "expiresAt": "2024-12-31T23:59:59Z"
}
```

#### Get Diagnostic Status
```
GET /api/diagnostics/:id

Response:
{
  "id": "diag-456",
  "status": "completed",
  "responseCount": 15,
  "scores": {
    "exploration": 72,
    "exploitation": 68,
    "balance": 82
  },
  "styleProfile": {
    "structural": 35,
    "sequential": 25,
    "contextual": 40,
    "dominant": "contextual"
  }
}
```

#### Submit Responses
```
POST /api/diagnostics/:id/submit-responses
Content-Type: application/json

{
  "userId": "user-789",
  "responses": {
    "culture_1": 4,
    "design_3": 5,
    // ... more responses
  }
}

Response:
{
  "success": true,
  "preliminaryScores": {
    "exploration": 70,
    "exploitation": 65
  }
}
```

### Integration Points

**Next.js API Routes** (`app/api/`) will:
1. Validate authentication and authorization
2. Sanitize and validate input
3. Forward requests to Python ML backend
4. Transform and return responses
5. Handle errors gracefully

**Python ML Backend** will:
1. Calculate OA scores using research-based algorithms
2. Generate explanations and insights
3. Manage federated learning (future)
4. Store aggregate (not raw) data

## State Management

### Current Approach

**Client-side state:**
- React `useState` for component state
- Context API for authentication (`AuthContext`)

**Server state:** Not yet implemented

### Future Considerations

As complexity grows, consider:
- **TanStack Query (React Query)** - Server state management, caching
- **Zustand** - Lightweight global state if needed
- **Server Components** - Fetch data server-side where possible

## Styling Strategy

**Tailwind CSS** with utility-first approach:

- Defined styles in component files (no separate CSS files for components)
- Custom classes in `globals.css` only for true globals
- Consistent spacing, colors, and typography
- Responsive by default (mobile-first)

**Color Palette:**
- Primary: Blue (`bg-blue-600`, etc.)
- Neutrals: Gray scale
- Status: Red (errors), Yellow (warnings), Green (success)

## Testing Strategy (Future)

### Recommended Approach

**Unit Tests:**
- Component tests with React Testing Library
- Utility function tests with Vitest

**Integration Tests:**
- API route tests
- Auth flow tests

**E2E Tests:**
- Critical user journeys with Playwright
- Login → Dashboard → Start Diagnostic

## Deployment

### Environment Requirements

**Environment Variables:**
```bash
# Future production config
NEXT_PUBLIC_API_URL=https://api.ambisight.com
DATABASE_URL=postgresql://...
AUTH_SECRET=...
ML_BACKEND_URL=https://ml.ambisight.com
```

### Build Output

```bash
npm run build
# → .next/ directory with optimized production build

npm start
# → Starts production server on port 3000
```

### Hosting Options

- **Vercel** - Recommended (Next.js creators)
- **Railway** - Good for full-stack with database
- **AWS Amplify** - Enterprise option
- **Self-hosted** - Docker container

## Security Considerations

### Current
- Client-side auth only (development)
- No sensitive data stored
- Basic input validation

### Production Requirements
- Server-side session validation
- HTTPS only
- CSRF protection
- Rate limiting on API routes
- SQL injection prevention (with Prisma)
- XSS protection (React escapes by default)
- Secure headers (via middleware)

## Performance Considerations

### Current Optimizations
- App Router with React Server Components
- Automatic code splitting
- Image optimization (Next.js Image component)
- Font optimization (next/font)

### Future Optimizations
- Database query optimization
- API response caching
- Static page generation where possible
- CDN for static assets

## Monitoring & Observability (Future)

**Recommended Tools:**
- **Sentry** - Error tracking
- **Vercel Analytics** - Web vitals
- **LogRocket** - Session replay
- **DataDog** - Full observability

## Migration Path to Production

### Phase 1: Foundation (Current)
✅ Next.js setup
✅ Route structure
✅ Mock auth
✅ UI components
✅ Type definitions

### Phase 2: Backend (Next)
- [ ] Choose and integrate auth provider
- [ ] Set up PostgreSQL database
- [ ] Implement Prisma schema
- [ ] Create API routes for diagnostics
- [ ] Integrate Python ML backend

### Phase 3: Features
- [ ] Full diagnostic workflow
- [ ] Data visualization
- [ ] Team collaboration
- [ ] Reporting and exports

### Phase 4: Advanced
- [ ] Federated learning integration
- [ ] Advanced analytics
- [ ] Multi-tenancy optimization
- [ ] Mobile responsive improvements
