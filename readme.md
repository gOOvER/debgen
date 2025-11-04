# 🚀 sourcelist.dev - Modern Debian/Ubuntu Sources Generator# 🚀 sourcelist.dev - Modern Debian/Ubuntu Sources Generator# 🚀 debgen - Modern Debian/Ubuntu Sources Generator# 🚀 debgen - Modern Debian/Ubuntu Sources Generator# Debian Sources List Generator



A modern, responsive web application for generating Debian and Ubuntu repository source configurations with support for both legacy `sources.list` and modern DEB822 `.sources` formats.



## ✨ FeaturesA modern, responsive web application for generating Debian and Ubuntu repository source configurations with support for both legacy `sources.list` and modern DEB822 `.sources` formats.



### 🎨 **Modern UI/UX**



- **Responsive Design**: Mobile-first approach with adaptive layouts## ✨ FeaturesA modern, responsive web application for generating Debian and Ubuntu repository source configurations with support for both legacy `sources.list` and modern DEB822 `.sources` formats.

- **Dark Mode Support**: Automatic theme detection and smooth transitions  

- **Modern Typography**: Inter font family for enhanced readability

- **Smooth Animations**: Engaging user interactions with CSS transitions

- **Accessibility**: WCAG compliant with keyboard navigation support### 🎨 **Modern UI/UX**



### 🌍 **Comprehensive Repository Support**



- **Debian Releases**: Debian 11 (Bullseye), 12 (Bookworm), 13 (Trixie), Stable, Testing- **Responsive Design**: Mobile-first approach with adaptive layouts## ✨ FeaturesA modern, responsive web application for generating Debian and Ubuntu repository source configurations with support for both legacy `sources.list` and modern DEB822 `.sources` formats.Source code for [debgen.xyz](https://debgen.xyz) - A modern web application to generate `sources.list` files for Debian and Ubuntu systems.

- **Ubuntu Releases**: Ubuntu 20.04 LTS, 22.04 LTS, 24.04 LTS (LTS only)

- **Architecture Support**: amd64, arm64, armhf, i386, ppc64el, s390x- **Dark Mode Support**: Automatic theme detection and smooth transitions  

- **Global Mirrors**: Optimized mirror selection for worldwide usage

- **Modern Typography**: Inter font family for enhanced readability

### 📋 **Advanced Format Support**

- **Smooth Animations**: Engaging user interactions with CSS transitions

- **Legacy Format**: Traditional `sources.list` format for all distributions

- **Modern .sources**: DEB822 format with intelligent auto-selection for Ubuntu 24.04+- **Accessibility**: WCAG compliant with keyboard navigation support### 🎨 **Modern UI/UX**

- **Component Selection**: Main, Contrib/Universe, Non-Free/Multiverse, Security, Backports, Proposed

- **Smart Defaults**: Automatic format recommendation based on selected distribution



### 🔧 **User Experience Enhancements**### 🌍 **Comprehensive Repository Support**



- **Distribution Selection**: Choose between Debian and Ubuntu on landing page

- **Copy to Clipboard**: One-click copying with visual feedback

- **Form Validation**: Real-time validation with helpful error messages- **Debian Releases**: From Debian 10 (Buster) to Debian 13 (Trixie)- **Responsive Design**: Mobile-first approach with adaptive layouts## ✨ Features## Features

- **Loading States**: Visual feedback during source generation

- **Notifications**: Toast notifications for user actions- **Ubuntu Releases**: From Ubuntu 20.04 LTS to Ubuntu 24.04 LTS

- **Keyboard Shortcuts**: Ctrl+Enter to generate, enhanced navigation

- **Architecture Support**: amd64, arm64, armhf, i386, ppc64el, s390x- **Dark Mode Support**: Automatic theme detection and smooth transitions  

## 🚀 Quick Start

- **Global Mirrors**: Optimized mirror selection for worldwide usage

### Prerequisites

