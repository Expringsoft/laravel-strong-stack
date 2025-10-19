# Laravel Strong Stack

Laravel Strong Stack is a project template that combines Laravel with a robust set of tools and libraries to help you build a solid, scalable and maintainable web applications quickly. This stack includes essential helpers, packages and a well-optimized folder structure to ensure a code-splitting and a progressive way to implement features in a scalable way.

### Index:

- [Core Stack](#core-stack)
- [Package Stack](#package-stack)
    - [Backend Packages](#backend-packages)
    - [Frontend Packages](#frontend-packages)
- [Project Structure](#project-structure)
    - [Backend Structure](#backend-structure)
        - [Explanation](#explanation)
    - [Frontend Structure](#frontend-structure)
    - [Explanation (Frontend)](#explanation-frontend)
- [Naming Conventions (Backend)](#naming-conventions-backend)
- [Naming Conventions (Frontend)](#naming-conventions-frontend)

## Core Stack

|                | Porpose                                 | Why?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Laravel 12     | Backend framework                       | Laravel is a framework with a comprehensive ecosystem, a large community, active development, and constant evolution. Laravel 12, along with newer versions of PHP (>8.3), provides a robust and solid solution for building all types of web applications.                                                                                                                                                                                                                                                                                                                                                                                   |
| TypeScript     | Frontend language                       | You can create large-scale code using only JavaScript, but you expose yourself to unexpected behaviors, chaotic debugging, and lose the ability to use essential aids like autocompletion in editors. Additionally, AI can often invent nonexistent properties or methods in libraries or your own code, all of which can lead to hours of extra work and a lot of technical debt. TypeScript provides strong typing, you have reliable code and behaviors, you define complex structures in a maintainable way, and you also improve the readability of your code for you, other people, and AI. Everyone knows "what and how" to do things. |
| InertiaJS      | Bridge for Laravel <-> React            | The official way to build Laravel SPAs with React. Inertia provides multiple benefits such as SSR, form handling, infinite scrolling, lazy loading, poling, data sharing, and passing data from Laravel to your React app.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| React 19       | JS library for building user interfaces | React is the most widely used JavaScript library for user interfaces. New features added in 19.2 include `<Activity>`, `useEffectEvent`, and, most recently, the **React Compiler**. React is a complete ecosystem, with endless packages, UI libraries, hooks, and much more. Combining React with TypeScript provides robust and type-safe scalability.                                                                                                                                                                                                                                                                                     |
| Axios          | HTTP client                             | Axios is the default HTTP client for Laravel applications with React, with configurations to include csrf cookies, with response typing, it provides a simple and intuitive API for sending HTTP requests, handling responses, and managing errors. Axios supports features like request cancellation, interceptors, and automatic JSON transformation, making it easier to work with APIs in your React applications.                                                                                                                                                                                                                        |
| Tailwind CSS 4 | Utility-first CSS framework             | Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly and efficiently. It provides a set of pre-defined classes that can be combined to create complex layouts and styles without writing custom CSS. Tailwind CSS promotes consistency, reusability, and maintainability in your styles, making it easier to manage and scale your application's design system.                                                                                                                                                                                                                                      |
| Vite           | Frontend build tool                     | Vite is a modern frontend build tool that provides fast development and optimized production builds. It leverages native ES modules in the browser for faster development server startup and hot module replacement (HMR). Vite also supports a wide range of frontend frameworks and libraries, making it a versatile choice for building web applications.                                                                                                                                                                                                                                                                                  |

## Package Stack

This template includes a curated selection of backend and frontend packages that enhance the development experience and provide essential features for building robust web applications. We have carefully chosen these packages based on their popularity, community support, and compatibility with the core stack, but also selecting as few as possible to avoid bloat and unnecessary dependencies, you may add more packages as needed for your specific use case.

### Backend Packages

| Package             | Purpose                                                  | Why?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Laravel Fortify     | Authentication backend                                   | Fortify is a backend authentication package for Laravel that provides a robust and customizable authentication system. It includes features like login, registration, password reset, email verification, and two-factor authentication, allowing you to implement secure authentication in your applications quickly.                                                                                                                                                                                 |
| Laravel Sanctum     | API authentication                                       | Sanctum provides a simple and secure way to authenticate SPAs, mobile applications, and token-based APIs. It offers features like token management, CSRF protection, and session management, making it easy to implement authentication in your Laravel applications.                                                                                                                                                                                                                                  |
| Laravel Socialite   | OAuth authentication                                     | Socialite is an official Laravel package that provides a simple and elegant way to authenticate users using OAuth providers like Google, Facebook, Twitter, and GitHub. It simplifies the process of integrating third-party authentication into your Laravel applications.                                                                                                                                                                                                                            |
| Laravel Cashier     | Monetization                                             | Cashier is the default solution for Laravel projects to integrate all types of Stripe monetization tools, from subscriptions, billing, one-time purchases, connect, Cashier integrates everything seamlessly and easily. Maybe you want to build an MVP, an e-commerce, a SaaS — Cashier offers a solid solution for almost any use case.                                                                                                                                                              |
| Laravel Wayfinder   | Type-safe route and controller generation for TypeScript | Wayfinder replaces Ziggy, automatically generating fully typed, importable TypeScript functions for your controllers and routes. Previously, Ziggy used route names instead of hard-coded routes; however, Ziggy didn't offer autocompletion, error highlighting, or validation — only runtime errors. Wayfinder addresses these issues by generating fully typed functions for your controllers and routes and integrating seamlessly with Inertia.                                                   |
| Spatie Laravel Data | Rich data objects                                        | This package lets you define a single typed data object (a PHP class extending Data) and reuse it everywhere: it replaces form requests, API transformers, and manual TypeScript definitions. It solves duplication and inconsistency by giving you one source of truth that handles validation, transformation to API resources, lazy field selection, construction from requests or other inputs, and automatic TypeScript generation — reducing errors and boilerplate across backend and frontend. |

### Frontend Packages

| Package        | Purpose                            | Why?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shadcn UI      | Component library                  | Shadcn UI is a popular component library built on top of Radix UI and Tailwind CSS. It provides a set of pre-designed, accessible, and customizable components that can be easily integrated into your React applications. Shadcn UI promotes consistency and reusability in your UI design, making it easier to build and maintain your application's user interface. Also is AI-friendly, with well-structured and documented components that facilitate collaboration between developers and AI tools.                                                                                                               |
| Lucide Icons   | Icon library                       | Lucide is an open-source icon library that offers a wide range of customizable and accessible icons for web applications. It provides icons in various formats, including SVG and React components, making it easy to integrate them into your React applications. Lucide Icons promotes consistency and reusability in your iconography, enhancing the visual appeal and usability of your application's user interface.                                                                                                                                                                                               |
| TanStack Query | Data fetching and state management | TanStack Query is a powerful data-fetching library for React that simplifies the process of fetching, caching, and synchronizing server state in your applications. It provides features like automatic caching, background updates, and pagination, making it easier to manage server state and improve the performance of your React applications. You can combine it with the Axios instance to have a fully typed data fetching solution and CSRF protection out of the box. <br><br>**Plugins:** <br> - _(dev) eslint-plugin-query:_ recommended plugin to help you catch bugs and inconsistencies while you code. |
| TanStack Form  | Form management                    | TanStack Form is a framework-agnostic, TypeScript-first, headless form library that centralizes form state, validation, and UI orchestration. It replaces ad hoc form code and less-capable libraries by offering reactive state management, complex validation and error handling, accessibility-first patterns, i18n support, responsive design, cross-platform compatibility, and customizable styling—delivering a consistent, performant, and easy-to-use solution for building robust, user-friendly forms across front-end frameworks.                                                                           |
| Zod            | Schema validation                  | Zod is a TypeScript-first schema declaration and validation library. It allows you to define schemas for your data structures and validate them at runtime, ensuring that your data conforms to the expected types and formats. Zod provides a simple and intuitive API for defining schemas, handling validation errors, and transforming data, making it easier to manage data validation in your React applications. Zod can be used both on the frontend and backend, providing a consistent validation solution across your entire stack.                                                                          |
| i18next        | Internationalization               | i18next is a popular internationalization library for JavaScript applications. It provides a simple and flexible way to add multilingual support to your React applications, allowing you to easily manage translations, handle language switching, and format dates and numbers according to the user's locale. <br><br> **Plugins:** <br> - _browser-languagedetector:_ automatically detects the user's preferred language based on their browser settings <br> - _resources-to-backend:_ allows loading translation resources on-demand instead of loading a huge JSON file at once.                                |

## Project Structure

The project structure is designed to support scalability, maintainability, and clear separation of concerns. It follows a feature-based architecture, where each folder groups everything related to a specific feature. This improves organization, makes dependencies easier to manage, and helps developers quickly understand how components relate to each other. If the project grows, it can easily transition to a domain-driven design (DDD). This setup keeps things simple at the start while staying flexible for future expansion.

### Backend Structure

We keep most of the default Laravel structure to support common use cases in a familiar way. However, the `app/` folder is organized following a feature-based architecture, with additional directories to improve code structure and maintainability.

```
app
├── Actions
├── Data
│   ├── Api
│   │   └── V1
│   │       ├── ErrorData.php
│   │       └── PaginationData.php
│   ├── Casters
│   │   ├── CarbonImmutableCaster.php
│   │   ├── EnumCaster.php
│   │   └── MoneyCaster.php
│   ├── Common
│   │   └── UserSummaryData.php
│   └── Concerns
│       └── WithIncludes.php
├── Enums
│   └── LoginStatus.php
├── Features
│   ├── Auth
│   │   └── Login
│   │       ├── Actions
│   │       │   └── LoginAttempt.php
│   │       ├── Data
│   │       │   ├── LoginInputData.php
│   │       │   └── LoginResultData.php
│   │       ├── Http
│   │       │   └── Controllers
│   │       │       └── AuthController.php
│   │       └── Requests
│   │           └── LoginRequest.php
│   └── Users
│       └── Profile
│           ├── Actions
│           ├── Data
│           │   ├── ProfileQueryData.php
│           │   └── ProfileViewData.php
│           ├── Http
│           │   └── Controllers
│           └── Requests
├── Helpers
├── Http
│   ├── Controllers
│   │   ├── Api
│   │   ├── DashboardController.php
│   │   └── Controller.php
│   ├── Middleware
│   │   └── HandleInertiaRequests.php
│   ├── Requests
├── Models
├── Policies
└── Providers
```

#### Explanation

- `Actions/`: Global application actions (use-cases) reusable across features.
- `Data/`: Centralized layer for Spatie/laravel-data.
    - `Api/V1/`: Versioned API DTOs and shared response contracts.
    - `Casters/`: Reusable casters/transformers for Data objects.
    - `Common/`: Reusable Data objects (e.g., UserSummaryData).
    - `Concerns/`: Small traits/utilities for Data usage.
- `Enums/`: Shared enumerations (e.g., LoginStatus.php).
- `Features/`: Feature-based organization; each feature can define its own Data DTOs
  for input/output.
- `Helpers/`: Global helper utilities.
- `Http/`
    - `Controllers/`: Global controllers and base `Controller.php`. Use `*Controller`
      suffix for naming. In most cases, you may want to use global controllers for showing
      Inertia views (e.g., DashboardController.php) and leave feature-specific controllers
      inside their Feature folder.
    - `Api/`: API controllers (versioned inside Features if needed).
    - `Middleware/`: Global middlewares. Like `HandleInertiaRequests.php`.
- `Models`, `Policies`, `Providers`: Standard Laravel placements for Eloquent models,
  policies, and service providers.

Other folders remain as per Laravel defaults:

```
bootstrap
config
database
lang
public
resources
├── js
└── views
routes
├── web.php
└── api.php
storage
tests
```

---

### Frontend Structure

```
resources/
└── js
    ├── app
    │   ├── config
    │   ├── hooks
    │   │   └── use-theme.ts
    │   ├── lib
    │   │   ├── axios.ts
    │   │   ├── env.ts
    │   │   ├── fonts.ts
    │   │   ├── http.ts
    │   │   └── query-client.ts
    │   ├── providers
    │   │   ├── auth-provider.tsx
    │   │   ├── i18n-provider.tsx
    │   │   └── query-provider.tsx
    │   ├── store
    │   ├── types
    │   │   ├── global.d.ts
    │   │   ├── inertia.d.ts
    │   │   ├── laravel.d.ts
    │   │   └── vite-env.d.ts
    │   ├── utils
    │   └── bootstrap.tsx
    ├── assets
    ├── features
    │   └── auth
    │       └── login
    │           ├── api
    │           │   └── login-api.ts
    │           ├── hooks
    │           │   └── use-login.ts
    │           ├── model
    │           │   └── login.schema.ts
    │           ├── ui
    │           │   └── login-form.tsx
    │           └── index.ts
    ├── i18n
    │   ├── locales
    │   │   └── en
    │   │       └── common.json
    │   └── index.ts
    ├── lib
    ├── pages
    │   ├── dashboard
    │   │   ├── home.tsx
    │   │   └── account.tsx
    │   ├── login.tsx
    │   └── landing.tsx
    ├── shared
    │   ├── constants
    │   ├── hooks
    │   ├── icons
    │   ├── lib
    │   ├── models
    │   ├── types
    │   └── ui
    │       ├── components
    │       │   ├── base
    │       │   |   ├── button.tsx
    │       │   |   └── index.ts
    │       │   ├── app-sidebar.tsx
    │       │   └── index.ts
    │       └── layouts
    │           ├── default-layout.tsx
    │           └── index.ts
    └── tests
```

### Explanation (Frontend)

- `actions/`: Wayfinder-generated typed action functions for Laravel routes and controllers.
- `app/`: Base configuration and global application logic.
    - `config/`: App-wide settings (routes, theme, feature flags, constants).
    - `hooks/`: Global hooks reused across features (e.g., `use-theme.ts`).
    - `lib/`: Low-level adapters (Axios client, env, fonts init, TanStack Query client, HTTP helpers).
    - `providers/`: Global context providers (`AuthProvider`, `I18nProvider`, `QueryProvider`).
    - `store/`: Global state (Zustand/Redux/Context) if used.
    - `types/`: Global `.d.ts` and shared TypeScript types, (e.g., Inertia page props, Laravel route types).
    - `utils/`: General-purpose utilities (formatters, math, date helpers).
    - `bootstrap.tsx`: Client entry point to initialize React + Inertia, it replaces `resources/js/app.tsx`.
- `assets/`: Static assets managed by Vite (images, icons, fonts, illustrations).  
  Public, CDN-cached assets live in `public/assets/`.
- `features/`: Feature-based organization; each feature encapsulates its own UI, hooks, API, and models.
    - `api/`: HTTP calls and client-side services for the feature (e.g., `login-api.ts`).
    - `hooks/`: Feature-specific hooks (e.g., `use-login.ts`).
    - `model/`: Zod schemas, DTOs, and data mappers for the feature.
    - `ui/`: Feature-scoped UI components (e.g., `login-form.tsx`).
    - `index.ts`: Optional barrel to export the feature’s public API.
- `i18n/`: Internationalization setup and resources.
    - `locales/<lang>/*.json`: Translation files (e.g., `locales/en/common.json`).
    - `index.ts`: i18next initialization and dynamic resource loading.
- `pages/`: Top-level Inertia-rendered pages (route-level components).
    - Minimal logic; orchestrate features and compose shared UI (e.g., `dashboard/home.tsx`).
- `routes/`: Wayfinder-generated typed route functions for frontend navigation.
- `shared/`: Cross-feature reusable code.
    - `constants/`: Global constants (cache keys, config values).
    - `hooks/`: Reusable hooks outside any single feature.
    - `icons/`: SVG icon components (e.g., AppLogo, Social icons).
    - `lib/`: Common helpers/adapters used by multiple features (e.g., `cn` function for shadcn).
    - `models/`: Shared data models and types (e.g. `username.schema.ts`)
    - `types/`: Global TypeScript interfaces/types reused broadly (e.g. layouts, icons).
    - `ui/`: Generic, reusable UI components.
        - `components/`: Shadcn base components (`alert-error.tsx`, `nav-user.tsx`).
            - `base/`: Shadcn primitive components (e.g., `button.tsx`).
        - `layouts/`: Page layouts (e.g., `default-layout.tsx`).
- `tests/`: Frontend unit and integration tests.
    - Use `*.test.ts[x]` naming; tests can be co-located or grouped here if global.

## Naming Conventions (Backend)

These conventions ensure consistency, compatibility, and readability across developers, CI/CD systems, and Linux environments. They align with Laravel 12, PSR-4 autoloading, a feature-first structure, and Spatie/laravel-data.

### 1. Files and Folders

- Format: PSR-4 for class files (StudlyCase class names, directories mirror namespaces).
  Example:
    ```
    app/Features/Auth/Login/Http/Controllers/AuthController.php
    app/Features/Auth/Login/Actions/LoginAttempt.php
    app/Data/Casters/MoneyCaster.php
    ```
- Feature directories: StudlyCase by domain.
    - Features/Auth/Login/…
    - Data/Api/V1/…
    - Http/Controllers/…
- Non-class resources:
    - Migrations: timestamped snake_case (Artisan default).
        - 2025_01_01_120000_create_users_table.php
    - Seeders/Factories: StudlyCase (Artisan default).
        - DatabaseSeeder.php, UserFactory.php
    - Lang files: snake_case keys within arrays.

### 2. In-Code Naming

Classes: StudlyCase.

```php
final class AuthController {}
final class LoginRequest extends FormRequest {}
final class LoginAttempt {}
```

Methods and functions: camelCase.

```php
public function handle(): void {}
public static function fromRequest(Request $request): self {}
public function toArray(): array {}
```

Properties and variables: camelCase.

```php
private int $perPage;
$loginStatus = LoginStatus::Success;
```

Constants: UPPER_SNAKE_CASE.

```php
public const DEFAULT_PER_PAGE = 15;
```

Enums: Enum name in StudlyCase; cases in StudlyCase.

```php
enum LoginStatus { case Pending; case Success; case Failed; }
```

Traits and Interfaces:

```php
trait WithIncludes {}
interface LoginServiceInterface {}
```

### 3. Semantic Suffixes and Prefixes

| Type              | Example                          | Convention                                  |
| ----------------- | -------------------------------- | ------------------------------------------- |
| Controller        | AuthController                   | Suffix Controller                           |
| Form Request      | LoginRequest                     | Suffix Request                              |
| Action (use case) | LoginAttempt, UpdateProfile      | Verb/Noun; optional Action suffix if needed |
| Data (Input)      | LoginInputData                   | XxxInputData                                |
| Data (Output)     | LoginResultData, ProfileViewData | XxxResultData or XxxViewData                |
| Data (Query)      | ProfileQueryData                 | XxxQueryData                                |
| API DTO (V1)      | Data/Api/V1/ErrorData            | Versioned under Data/Api/V1                 |
| Caster            | MoneyCaster, EnumCaster          | Suffix Caster                               |
| Resource          | ApiResponseResource              | Suffix Resource                             |
| Middleware        | HandleInertiaRequests            | Verb/Noun; Middleware context               |
| Policy            | UserPolicy                       | Suffix Policy                               |
| Enum              | LoginStatus                      | Enum name StudlyCase; cases StudlyCase      |
| Trait/Concern     | WithIncludes                     | Descriptive; optionally in Concerns/        |
| Exception         | InvalidLoginException            | Suffix Exception                            |
| Event             | UserLoggedInEvent                | Suffix Event                                |
| Listener          | SendWelcomeEmailListener         | Suffix Listener                             |
| Job               | ProcessLoginAnalyticsJob         | Suffix Job                                  |

### 4. Co-location

- Feature-specific code lives under its feature:
    - app/Features/Auth/Login/Actions, Data, Http/Controllers, Requests
- Reusable/global items:
    - app/Data (Api/V1, Casters, Common, Concerns), app/Actions (if global), app/Helpers, app/Http/Middleware
- Tests mirror structure under tests/Feature and tests/Unit.

### 5. DTOs (laravel-data) and Validation

- Factory methods:
    ```php
    public static function fromRequest(Request $request): self {}
    public static function from(array $payload): self {}
    ```
- Serialization:
    ```php
    public function toArray(): array {}
    ```
- Includes:
    - Use a consistent pattern via WithIncludes (e.g., includeRelations(), flags).
- JSON field naming:
    - Prefer camelCase for API payloads; map from Eloquent snake_case using attributes/casters.

### 6. Errors and Exceptions

- Custom exceptions end with Exception.
    - DomainRuleException, InvalidLoginException
- Error DTOs:
    - ErrorData with fields: code, message, details (optional)

### 7. Tests and Typing

- Test classes: StudlyCase + Test.
    - AuthControllerTest, LoginAttemptTest
- Test methods: camelCase with test prefix or #[Test] attribute.
    ```php
    public function test_handles_successful_login(): void {}
    ```
- Factories/Seeders: follow Artisan defaults.

### 8. General Style

- Coding standard: PSR-12.
- Native type hints and return types; PHPDoc where it adds domain clarity.
- Explicit visibility: public/protected/private on all properties and methods.

## Naming Conventions (Frontend)

These conventions ensure consistency, compatibility, and readability across developers, CI/CD systems, and Linux environments.

### 1. Files and Folders

- **Format:** `kebab-case` (lowercase-with-dashes).  
  Example:
    ```
    use-login.ts
    login-form.tsx
    user.schema.ts
    button-primary.tsx
    ```
- **React components:** `.tsx`
- **Code without JSX:** `.ts`
- **Schemas (Zod):** `.schema.ts`
- **Optional indexes:** `index.ts` for local module exports or subfolders.

### 2. In-Code Naming

**React components:** `PascalCase`

```ts
export function LoginForm() {}
```

**Custom hooks:** `camelCase` with `use` prefix.

```ts
export function useLogin() {}
```

**Functions and variables:** `camelCase`.

```ts
const isLoading = true;
const handleSubmit = () => {};
```

**Constants:** `UPPER_SNAKE_CASE`.

```ts
const API_BASE_URL = '/api/v1';
```

**Types and interfaces:** `PascalCase` without `I` prefix.

```ts
type UserProfile = { id: string; name: string };
```

**Enums:** `PascalCase` name; values `PascalCase` or `camelCase`.

```ts
enum UserRole {
    Admin = 'admin',
    Editor = 'editor',
}
```

**Schemas:** Identifier in `PascalCase` with `Schema` suffix.

```ts
export const LoginSchema = z.object({...})
export type Login = z.infer<typeof LoginSchema>
```

### 3. Semantic Suffixes and Prefixes

| Type            | Example              | Convention                            |
| --------------- | -------------------- | ------------------------------------- |
| Hook            | `use-login.ts`       | `use` + verb/entity in `camelCase`    |
| UI Component    | `login-form.tsx`     | Descriptive; exports `LoginForm`      |
| Schema          | `login.schema.ts`    | Identifier `LoginSchema`              |
| Provider        | `auth-provider.tsx`  | `AuthProvider`                        |
| Global constant | `api-constants.ts`   | Contains `UPPER_SNAKE_CASE` constants |
| Layout          | `default-layout.tsx` | Exports `DefaultLayout`               |

### 4. Co-location

- Files specific to a feature live inside its folder (`features/auth/login/...`).
- Shared hooks, models, constants, and components live in `shared/`.
- Tests may be co-located (`login-form.test.tsx`) or grouped under `/tests`.

### 5. Tests and Typing

- Tests: `*.test.ts[x]` or `*.spec.ts[x]`.
- Derive types from schemas using `z.infer`.
- Re-export types under `types/` only if reused across multiple features.

### 6. General Style

- One main component per file.
- Props are typed using `PascalCase` with a `Props` suffix.
    ```ts
    type LoginFormProps = { onSubmit: () => void };
    ```
- Boolean props are positive: `isOpen`, `hasError`.
- Hooks should return an object for extensibility:
    ```ts
    const { user, reload } = useUser();
    ```
- Contexts follow: `AuthContext` + `useAuthContext`.
