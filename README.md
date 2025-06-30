
# Golden Harvest Exports 🥜

A premium e-commerce platform for dry fruits and nuts export business, built with modern web technologies and optimized for global trade.

## 🌟 Features

### 🛍️ E-Commerce Functionality
- **Product Catalog**: Beautiful product listings with advanced filtering and search
- **Shopping Cart**: Full cart management with quantity controls
- **Product Details**: Rich product pages with image galleries and specifications
- **User Authentication**: Multi-provider OAuth login (Google, Apple, Microsoft, Facebook, Instagram)
- **User Profiles**: Complete dashboard with order history and wishlist

### 🎨 Premium Design
- **Modern UI/UX**: Clean, professional design with golden theme
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth animations and hover effects
- **Accessibility**: WCAG compliant design principles

### 🌍 Export-Ready Features
- **Global Shipping**: International shipping calculations
- **Multi-Currency**: Support for different currencies
- **Export Documentation**: Built-in export compliance tools
- **Wholesale Pricing**: Tiered pricing for bulk orders

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Shadcn/UI** - High-quality component library
- **Lucide React** - Beautiful icon library

### State Management & Data Fetching
- **TanStack Query** - Powerful data synchronization
- **React Hook Form** - Performant form handling

### Styling & Animations
- **Tailwind CSS** - Responsive utility classes
- **CSS Grid & Flexbox** - Modern layout systems
- **Custom animations** - Smooth transitions and micro-interactions

## 📁 Project Structure

```
golden-harvest-exports/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── home/          # Homepage components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── ui/            # UI component library
│   ├── pages/             # Page components
│   │   ├── AuthPage.tsx   # Authentication
│   │   ├── CartPage.tsx   # Shopping cart
│   │   ├── ProductsPage.tsx # Product listing
│   │   ├── ProductDetailPage.tsx # Product details
│   │   └── ProfilePage.tsx # User profile
│   ├── lib/               # Utility functions
│   ├── hooks/             # Custom React hooks
│   └── App.tsx            # Main application
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/golden-harvest-exports.git
   cd golden-harvest-exports
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🎯 Development Guide

### Key Components

#### Header Component (`src/components/layout/Header.tsx`)
- Responsive navigation with mobile menu
- Search functionality
- Cart and user icons
- Multi-level navigation structure

#### Product Components
- **FeaturedProducts**: Homepage product showcase
- **ProductCard**: Reusable product display component
- **ProductFilters**: Advanced filtering system

#### Authentication (`src/pages/AuthPage.tsx`)
- Multi-provider OAuth integration
- Form validation
- Responsive design

### Styling Guidelines

#### Color Palette
- Primary: Golden/Amber (#F59E0B)
- Secondary: Orange (#EA580C)
- Neutral: Grays (#F9FAFB to #111827)
- Success: Green (#10B981)
- Error: Red (#EF4444)

#### Typography
- Headlines: Bold, clear hierarchy
- Body text: Readable, accessible
- Responsive font sizes

#### Layout Principles
- Mobile-first responsive design
- Consistent spacing using Tailwind's spacing scale
- Grid-based layouts for product listings
- Card-based design for content organization

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Extended color palette for the golden theme
- Custom component classes
- Animation utilities
- Responsive breakpoints

### TypeScript
- Strict type checking enabled
- Custom type definitions for components
- API response types

## 📱 Responsive Design

The application is fully responsive across:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

Key responsive features:
- Collapsible navigation on mobile
- Responsive grid layouts
- Touch-optimized interactions
- Optimized images for different screen densities

## 🔐 Authentication System

### Supported Providers
- Google OAuth 2.0
- Apple Sign-in
- Microsoft Account
- Facebook Login
- Instagram Login
- Email/Password

### Features
- Secure JWT token handling
- Password strength validation
- Remember me functionality
- Password reset flow

## 🛒 E-Commerce Features

### Product Management
- Category-based organization
- Advanced search and filtering
- Product variants (size, packaging)
- Inventory tracking
- Wishlist functionality

### Shopping Cart
- Persistent cart state
- Quantity management
- Price calculations
- Promo code support
- Multiple shipping options

### User Experience
- Guest checkout option
- Save for later functionality
- Recently viewed products
- Personalized recommendations

## 🌐 Future Enhancements

### Backend Integration (Planned)
- **FastAPI** backend with Python
- **PostgreSQL** database via Supabase
- **Redis** for caching
- **Stripe/RazorPay** payment integration

### Advanced Features (Roadmap)
- **AI Recommendations**: Machine learning-powered product suggestions
- **Real-time Chat**: Customer support integration
- **Multi-language**: i18n support for global markets
- **PWA Features**: Offline functionality and push notifications
- **Analytics**: Comprehensive user behavior tracking

### Export-Specific Features
- **Documentation Generator**: Automated export paperwork
- **Compliance Checker**: International trade regulation validation
- **Logistics Integration**: Real-time shipping tracking
- **Currency Converter**: Live exchange rates
- **Bulk Order Management**: Wholesale order processing

## 🔒 Security Considerations

- **Input Validation**: Client and server-side validation
- **XSS Protection**: Sanitized user inputs
- **CSRF Protection**: Token-based request validation
- **Secure Headers**: Security-focused HTTP headers
- **Data Encryption**: Sensitive data encryption

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Platforms
- **Vercel** (Recommended)
- **Netlify**
- **AWS S3 + CloudFront**
- **Digital Ocean**

## 📊 Performance Optimization

- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Responsive images with proper formats
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching Strategy**: Intelligent caching for static assets
- **SEO Optimization**: Meta tags, structured data

## 🧪 Testing (Planned)

- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Cypress for user journey testing
- **Performance Tests**: Lighthouse CI integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: React/TypeScript specialists
- **UI/UX Design**: Modern e-commerce design principles
- **Backend Architecture**: Scalable API design (planned)
- **DevOps**: CI/CD pipeline optimization (planned)

## 📞 Support

For support and questions:
- **Email**: support@goldenharvestexports.com
- **Documentation**: [Project Wiki](wiki-link)
- **Issues**: [GitHub Issues](issues-link)

## 🙏 Acknowledgments

- **Shadcn/UI** for the excellent component library
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the beautiful icon set
- **React Community** for continuous inspiration

---

**Golden Harvest Exports** - Premium Dry Fruits for Global Markets 🌍✨
