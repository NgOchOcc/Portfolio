# Portfolio Website - Personal Portfolio

A modern, professional personal portfolio website with responsive design and smooth animations.

🌐 **Live Demo**: [https://yourusername.github.io/portfolio](https://yourusername.github.io/portfolio)

## 🎨 Features

### Core Sections
- **About Me**: Brief description about yourself, education, expertise, and key skills
- **CV**: Display education summary, work experience, with downloadable CV button
- **Publications**: List of research papers, publications, and academic projects
- **Blog**: Personal blog section with articles about AI, ML, and NLP
- **Contact**: Contact form and social media links (GitHub, LinkedIn, Google Scholar)

### 🚀 Advanced Animations & Effects

#### **Lottie Animations**
- 🤖 **AI Brain Animation**: Floating AI brain in hero section
- 💡 **Section Icons**: Custom Lottie animations for each section
- 🎨 **Smooth Transitions**: Professional micro-animations

#### **GSAP Advanced Animations**
- ✨ **Hero Entry**: Staggered animations for title, subtitle, buttons
- 📜 **ScrollTrigger**: Section animations triggered by scroll position
- 🎪 **3D Card Effects**: Hover animations with depth
- 💫 **Parallax Scrolling**: Multi-layer parallax effects
- 🔄 **Auto-hide Navbar**: Smart navbar that hides on scroll down

#### **AOS (Animate On Scroll)**
- 📱 **Fade Animations**: fade-up, fade-left, fade-right
- 🔍 **Zoom Effects**: zoom-in animations for cards
- ⏱️ **Staggered Delays**: Sequential animations for multiple elements

#### **AI-Themed Effects**
- 🌈 **Holographic Gradients**: Shifting rainbow effects
- 💎 **Glass Morphism**: Frosted glass effects on social links
- ⚡ **Glow Effects**: Neon glow on hover
- 📟 **Scanline Effect**: Retro terminal aesthetics
- 🎯 **Binary Background**: Scrolling binary code
- 🔮 **Gradient Borders**: Animated rainbow borders
- ⭐ **Shimmer Text**: Animated text highlights

## 🚀 Cách chạy project

### Yêu cầu
- Một trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm phần mềm hay framework

### Các bước thực hiện

1. **Mở trang web**:
   - Nhấp đúp vào file `index.html` để mở trong trình duyệt
   - Hoặc kéo thả file `index.html` vào cửa sổ trình duyệt
   - Hoặc sử dụng Live Server (nếu dùng VS Code)

2. **Sử dụng Live Server (Khuyến nghị)**:
   ```bash
   # Nếu bạn có Python đã cài đặt:
   python -m http.server 8000
   # Sau đó truy cập: http://localhost:8000

   # Hoặc nếu bạn có Node.js:
   npx http-server -p 8000
   # Sau đó truy cập: http://localhost:8000
   ```

3. **Với VS Code**:
   - Cài extension "Live Server"
   - Click chuột phải vào file `index.html`
   - Chọn "Open with Live Server"

## 📝 Cách chỉnh sửa nội dung

### 1. Thay đổi thông tin cá nhân

Mở file `index.html` và tìm các phần sau để chỉnh sửa:

**Hero Section** (Dòng ~24-30):
```html
<h1 class="hero-title">Chào mừng đến với Portfolio của tôi</h1>
<p class="hero-subtitle">Nhà nghiên cứu | Kỹ sư phần mềm | Học viên PhD</p>
```

**About Section** (Dòng ~35-65):
- Thay đổi ảnh đại diện: Thay link trong `<img src="...">`
- Sửa tên, chức danh, và mô tả bản thân
- Thêm/bớt kỹ năng trong phần `<span class="skill-tag">`

**CV Section** (Dòng ~70-140):
- Cập nhật học vấn và kinh nghiệm làm việc
- Thay đổi ngày tháng, tên trường, công ty
- Thêm/xóa các mục CV theo nhu cầu

**Timeline Section** (Dòng ~150-200):
- Thêm/sửa các mốc thời gian công việc
- Cấu trúc mỗi item:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <span class="timeline-date">2023 - Hiện tại</span>
        <h3>Tên dự án</h3>
        <p>Mô tả dự án</p>
    </div>
</div>
```

**Publications Section** (Dòng ~210-280):
- Thêm/sửa các bài báo khoa học
- Cấu trúc mỗi publication card:
```html
<div class="publication-card">
    <div class="publication-header">
        <i class="fas fa-file-alt"></i>
        <span class="publication-year">2023</span>
    </div>
    <h3 class="publication-title">Tiêu đề bài báo</h3>
    <p class="publication-authors">Tác giả</p>
    <p class="publication-venue">Hội nghị/Tạp chí</p>
    <div class="publication-links">
        <a href="#" class="pub-link"><i class="fas fa-link"></i> Paper</a>
    </div>
</div>
```

**Contact Section** (Dòng ~290-340):
- Cập nhật email, GitHub, LinkedIn, Google Scholar
- Sửa link trong các thẻ `<a href="...">`

### 2. Thay đổi màu sắc

Mở file `assets/css/main.css` và sửa biến CSS ở đầu file (Dòng ~8-18):

```css
:root {
    --primary-color: #2563eb;      /* Màu chính */
    --secondary-color: #1e40af;    /* Màu phụ */
    --accent-color: #3b82f6;       /* Màu nhấn */
    --text-dark: #1f2937;          /* Màu chữ đậm */
    --text-light: #6b7280;         /* Màu chữ nhạt */
    --bg-light: #f9fafb;           /* Màu nền nhạt */
    --bg-white: #ffffff;           /* Màu nền trắng */
}
```

### 3. Thay thế CV PDF

- Tạo file CV của bạn dưới dạng PDF
- Đặt file vào thư mục `assets/docs/` và đặt tên là `cv.pdf` để thay thế file mẫu
- Hoặc đổi tên file PDF của bạn và cập nhật link trong `index.html`:
```html
<a href="assets/docs/your-cv.pdf" class="btn btn-secondary" download>
```

### 4. Tích hợp Form liên hệ

Form hiện tại chỉ hiển thị alert. Để form hoạt động thực sự, bạn có thể:

**Option 1: Sử dụng Formspree** (Miễn phí, dễ dàng)
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Giữ nguyên các input fields -->
</form>
```

**Option 2: Sử dụng EmailJS**
- Đăng ký tài khoản tại emailjs.com
- Thêm EmailJS SDK vào `index.html`
- Cập nhật code trong `script.js`

**Option 3: Tạo backend riêng**
- Sử dụng Node.js, PHP, Python, etc.
- Tạo API endpoint để nhận dữ liệu form
- Gửi email thông qua SMTP

## 🎨 Tùy chỉnh thiết kế

### Thay đổi font chữ
Trong file `style.css`, tìm và thay đổi:
```css
body {
    font-family: 'Your-Font-Name', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Thêm Google Fonts
Thêm vào `<head>` của `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Thay đổi gradient của Hero Section
Trong file `assets/css/main.css`, tìm `.hero` và sửa:
```css
background: linear-gradient(135deg, #màu1 0%, #màu2 100%);
```

## 📱 Responsive Design

Trang web được thiết kế responsive, tự động điều chỉnh cho:
- Desktop (> 768px)
- Tablet (768px - 480px)
- Mobile (< 480px)

## 🌟 Tính năng nâng cao

Website bao gồm nhiều tính năng JavaScript:
- Smooth scrolling
- Navigation menu cho mobile
- Scroll animations
- Progress bar khi scroll
- Nút "Back to top"
- Parallax effect
- Active navigation highlighting
- Form validation

## 📂 Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── README.md              # Documentation
├── assets/                # Static assets folder
│   ├── css/
│   │   └── main.css      # Main stylesheet (2300+ lines with animations)
│   ├── js/
│   │   └── main.js       # Core JavaScript + GSAP/AOS/Lottie initialization
│   ├── images/
│   │   └── profile/
│   │       └── avatar.jpg # Profile image
│   └── docs/
│       └── cv.pdf        # CV/Resume
└── blog/                  # Blog posts
    ├── transformers.html      # Blog: Getting Started with Transformers
    ├── vietnamese-nlp.html    # Blog: Vietnamese NLP Fine-tuning
    └── llm-future.html        # Blog: Future of LLMs
```

## 🛠️ Technologies & Libraries

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No jQuery dependency

### Animation Libraries
- **GSAP 3.12**: Professional-grade animation engine
- **ScrollTrigger**: Scroll-based animations
- **AOS 2.3**: Animate On Scroll library
- **Particles.js**: Particle effects
- **Lottie**: Vector animations

### Design Features
- **Responsive Design**: Mobile-first approach
- **CSS Custom Properties**: Dynamic theming
- **Glass Morphism**: Modern UI effects
- **Neumorphism**: Soft UI elements
- **Dark Mode Ready**: Easy color scheme switching

### 📝 Adding New Content

**New blog posts**:
- Create a new HTML file in the `blog/` folder
- Copy the structure from existing blog posts
- Update the navigation links to use `../assets/css/main.css` and `../assets/js/main.js`
- Add a new blog card in `index.html` with the appropriate `data-blog` attribute

**New images**:
- Add to `assets/images/` folder
- Create subfolders as needed (e.g., `assets/images/blog/`)
- Reference with relative paths: `assets/images/subfolder/image.jpg`

**New styles**:
- Edit `assets/css/main.css`
- Use CSS custom properties for consistent theming

**New JavaScript**:
- Edit `assets/js/main.js` or create new files in `assets/js/`
- Link new scripts in HTML: `<script src="assets/js/your-script.js"></script>`

**New documents**:
- Add PDFs and other documents to `assets/docs/`
- Link them: `<a href="assets/docs/document.pdf" download>`

## 🔧 Troubleshooting

**Vấn đề: Ảnh không hiển thị**
- Kiểm tra đường dẫn ảnh trong `index.html`
- Thay placeholder bằng ảnh thật của bạn
- Đảm bảo file ảnh nằm đúng thư mục

**Vấn đề: Icons không hiển thị**
- Kiểm tra kết nối internet (Font Awesome load từ CDN)
- Hoặc tải Font Awesome về local

**Vấn đề: Animations không hoạt động**
- Đảm bảo file `script.js` được load đúng
- Kiểm tra console của trình duyệt xem có lỗi không

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository: `portfolio` (or any name you prefer)
5. Choose **Public** (required for free GitHub Pages)
6. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files to staging
git add .

# Commit your changes
git commit -m "Initial commit: Add portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

> **Note**: Replace `yourusername` with your actual GitHub username.

If you get an error about `master` vs `main` branch, run:
```bash
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/yourusername/portfolio`
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be live at:
```
https://yourusername.github.io/portfolio
```

> **Tip**: GitHub will show you the URL at the top of the Pages settings page.

### 🔄 Update Your Website

Whenever you make changes to your portfolio:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

Your website will automatically update in 1-2 minutes!

### 📝 Custom Domain (Optional)

If you want to use a custom domain (e.g., `yourname.com`):

1. Buy a domain from a domain registrar (Namecheap, GoDaddy, etc.)
2. In your repository, create a file named `CNAME` with your domain:
   ```
   yourname.com
   ```
3. In your domain registrar's DNS settings, add these records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153

   Type: A
   Host: @
   Value: 185.199.109.153

   Type: A
   Host: @
   Value: 185.199.110.153

   Type: A
   Host: @
   Value: 185.199.111.153
   ```
4. Wait 24-48 hours for DNS propagation

### 🚀 Alternative Deployment Options

#### Netlify (Easier, More Features)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy site"
6. Done! Your site will be live at `yoursite.netlify.app`

#### Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site will be live at `yoursite.vercel.app`

### 🛠️ Troubleshooting Deployment

**Problem: 404 Page Not Found**
- Make sure `index.html` is in the root directory
- Check that GitHub Pages is enabled in Settings
- Wait a few minutes for deployment to complete

**Problem: Styles not loading**
- Make sure all CSS/JS file paths are relative (not absolute)
- Use `assets/css/main.css` instead of `/style.css`
- For blog posts, use `../assets/css/main.css`

**Problem: Images not showing**
- Check image paths in HTML
- Make sure images are committed to repository
- Use relative paths: `assets/images/subfolder/image.jpg`
- For blog posts, use: `../assets/images/subfolder/image.jpg`

**Problem: Blog post links broken**
- Make sure blog HTML files are in the `blog/` folder
- Update paths to assets: `../assets/css/main.css` and `../assets/js/main.js`
- Navigation links should point to `../index.html`

## 📄 License

You are free to use, modify, and distribute this code for personal purposes.

## 🤝 Contributing

If you want to improve this template, feel free to edit and share!

---

**Good luck with your portfolio! 🚀**

If you have any questions, feel free to reach out!
