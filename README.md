# Facettes

A pixel-art game to discover classic paintings built with Vue.js 2.

## 🎨 About

Facettes is an interactive art recognition game where players identify famous paintings from pixelated images that progressively reveal themselves. Test your art knowledge across three difficulty levels featuring masterpieces from renowned museums!

## ✨ Features

- 🖼️ **228 Famous Paintings** - Curated collection of iconic artworks
- 🎮 **Three Difficulty Levels** - Easy, Medium, and Hard modes
- ⏱️ **Timed Challenges** - Race against the clock to identify paintings
- 🏆 **Scoring System** - Earn points based on speed and accuracy
- 🌍 **Internationalization** - Support for French and English
- 📱 **Responsive Design** - Play on desktop or mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Facettes.git
cd Facettes

# Install dependencies
npm install

# Set up environment variables (see ENV_SETUP.md)
# Create a .env.local file with your configuration

# Start development server
npm run serve
```

The application will be available at `http://localhost:8080`

### Building for Production

```bash
npm run build
```

## 🔧 Configuration

See [ENV_SETUP.md](ENV_SETUP.md) for detailed environment variable configuration.

## 📁 Project Structure

```
Facettes/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and styles
│   ├── data/           # Painting data (JSON)
│   ├── locales/        # i18n translation files
│   ├── plugins/        # Vue plugins (axios, vuetify)
│   ├── router/         # Vue Router configuration
│   ├── store/          # Vuex store
│   ├── utils/          # Utility functions and constants
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   └── main.js         # Application entry point
├── ENV_SETUP.md        # Environment setup guide
└── package.json        # Dependencies and scripts
```

## 🛠️ Technologies

- **Vue.js 2** - Progressive JavaScript framework
- **Vuex** - State management
- **Vue Router** - Client-side routing
- **Vuetify 2** - Material Design component framework
- **Vue I18n** - Internationalization
- **Axios** - HTTP client
- **string-similarity** - Text comparison for answer validation

## 🎮 How to Play

1. **Choose a difficulty level** - Select Easy, Medium, or Hard
2. **Identify the painting** - A pixelated image will gradually reveal
3. **Type your guess** - Enter the painting's title
4. **Score points** - Faster guesses earn more points
5. **Complete the rounds** - Try to get the highest score!

## 🔨 Recent Improvements

This project has undergone a comprehensive code audit and refactoring:

### Critical Fixes
- ✅ Fixed router path collisions
- ✅ Removed hardcoded API keys (moved to environment variables)
- ✅ Fixed direct Vuex state mutations
- ✅ Implemented proper timer cleanup to prevent memory leaks
- ✅ Extracted painting data to separate JSON file

### Code Quality
- ✅ Added proper v-for keys throughout
- ✅ Fixed duplicate painting IDs
- ✅ Implemented route lazy loading
- ✅ Removed unused dependencies (pixelate, less, less-loader)
- ✅ Extracted magic numbers to constants
- ✅ Added comprehensive internationalization
- ✅ Created utility functions for string helpers
- ✅ Fixed logical operators and code style issues
- ✅ Added error handling for image loading

### Performance & Best Practices
- ✅ Cleaner component architecture
- ✅ Proper mutation patterns in Vuex
- ✅ Better separation of concerns
- ✅ Added SEO meta tags
- ✅ Fixed font format declarations
- ✅ Removed commented code blocks

## 📝 Available Scripts

```bash
npm run serve      # Start development server
npm run build      # Build for production
npm run lint       # Lint and fix files
```

## 🌐 Internationalization

The app supports multiple languages. Translation files are located in `src/locales/`:
- `fr.json` - French (default)
- `en.json` - English

To add a new language, create a new JSON file in the locales directory and update `src/i18n.js`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Painting images sourced from various museum APIs
- Built with Vue.js and Vuetify
- Inspired by the love of art and gaming
