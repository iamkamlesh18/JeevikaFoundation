# 🚀 Quick Start Guide - Jeevika Foundation Website

## ⚡ Getting Started in 30 Seconds

### 1. **Start Development Server**
```bash
npm run dev
```
The site will be available at: **http://localhost:5173**

### 2. **Build for Production**
```bash
npm run build
```
This creates an optimized `dist/` folder ready to deploy.

### 3. **Preview Production Build**
```bash
npm run preview
```

---

## 📝 What's New

### ✨ Major Features
- ✅ **Icon-Rich Components** - 15+ icons throughout the site
- ✅ **6 Core Programs** - Education, Livelihood, Community, Healthcare, Women, Relief
- ✅ **Impact Stories** - 6 detailed blog posts with author/date info
- ✅ **Professional Design** - Green #1e7e34 foundation theme
- ✅ **Responsive Layout** - Works great on all devices
- ✅ **Contact Form** - With FAQ and multiple engagement options
- ✅ **8 CSS Files** - Organized, well-documented design system
- ✅ **50+ Utility Classes** - For consistent styling

### 🎨 Design Highlights
```
Primary Color:    #1e7e34 (Deep Green)
Secondary Color:  #f39c12 (Orange)
Accent Color:     #e74c3c (Red)
Typography:       Clean, Professional
Animations:       Smooth, Non-distracting
Responsive:       Mobile-First Design
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/      # Navbar, Footer, SEO
│   ├── pages/          # Home, About, Projects, Blog, Contact
│   ├── data/           # posts.ts (6 stories)
│   ├── styles/         # 9 CSS files (900+ lines)
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Favicon, sitemap.xml
├── package.json        # Dependencies
├── UPGRADE_SUMMARY.md  # Complete upgrade details
├── DESIGN_SYSTEM.md    # Design system documentation
└── README.md           # Original README
```

---

## 🎯 Key Files to Customize

### Update Content
| File | What | How |
|------|------|-----|
| `src/pages/Home.tsx` | Home page content | Edit text, update icons |
| `src/pages/About.tsx` | About page, mission, values | Edit paragraphs, add/remove cards |
| `src/pages/Projects.tsx` | Programs/initiatives | Update 6 initiatives, add descriptions |
| `src/data/posts.ts` | Blog stories | Edit 6 stories with content |
| `src/pages/Contact.tsx` | Contact info, form | Update email, phone, address |
| `src/components/Footer/Footer.tsx` | Footer links | Update social media, contact info |

### Update Styling
| File | What |
|------|------|
| `src/styles/global.css` | Colors, fonts, spacing, animations |
| `src/styles/navbar.css` | Navigation styling |
| `src/styles/footer.css` | Footer layout |
| `src/styles/forms.css` | Form styling |

---

## 🎨 Customization Examples

### Change Primary Color
In `src/styles/global.css` (line ~15):
```css
:root {
  --primary: #1e7e34;      ← Change this to your color
  --primary-light: #2ecc71; ← Light variant
  --primary-dark: #0f5720;  ← Dark variant
}
```

### Add New Blog Post
In `src/data/posts.ts`:
```typescript
{
  slug: "my-story",
  title: "My Impact Story",
  excerpt: "Short description",
  date: "March 24, 2026",
  author: "Your Name",
  category: "Education",
  image: "🎓",
  content: "Full story text here..."
}
```

### Update Navigation Links
In `src/components/Navbar/Navbar.tsx`:
```typescript
const navLinks = [
  { path: "/jeevikafoundation", label: "Home", icon: FiHome },
  { path: "/jeevikafoundation/about", label: "About", icon: FiInfo },
  // Add more links here...
]
```

---

## 🔧 Common Tasks

### Add a Button
```jsx
<button className="btn">Normal Button</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-small">Small Size</button>
<button className="btn btn-large">Large Size</button>
```

### Create a Card
```jsx
<div className="card">
  <div className="card-icon">🎓</div>
  <h3>Program Name</h3>
  <p>Description</p>
  <a href="#">Learn More →</a>
</div>
```

