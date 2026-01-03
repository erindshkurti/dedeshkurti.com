# Dedë Shkurti - Tribute Website

A minimal, elegant tribute website honoring the life and work of Dedë Shkurti (1953-2018), poet, writer, publicist, and mechanical engineer.

## Features

- **Bilingual Support**: Full English and Albanian language toggle
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme toggle for user preference
- **Elegant Typography**: Cormorant Garamond font for a classic, respectful aesthetic
- **Interactive Elements**: Smooth animations and hover effects
- **Media Gallery**: Photo gallery and embedded TV appearances

## Sections

- **Biography**: Comprehensive life story and achievements
- **Publications**: Four published works (2002-2019)
- **TV Appearances**: Featured media interviews
- **Gallery**: Cherished moments and memories
- **Tributes**: Space for sharing memories

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables for theming
- **Vanilla JavaScript**: Theme and language toggle functionality
- **Hosting**: Static website hosting with CDN
- **SSL**: HTTPS enabled for security

## Deployment

This website is hosted as a static site on **AWS S3** with **CloudFront CDN** for global distribution and HTTPS support.

**Hosting Stack:**
- **S3**: Static file storage
- **CloudFront**: Content delivery network (CDN) with SSL/TLS
- **Route 53**: DNS management
- **Certificate Manager**: Free SSL certificates

**To deploy updates:**
1. Upload changed files to S3 bucket via AWS Console
2. Create CloudFront invalidation to clear cache
3. Changes will be live within 2-5 minutes

## Local Development

To run the website locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Project Structure

```
├── assets/          # Images and media files
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # JavaScript functionality
├── favicon.ico      # Website favicon
└── README.md        # This file
```

## Design Philosophy

This website follows a minimal, elegant design approach appropriate for a tribute site:

- Clean, uncluttered layout
- Respectful color palette (dark mode default)
- Serif typography for timeless elegance
- Smooth transitions and subtle animations
- Focus on content and readability

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a personal tribute website. All content and images are used with permission.

**Content Copyright**: All photos, images, and personal text content on this website are **Copyright © 2025 Dedë Shkurti Family. All Rights Reserved.** They may not be used, reproduced, or distributed without express written permission.

---

**In Loving Memory**  
Dedë Shkurti (1953 - 2018)  
*Forever in our hearts*
