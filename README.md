# React Boilerplate

A standardized, feature-rich starting point for React projects at our organization. This boilerplate includes a curated set of libraries, configurations, and best practices to ensure consistency and productivity across all team projects.

## 🚀 Setup Instructions

### Method 1: Create a new project from this template

1. Click the "Use this template" button at the top of this repository
2. Name your new project and create the repository
3. Clone your new repository:
   ```bash
   git clone https://github.com/yourusername/your-new-project.git
   cd your-new-project
   ```
4. Install dependencies:
   ```bash
   yarn install
   ```
5. Start the development server:
   ```bash
   yarn dev
   ```

### Method 2: Manual setup with update capability

1. Clone this repository:
   ```bash
   git clone https://github.com/Prakash-Growmax/React_Biolerplate.git your-project-name
   cd your-project-name
   ```
2. Remove the existing git history and initialize a new repository:
   ```bash
   rm -rf .git
   git init
   ```
3. Connect to your new repository:
   ```bash
   git remote add origin https://github.com/yourusername/your-new-project.git
   ```
4. Add this boilerplate as an upstream to receive updates:
   ```bash
   git remote add upstream https://github.com/Prakash-Growmax/React_Biolerplate.git
   ```
5. Install dependencies:
   ```bash
   yarn install
   ```
6. Make your initial commit:
   ```bash
   git add .
   git commit -m "Initial commit from boilerplate"
   git push -u origin main
   ```

## 📢 Update Policy

**IMPORTANT: Updates from the boilerplate are MANDATORY**

All projects using this boilerplate must regularly incorporate updates. This ensures consistent standards, security patches, and features across all projects.

### How to update your project with latest boilerplate changes

1. Fetch the latest changes from the upstream boilerplate:
   ```bash
   git fetch upstream
   ```

2. Merge the changes into your current branch:
   ```bash
   git merge upstream/main
   ```

3. Resolve any merge conflicts that arise
4. Update dependencies if needed:
   ```bash
   yarn install
   ```

5. Test thoroughly before deploying

## 📚 Coding Standards and Conventions

### File Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable UI components
│   ├── ui/        # Basic UI components (buttons, inputs, etc.)
│   └── layouts/   # Layout components
├── config/        # Application configuration
├── features/      # Feature-based modules
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and helpers
├── pages/         # Page components
├── services/      # API and external service integration
├── store/         # State management
└── types/         # TypeScript type definitions
```

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Utilities/Hooks**: camelCase (e.g., `useAuth.ts`, `formatDate.ts`)
- **Constant files**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **CSS modules**: camelCase (e.g., `styles.module.css`)

### Code Formatting

This project uses ESLint and Prettier for code formatting. Please ensure your code follows these standards before committing.

- Run linting: `yarn lint`
- Format code: `yarn format`

## 📦 Included Packages and Their Purposes

### Core
- **React**: UI library
- **TypeScript**: Static type checking
- **Vite**: Fast build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components
- **class-variance-authority**: For component variant management
- **clsx/tailwind-merge**: Utility for conditional classes

### State Management
- **React Query**: Data fetching and server state management
- **Zustand**: Client state management

### Routing
- **React Router**: Declarative routing

### Form Handling
- **React Hook Form**: Form validation and management
- **Zod**: Schema validation

### Utilities
- **date-fns**: Date manipulation
- **Axios**: HTTP client

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Run linters on git staged files

## ⚙️ Project Configuration

### Environment Variables

Create a `.env` file in the root of your project with the following variables:

```
VITE_API_URL=https://api.example.com
```

See `.env.example` for all required environment variables.

### Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn preview`: Preview production build
- `yarn lint`: Run ESLint
- `yarn format`: Run Prettier
- `yarn test`: Run tests

## 🔄 Versioning

This boilerplate follows [Semantic Versioning](https://semver.org/):

- **Major (x.0.0)**: Breaking changes requiring significant adaptation
- **Minor (0.x.0)**: New features, backward compatible
- **Patch (0.0.x)**: Bug fixes and minor improvements

See [CHANGELOG.md](./CHANGELOG.md) for detailed update history.

## 🤝 Contributing to the Boilerplate

If you would like to suggest improvements to the boilerplate itself, please create an issue or pull request in the original repository.

## 📝 License

[MIT](LICENSE)