- **Modern Typography**: Inter font family for enhanced readability

- Node.js 18+ 

- npm or yarn### 📋 **Advanced Format Support**



### Installation- **Smooth Animations**: Engaging user interactions with CSS transitions



```bash- **Legacy Format**: Traditional `sources.list` format for all distributions

# Clone the repository

git clone https://github.com/sourcelist-dev/sourcelist.dev.git- **Modern .sources**: DEB822 format with intelligent auto-selection for Ubuntu 24.04+- **Accessibility**: WCAG compliant with keyboard navigation support### 🎨 **Modern UI/UX**- 🌍 Support for multiple Debian and Ubuntu mirrors worldwide

cd sourcelist.dev

- **Component Selection**: Main, Contrib/Universe, Non-Free/Multiverse, Security, Backports, Proposed

# Install dependencies

npm install- **Smart Defaults**: Automatic format recommendation based on selected distribution



# Start development server

npm start

```### 🔧 **User Experience Enhancements**### 🌍 **Comprehensive Repository Support**- **Responsive Design**: Mobile-first approach with adaptive layouts- 🔄 Latest Debian releases (up to Trixie/13) and Ubuntu LTS/regular releases



The application will be available at `http://localhost:3000`



### Production Build- **Copy to Clipboard**: One-click copying with visual feedback



```bash- **Form Validation**: Real-time validation with helpful error messages

# Build for production

npm run build- **Loading States**: Visual feedback during source generation- **Debian Releases**: From Debian 10 (Buster) to Debian 13 (Trixie)- **Dark Mode Support**: Automatic theme detection and smooth transitions- 🗂️ **NEW: Modern .sources format support for Ubuntu 24.04+**



# Preview production build- **Notifications**: Toast notifications for user actions

npm run preview

```- **Keyboard Shortcuts**: Ctrl+Enter to generate, enhanced navigation- **Ubuntu Releases**: From Ubuntu 20.04 LTS to Ubuntu 24.04 LTS



## 🏗️ Architecture



### Frontend Stack## 🚀 Quick Start- **Architecture Support**: amd64, arm64, armhf, i386, ppc64el, s390x- **Modern Typography**: Inter font family for enhanced readability- 🎯 Intelligent format selection (Legacy vs Modern)



- **Build System**: Webpack 5 with modern configuration

- **Internationalization**: i18next v25.6.0 (German/English)

- **Styling**: Modern CSS with custom properties and CSS Grid### Prerequisites- **Global Mirrors**: Optimized mirror selection for worldwide usage

- **JavaScript**: ES6+ with modular architecture



### File Structure

- Node.js 18+ - **Smooth Animations**: Engaging user interactions with CSS transitions- 🌐 Multi-language support (English, German)

```

public/- npm or yarn

├── index.html          # Distribution selection page

├── debian.html         # Debian-specific generator### 📋 **Advanced Format Support**

├── ubuntu.html         # Ubuntu-specific generator

├── styles.css          # Modern CSS with design system### Installation

├── app.js             # Core application logic

├── modern-ui.js       # Enhanced UI interactions- **Accessibility**: WCAG compliant with keyboard navigation support- 📱 Responsive design

├── selection.js       # Distribution selection logic

├── lang/              # Internationalization files```bash

│   ├── de.json        # German translations

│   └── en.json        # English translations# Clone the repository- **Legacy Format**: Traditional `sources.list` format for all distributions

└── bundle.js          # Webpack generated bundle

git clone https://github.com/sourcelist-dev/sourcelist.dev.git

src/

└── index.js           # Application entry pointcd sourcelist.dev- **Modern .sources**: DEB822 format with intelligent auto-selection for Ubuntu 24.04+- ⚡ Modern webpack-based build system

```



## 🌐 Deployment Options

# Install dependencies- **Component Selection**: Main, Contrib/Universe, Non-Free/Multiverse, Security, Backports, Proposed

### Cloudflare Pages (Recommended)

npm install

```bash

