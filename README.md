# Kaya Chishiro Web Site

こちらのリポジトリでは、だらだら妹系バーチャル YouTuber「千城かや」の Web サイトのコードを管理しています。

## 主な使用技術

- HTML5
- CSS
  - CSS3
  - Sass
    - SCSS
- Script
  - Node.js
  - Vue.js
  - Nuxt.js
    - Nuxt 3

## Emojis

コミットログの接頭辞に絵文字を用いて、コミットの種類を判別しやすくしています。

- 🎉 `:tada:` 初めてのコミット (Initial Commit)
- 🔖 `:bookmark:` バージョンタグ (Version Tag)
- ✨ `:sparkles:` 新機能 (New Feature)
- 🐛 `:bug:` バグ修正 (Bugfix)
- ♻️ `:recycle:` リファクタリング (Refactoring)
- 📚 `:books:` ドキュメント (Documentation)
- 🎨 `:art:` デザイン UI/UX (Accessibility)
- 🔧 `:wrench:` ツール (Tooling)
- 🚨 `:rotating_light:` テスト (Tests)
- 💩 `:hankey:` 非推奨追加 (Deprecation)
- 🗑️ `:wastebasket:` 削除 (Removal)
- 🚧 `:construction:` WIP (Work In Progress)

## Build Setup

### Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