### Create a Grid
```jsx
<div className="grid grid-cols-3">
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
  <div className="card">Card 3</div>
</div>
```

### Add Icon
```jsx
import { FiHome, FiUser, FiMail } from "react-icons/fi"

<FiHome size={24} />
<FiUser size={32} />
<FiMail size={16} />
```

---

## 📊 Color Palette Reference

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #1e7e34 | Buttons, links, accents |
| Primary Light | #2ecc71 | Hover states, highlights |
| Primary Dark | #0f5720 | Dark backgrounds |

### Accents
| Color | Hex | Usage |
|-------|-----|-------|
| Secondary | #f39c12 | Alerts, CTAs, highlights |
| Accent | #e74c3c | Errors, urgent actions |
| Highlight | #3498db | Links, special content |

### Neutrals
| Color | Hex | Usage |
|-------|-----|-------|
| White | #ffffff | Backgrounds, cards |
| Light Gray | #f8f9fa | Secondary backgrounds |
| Dark | #2c3e50 | Text, footer |
| Dark Footer | #1a252f | Footer background |

---

## 📱 Responsive Breakpoints

```css
Desktop:      992px and above
Tablet:       768px to 991px
Mobile:       480px to 767px
Small Mobile: Below 480px
```

The site automatically adapts layouts at these breakpoints. Test on your phone!

---

## ✅ Best Practices Checklist

### Before Deploying
- [ ] Update all contact information
- [ ] Replace placeholder images with real ones
- [ ] Change all email links to your actual emails
- [ ] Update phone numbers
- [ ] Add real social media links
- [ ] Update donation link/button
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Update SEO titles and descriptions
- [ ] Test form submissions

### Performance
- [ ] Optimize images (use PNG/WebP)
- [ ] Minify CSS/JS (npm run build does this)
- [ ] Test page load speed
- [ ] Lazy load images
- [ ] Cache static assets

### Security
- [ ] Enable HTTPS
- [ ] Sanitize form inputs
- [ ] Don't expose sensitive info
- [ ] Use environment variables for secrets
- [ ] Update dependencies regularly

---

## 🐛 Troubleshooting

### Issue: Port 5173 already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: Module not found errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails
```bash
# Clear Vite cache
rm -rf dist
npm run build
```

### Issue: Images not loading
- Check image path is correct
- Use relative paths from `public/` folder
- Example: `/logo.svg` for `public/logo.svg`

---

## 📚 Learn More

### Documentation Files
- **UPGRADE_SUMMARY.md** - Complete list of changes
- **DESIGN_SYSTEM.md** - Detailed design system documentation
- **README.md** - Original project README

### Resources
- [React Documentation](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

---

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Connect GitHub repo and auto-deploy
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## 📞 Support

### Common Questions

**Q: How do I change the organization name?**  
A: Edit text in components and pages. Search for "Jeevika Foundation" to find all instances.

**Q: Can I add more pages?**  
A: Yes! Create new file in `src/pages/`, add route in `App.tsx`, add navigation link in `Navbar.tsx`.

**Q: How do I add animations?**  
A: Use framer-motion (already installed):
```jsx
import { motion } from "framer-motion"
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

**Q: Where do I update the footer?**  
A: Edit `src/components/Footer/Footer.tsx`

**Q: How do I add a new blog post?**  
A: Add to `src/data/posts.ts` with slug, title, content, etc.

---

## 🎉 You're All Set!

Your Jeevika Foundation website is ready to go!

### Next Steps:
1. ✅ Run `npm run dev` to see the site
2. ✅ Update content with your information
3. ✅ Customize colors and styling
4. ✅ Add real images and logos
5. ✅ Test on mobile
6. ✅ Deploy to production

---

**Happy Coding! 🚀**

For questions or issues, refer to the documentation files or check the source code comments.

**Version**: 2.0 - Foundation Theme  
**Last Updated**: March 24, 2026