# Install Wrangler CLI- **Smart Defaults**: Automatic format recommendation based on selected distribution### 🌍 **Comprehensive Repository Support**- 🔧 Configurable components (main, contrib, non-free, universe, multiverse, restricted)

npm install -g wrangler

# Start development server

# Deploy to Cloudflare Pages

wrangler pages publish publicnpm start

```

```

### Azure Static Web Apps

### 🔧 **User Experience Enhancements**- **Debian Releases**: From Debian 10 (Buster) to Debian 13 (Trixie)- 🛡️ Security repository integration

```bash

# Install Azure Developer CLIThe application will be available at `http://localhost:3000`

# Deploy using azure.yaml configuration

azd up

```

### Production Build

### GitHub Pages

- **Copy to Clipboard**: One-click copying with visual feedback- **Ubuntu Releases**: From Ubuntu 20.04 LTS to Ubuntu 24.04 LTS- 📦 Architecture-specific repository generation

Automated deployment via GitHub Actions when pushing to main branch.

```bash

## 🌟 Modern Features

# Build for production- **Form Validation**: Real-time validation with helpful error messages

### CSS Architecture

npm run build

- **Custom Properties**: Consistent design tokens

- **CSS Grid**: Modern layout system- **Loading States**: Visual feedback during source generation- **Architecture Support**: amd64, arm64, armhf, i386, ppc64el, s390x- 🚀 **NEW: Backports and Proposed repository options**

- **Flexbox**: Component-level layouts

- **Container Queries**: Responsive design patterns# Preview production build

- **Animation System**: Smooth, performant transitions

npm run preview- **Notifications**: Toast notifications for user actions

### JavaScript Enhancements

```

- **ModernUI Class**: Centralized UI interaction management

- **Notification System**: Toast notifications for user feedback- **Keyboard Shortcuts**: Ctrl+Enter to generate, enhanced navigation- **Global Mirrors**: Optimized mirror selection for worldwide usage- 🔒 Security-optimized (XSS protection, secure headers)

- **Accessibility Features**: Enhanced keyboard navigation

- **Form Validation**: Real-time validation with helpful messages## 🏗️ Architecture

- **Progressive Enhancement**: Works without JavaScript



### Browser Support

### Frontend Stack

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

- **Progressive Enhancement**: Graceful degradation for older browsers## 🚀 Quick Start

- **Performance**: Optimized for Core Web Vitals

- **Build System**: Webpack 5 with modern configuration

## 📝 Supported Versions

- **Internationalization**: i18next v25.6.0 (German/English)

### Debian (Current & Supported)

- **Debian 13 (Trixie)** - Testing- **Styling**: Modern CSS with custom properties and CSS Grid

- **Debian 12 (Bookworm)** - Current Stable

- **Debian 11 (Bullseye)** - Previous Stable (LTS until 2026)- **JavaScript**: ES6+ with modular architecture### Prerequisites### 📋 **Advanced Format Support**## Supported Distributions



### Ubuntu (LTS Only)

- **Ubuntu 24.04 LTS (Noble Numbat)** - Current LTS

- **Ubuntu 22.04 LTS (Jammy Jellyfish)** - Previous LTS  ### File Structure

- **Ubuntu 20.04 LTS (Focal Fossa)** - Extended Security until 2030



*Note: Only actively supported versions are included. EOL versions have been removed for security and stability reasons.*

```- Node.js 18+ - **Legacy Format**: Traditional `sources.list` format for all distributions

## 📝 Changelog

public/

### v1.0.0 (2025-11-XX)

├── index.html          # Modern HTML5 structure- npm or yarn

- 🎨 Complete UI modernization with responsive design

- 🆕 Ubuntu 24.04 LTS support with modern .sources format├── styles.css          # Modern CSS with design system

- 🔧 Enhanced user experience with copy-to-clipboard and notifications

