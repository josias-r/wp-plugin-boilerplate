# WordPress Plugin Boilerplate

Webpack dev server, Sass, Barba JS, GoLight JS, Prettier, WordPress Coding Standard

Conveniently develop WordPress plugins with ES6 and SCSS and watch your page update live.

_You might also be interested in: [wp-theme-boilerplate](https://github.com/josias-r/wp-theme-boilerplate)_

### Features

- **SCSS**: Modular CSS with variables and functions
- **Modern JavaScript**: Write Javascript using the latest syntax.
- **Modular JavaScript**: Split your JS files into multiple module files for better organization and import NPM libraries.
- **HMR**: Watch your changes live getting hot reloaded while developing
- **Browser support**: With the help of Babel and Browserslist everything will be compiled to support old Browsers
- **Linters**: [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [stylelint](https://stylelint.io/) will help you while developing. (Make sure you have the corresponding packages installed for your editor)
- **WordPress PHP Coding Standard**: The WordPress coding standard for phpcs is installed with composer and will guide you to code according to the rules set by WordPress.
  > Note: You should install the corresponding packages for your Editor to make full use of this feature.
- **Customizable**: Most of the above features origin from wpds-scripts which allows you to pass custom settings for your environment. [see configuration](#configuration)

### Installation

1. Clone this repo (or create your own from it) into your WordPress plugin folder.
2. Inside the cloned folder run `npm i` and `composer install` to install all the packages (you might also want to update the packages).
3. Run find and replace (`cmd/ctrl` + `shift` + `f` in atom and vscode) and replace all `boilerplate-slug` and `boilerplate_slug` instances with your own slug.
4. Rename the `wp-plugin-boilerplate.php` file (you should also rename the folder) with your own slug and start coding!

> Note: JS/SCSS/PHP Linters are preinstalled and will help you while developing, but ONLY if you have configured your editor correctly. Prettier and PHP_CodeSniffer (phpcs) can format you code aswell according to the linting rules.

> Note: This Boilerplate comes with the JavaScript libraries `Barba JS` and `GoLight JS` preinstalled. Don't hesitate to write your own script.

### Usage

To start the development server run `npm start`

To create a production build run `npm run build`

### Configuration

Please refer to the [wpds-scripts](https://github.com/josias-r/wpds-scripts/blob/master/README.md#cli-configuration) configuration.

## Donate

You can buy me a cup of coffee, if you'd like ^^

[![Donate](https://www.paypalobjects.com/en_US/CH/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AXJFXBX8XLYXQ&source=url)
