# MySphere AI Website

A modern, responsive website for MySphere AI built with Next.js 14, TypeScript, and Tailwind CSS. This website showcases AI solutions and services with a beautiful, professional design.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Animated UI**: Smooth animations with Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and sitemap included
- **Performance**: Optimized for fast loading and great performance
- **Contact Form**: Functional contact form with validation

## 📋 Prerequisites

- Node.js 18+ and npm
- Git
- Vercel account (for deployment)

## 🛠️ Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mysphere-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 🚀 Deployment to Vercel

### Method 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Method 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## 🌐 Custom Domain Setup (mysphereai.com)

### Step 1: Add Domain in Vercel

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain: `mysphereai.com`
4. Also add `www.mysphereai.com` for www redirect

### Step 2: Configure DNS Records

Add the following DNS records to your domain provider:

#### For apex domain (mysphereai.com):
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: 76.76.21.21

#### For www subdomain:
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

### Step 3: Wait for Propagation

- DNS changes can take up to 48 hours to propagate
- Vercel will automatically provision SSL certificates
- You'll see a green checkmark when the domain is verified

## 📁 Project Structure

```
mysphere-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── solutions/         # Solutions page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── navigation.tsx     # Header navigation
│   ├── footer.tsx         # Footer component
│   ├── hero-section.tsx   # Homepage hero
│   └── ...               # Other components
├── public/               # Static assets
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # XML sitemap
├── package.json          # Dependencies
├── next.config.ts        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── vercel.json          # Vercel config
```

## 🔧 Environment Variables

No environment variables are required for the basic setup. For production features like contact form submission, you may need:

```env
# .env.local
NEXT_PUBLIC_API_URL=your-api-url
EMAIL_SERVICE_API_KEY=your-email-service-key
```

## 📱 Pages

- **Home** (`/`): Landing page with hero, features, and CTA
- **About** (`/about`): Company information, mission, and team
- **Products** (`/products`): AI solutions and services
- **Solutions** (`/solutions`): Industry-specific solutions
- **Contact** (`/contact`): Contact form and company details

## 🎨 Customization

### Colors
Edit the color scheme in `app/globals.css` CSS variables

### Content
Update content in respective page components in the `app` directory

### Components
Modify or add components in the `components` directory

## 🐛 Troubleshooting

### Build Errors
```bash
npm run build
```
Check for TypeScript errors and fix them

### Deployment Issues
- Ensure all dependencies are in `package.json`
- Check Vercel build logs for specific errors
- Verify environment variables are set in Vercel dashboard

### Domain Not Working
- Check DNS propagation status
- Verify DNS records are correct
- Ensure domain is verified in Vercel

## 📞 Support

For issues or questions:
- Email: info@mysphereai.com
- Create an issue in the repository

## 📄 License

Copyright © 2024 MySphere AI. All rights reserved.

---

Built with ❤️ by MySphere AI Team