- 🌍 Improved internationalization support├── app.js             # Core application logic- **Modern .sources**: DEB822 format with intelligent auto-selection for Ubuntu 24.04+### Debian

- ⚡ Performance optimizations and modern build system

- 🔒 Security enhancements and CSP headers├── modern-ui.js       # Enhanced UI interactions

- 📱 Mobile-first responsive design

- ♿ Accessibility improvements (WCAG compliance)├── lang/              # Internationalization files### Installation

- 🔄 Separate Debian and Ubuntu generators

- 🗑️ Removed EOL versions for better security│   ├── de.json        # German translations



## 📄 License│   └── en.json        # English translations- **Component Selection**: Main, Contrib/Universe, Non-Free/Multiverse, Security, Backports, Proposed- Debian 13 (Trixie) - Testing



This project is licensed under the MIT License.└── bundle.js          # Webpack generated bundle



## 🙏 Acknowledgments```bash



- Original concept and implementation inspirationsrc/

- Ubuntu and Debian communities for repository documentation

- Modern web development community for best practices└── index.js           # Application entry point# Clone the repository- **Smart Defaults**: Automatic format recommendation based on selected distribution- Debian 12 (Bookworm) - Current Stable

- Font families: Inter (UI) and JetBrains Mono (code)



---

.azure/git clone https://github.com/gOOvER/debgen.git

**Made with ❤️ for the Linux community**
├── azure.yaml         # Azure Developer CLI configuration

├── wrangler.toml      # Cloudflare Pages configurationcd debgen- Debian 11 (Bullseye) - Oldstable

└── workflows/         # CI/CD pipelines

```



## 🌐 Deployment Options# Install dependencies### 🔧 **User Experience Enhancements**- Debian 10 (Buster) - Oldoldstable



### Cloudflare Pages (Recommended)npm install



```bash- **Copy to Clipboard**: One-click copying with visual feedback- Legacy versions (Stretch, Jessie, Wheezy, Squeeze)

# Install Wrangler CLI

npm install -g wrangler# Start development server



# Deploy to Cloudflare Pagesnpm start- **Form Validation**: Real-time validation with helpful error messages

wrangler pages publish public

``````



### Azure Static Web Apps- **Loading States**: Visual feedback during source generation### Ubuntu



```bashThe application will be available at `http://localhost:3000`

# Install Azure Developer CLI

# Deploy using azure.yaml configuration- **Notifications**: Toast notifications for user actions- Ubuntu 24.04 LTS (Noble Numbat)

azd up

```### Production Build



### GitHub Pages- **Keyboard Shortcuts**: Ctrl+Enter to generate, enhanced navigation- Ubuntu 23.10 (Mantic Minotaur)



Automated deployment via GitHub Actions when pushing to main branch.```bash



## 🌟 Modern Features# Build for production- Ubuntu 23.04 (Lunar Lobster)



### CSS Architecturenpm run build



- **Custom Properties**: Consistent design tokens## 🚀 Quick Start- Ubuntu 22.04 LTS (Jammy Jellyfish)

- **CSS Grid**: Modern layout system

- **Flexbox**: Component-level layouts# Preview production build

- **Container Queries**: Responsive design patterns

- **Animation System**: Smooth, performant transitionsnpm run preview- Ubuntu 20.04 LTS (Focal Fossa)



### JavaScript Enhancements```



- **ModernUI Class**: Centralized UI interaction management### Prerequisites- Other versions back to 18.04 LTS

- **Notification System**: Toast notifications for user feedback

- **Accessibility Features**: Enhanced keyboard navigation## 🏗️ Architecture

- **Form Validation**: Real-time validation with helpful messages

- **Progressive Enhancement**: Works without JavaScript- Node.js 18+ 



### Browser Support### Frontend Stack



- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+- npm or yarn## Setup

- **Progressive Enhancement**: Graceful degradation for older browsers

