# Debian Sources List Generator

Source code for [debgen.xyz](https://debgen.xyz) - A modern web application to generate `sources.list` files for Debian and Ubuntu systems.

## Features

- 🌍 Support for multiple Debian and Ubuntu mirrors worldwide
- 🔄 Latest Debian releases (up to Trixie/13) and Ubuntu LTS/regular releases
- 🌐 Multi-language support (English, German)
- 📱 Responsive design
- ⚡ Modern webpack-based build system
- 🔧 Configurable components (main, contrib, non-free, universe, multiverse, restricted)
- 🛡️ Security repository integration
- 📦 Architecture-specific repository generation

## Supported Distributions

### Debian
- Debian 13 (Trixie) - Testing
- Debian 12 (Bookworm) - Current Stable
- Debian 11 (Bullseye) - Oldstable
- Debian 10 (Buster) - Oldoldstable
- Legacy versions (Stretch, Jessie, Wheezy, Squeeze)

### Ubuntu
- Ubuntu 24.04 LTS (Noble Numbat)
- Ubuntu 23.10 (Mantic Minotaur)
- Ubuntu 23.04 (Lunar Lobster)
- Ubuntu 22.04 LTS (Jammy Jellyfish)
- Ubuntu 20.04 LTS (Focal Fossa)
- Other versions back to 18.04 LTS

## Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Install source code

```bash
git clone https://github.com/gOOvER/debgen.git
cd debgen
```

### Install packages

```bash
npm install
```

or

```bash
yarn install
```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for production

```bash
npm run build
```

This will generate optimized files in the `public` directory.

## Usage

1. Select your preferred mirror from the dropdown
2. Choose your Debian or Ubuntu release
3. Select architecture (if specific requirements)
4. Configure components:
   - **Debian**: main, contrib, non-free, non-free-firmware
   - **Ubuntu**: main, universe, multiverse, restricted
5. Enable/disable source packages and security updates
6. Click "Generate" to create your `sources.list`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Changelog

### v1.0.0
- ✅ Updated to latest Debian/Ubuntu releases
- ✅ Fixed security vulnerabilities in dependencies
- ✅ Improved accessibility (WCAG compliance)
- ✅ Enhanced Ubuntu support with proper component mapping
- ✅ Modern webpack configuration
- ✅ Bug fixes and performance improvements