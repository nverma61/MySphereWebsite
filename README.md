# MySphere Website

A beautiful, modern website for MySphere - an AI-powered app that connects senior citizens to carefully matched companions for meaningful in-person support.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Accessible**: Built with accessibility best practices
- **Fast Loading**: Optimized for performance

## Pages

1. **Home Page** (`index.html`)
   - Hero section with company mission
   - Features showcase (Ease Stress, Foster Bonds, Encourage Growth)
   - Mission statement
   - Opportunities section with form links

2. **About Us Page** (`about.html`)
   - Founder profiles with photos
   - Company story and values
   - Call to action

## Setup Instructions

1. **Add Founder Photos**:
   - Place Naman's photo as `images/naman.jpg`
   - Place Aarushi's photo as `images/aarushi.jpg`
   - Recommended size: 400x400px or larger (square format)

2. **Update Form Links**:
   - Replace the placeholder links in the JavaScript file or HTML
   - Update `waitlist-btn` href with the actual waitlist form URL
   - Update `companion-btn` href with the actual companion interest form URL

3. **Launch**:
   - Open `index.html` in a web browser
   - Or host on any web server (GitHub Pages, Netlify, Vercel, etc.)

## File Structure

```
MySphereWebsite/
├── index.html          # Home page
├── about.html          # About us page
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── images/             # Folder for photos
│   ├── naman.jpg       # (To be added)
│   └── aarushi.jpg     # (To be added)
└── README.md           # This file
```

## Customization

### Colors
The website uses a modern purple gradient theme. Main colors:
- Primary: `#6366f1` (Indigo)
- Secondary: `#667eea` to `#764ba2` (Purple gradient)
- Text: `#1e293b` (Dark slate)
- Light text: `#64748b` (Slate)

### Fonts
Uses Inter font family from Google Fonts for a clean, modern look.

### Form Links
To update the form links, you can either:

1. **Edit HTML directly**: Replace `#` in the href attributes
2. **Use JavaScript function**: Call `updateFormLinks(waitlistUrl, companionUrl)` in the console or add it to the script

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Notes

- The website is fully static and doesn't require a backend
- Images will show placeholders until actual photos are added
- Form buttons currently show alerts until real URLs are provided
- All animations and interactions work without JavaScript, but JavaScript enhances the experience

## Contact

Built for Naman Verma (CEO) and Aarushi (COO) - MySphere co-founders 