- **Performance**: Optimized for Core Web Vitals- **Build System**: Webpack 5 with modern configuration



## 📝 Changelog- **Internationalization**: i18next v25.6.0 (German/English)



### v1.0.0 (2025-11-XX)- **Styling**: Modern CSS with custom properties and CSS Grid



- 🎨 Complete UI modernization with responsive design- **JavaScript**: ES6+ with modular architecture### Installation### Prerequisites

- 🆕 Ubuntu 24.04 LTS support with modern .sources format

- 🔧 Enhanced user experience with copy-to-clipboard and notifications

- 🌍 Improved internationalization support

- ⚡ Performance optimizations and modern build system### File Structure```bash- Node.js (v16 or higher)

- 🔒 Security enhancements and CSP headers

- 📱 Mobile-first responsive design

- ♿ Accessibility improvements (WCAG compliance)

```# Clone the repository- npm or yarn

## 📄 License

public/

This project is licensed under the MIT License.

├── index.html          # Modern HTML5 structuregit clone https://github.com/gOOvER/debgen.git

## 🙏 Acknowledgments

├── styles.css          # Modern CSS with design system

- Original concept and implementation inspiration

- Ubuntu and Debian communities for repository documentation├── app.js             # Core application logiccd debgen### Install source code

- Modern web development community for best practices

- Font families: Inter (UI) and JetBrains Mono (code)├── modern-ui.js       # Enhanced UI interactions



---├── lang/              # Internationalization files



**Made with ❤️ for the Linux community**│   ├── de.json        # German translations

│   └── en.json        # English translations# Install dependencies```bash

└── bundle.js          # Webpack generated bundle

npm installgit clone https://github.com/gOOvER/debgen.git

src/

└── index.js           # Application entry pointcd debgen



.azure/# Start development server```

├── azure.yaml         # Azure Developer CLI configuration

├── wrangler.toml      # Cloudflare Pages configurationnpm start

└── workflows/         # CI/CD pipelines

``````### Install packages



## 🌐 Deployment Options



### Cloudflare Pages (Recommended)The application will be available at `http://localhost:3000````bash



```bashnpm install

# Install Wrangler CLI

npm install -g wrangler### Production Build```



# Deploy to Cloudflare Pages```bash

wrangler pages publish public

```# Build for productionor



### Azure Static Web Appsnpm run build



```bash```bash

# Install Azure Developer CLI

# Deploy using azure.yaml configuration# Preview production buildyarn install

azd up

```npm run preview```



### GitHub Pages```



Automated deployment via GitHub Actions when pushing to main branch.### Development



## 🌟 Modern Features## 🏗️ Architecture



### CSS ArchitectureStart the development server with hot reloading:



- **Custom Properties**: Consistent design tokens### Frontend Stack

- **CSS Grid**: Modern layout system

- **Flexbox**: Component-level layouts- **Build System**: Webpack 5 with modern configuration```bash

- **Container Queries**: Responsive design patterns

- **Animation System**: Smooth, performant transitions- **Internationalization**: i18next v25.6.0 (German/English)npm run dev



### JavaScript Enhancements- **Styling**: Modern CSS with custom properties and CSS Grid```



- **ModernUI Class**: Centralized UI interaction management- **JavaScript**: ES6+ with modular architecture

- **Notification System**: Toast notifications for user feedback

- **Accessibility Features**: Enhanced keyboard navigationThe application will be available at `http://localhost:3000`

- **Form Validation**: Real-time validation with helpful messages

- **Progressive Enhancement**: Works without JavaScript### File Structure



### Browser Support```### Building for production



- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+public/

- **Progressive Enhancement**: Graceful degradation for older browsers

- **Performance**: Optimized for Core Web Vitals├── index.html          # Modern HTML5 structure```bash



## 📝 Changelog├── styles.css          # Modern CSS with design systemnpm run build



### v1.0.0 (2025-01-XX)├── app.js             # Core application logic```



- 🎨 Complete UI modernization with responsive design├── modern-ui.js       # Enhanced UI interactions

- 🆕 Ubuntu 24.04 LTS support with modern .sources format

- 🔧 Enhanced user experience with copy-to-clipboard and notifications├── lang/              # Internationalization filesThis will generate optimized files in the `public` directory.

- 🌍 Improved internationalization support

- ⚡ Performance optimizations and modern build system│   ├── de.json        # German translations

- 🔒 Security enhancements and CSP headers

- 📱 Mobile-first responsive design│   └── en.json        # English translations## Usage

- ♿ Accessibility improvements (WCAG compliance)

└── bundle.js          # Webpack generated bundle

## 📄 License

1. Select your preferred mirror from the dropdown

This project is licensed under the MIT License.

src/2. Choose your Debian or Ubuntu release

## 🙏 Acknowledgments

└── index.js           # Application entry point3. Select architecture (if specific requirements)

- Original concept and implementation inspiration

- Ubuntu and Debian communities for repository documentation4. Configure components:

- Modern web development community for best practices

- Font families: Inter (UI) and JetBrains Mono (code).azure/   - **Debian**: main, contrib, non-free, non-free-firmware



---├── azure.yaml         # Azure Developer CLI configuration   - **Ubuntu**: main, universe, multiverse, restricted



**Made with ❤️ for the Linux community**├── wrangler.toml      # Cloudflare Pages configuration5. Enable/disable source packages and security updates

└── workflows/         # CI/CD pipelines6. Click "Generate" to create your `sources.list`

```

## Contributing

## 🌐 Deployment Options

1. Fork the repository

### Cloudflare Pages (Recommended)2. Create a feature branch

```bash3. Make your changes

# Install Wrangler CLI4. Test thoroughly

npm install -g wrangler5. Submit a pull request



# Deploy to Cloudflare Pages## License

wrangler pages publish public

```MIT License - see LICENSE file for details



### Azure Static Web Apps## Changelog

```bash

# Install Azure Developer CLI### v1.0.0

# Deploy using azure.yaml configuration- ✅ Updated to latest Debian/Ubuntu releases

azd up- ✅ Fixed security vulnerabilities in dependencies

```- ✅ Improved accessibility (WCAG compliance)

- ✅ Enhanced Ubuntu support with proper component mapping

### GitHub Pages- ✅ Modern webpack configuration

Automated deployment via GitHub Actions when pushing to main branch.- ✅ Bug fixes and performance improvements

## 🌟 Modern Features

### CSS Architecture
- **Custom Properties**: Consistent design tokens
- **CSS Grid**: Modern layout system
- **Flexbox**: Component-level layouts
- **Container Queries**: Responsive design patterns
- **Animation System**: Smooth, performant transitions

### JavaScript Enhancements
- **ModernUI Class**: Centralized UI interaction management
- **Notification System**: Toast notifications for user feedback
- **Accessibility Features**: Enhanced keyboard navigation
- **Form Validation**: Real-time validation with helpful messages
- **Progressive Enhancement**: Works without JavaScript

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Performance**: Optimized for Core Web Vitals

## 📝 Changelog

### v1.0.0 (2025-01-XX)
- 🎨 Complete UI modernization with responsive design
- 🆕 Ubuntu 24.04 LTS support with modern .sources format
- 🔧 Enhanced user experience with copy-to-clipboard and notifications
- 🌍 Improved internationalization support
- ⚡ Performance optimizations and modern build system
- 🔒 Security enhancements and CSP headers
- 📱 Mobile-first responsive design
- ♿ Accessibility improvements (WCAG compliance)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Original concept and implementation inspiration
- Ubuntu and Debian communities for repository documentation
- Modern web development community for best practices
- Font families: Inter (UI) and JetBrains Mono (code)

---

**Made with ❤️ for the Linux community**