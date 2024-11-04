⚛️ Styling React Components ⚛️

This project explores different approaches to styling React components, including Native CSS, Modular CSS, Styled Components (third-party package), and Tailwind CSS. 🎨✨ 
Each method offers unique benefits and disadvantages that cater to different development needs. Let's dive in! 🚀

| CSS Method         | Advantages                                                     | Disadvantages                            | Scope                                   |
|--------------------|----------------------------------------------------------------|------------------------------------------|-------------------------------------------------|
| Native CSS         | Simple to use, no dependencies required. 😊                   | Global scope can lead to conflicts. 🔻   | Global 🌐
| Modular CSS        | Scopes styles to components, avoids conflicts. 🔒             | Multiple CSS files without much code. 🔻 | Only in the file where it is imported ✅
| Styled Components  | Configurable style functions, components reusability. 🐸      | Many small 'wrapper' components. 🔻      | Only in the file where it is imported ✅
| Tailwind CSS       | Utility-first, easy to learn and rapid prototyping. ⚡        | Can lead to overload CSS classes. 🔻     | Unique CSS classes ✅

## How to Use Different CSS Methods

### How to Use Native CSS
To use Native CSS in your project, import your CSS file in your main `index.jsx` file (root component):

```javascript
import './index.css';
```
Then, define your styles in the index.css file. For example:

html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

🌟 This method is straightforward and requires no additional dependencies!

How to Use Modular CSS
For Modular CSS, create a CSS file for the component you want to style. 
For instance, if you have a Header component, you would create a file named Header.module.css. 
The .module suffix signals the underlying build process of React to scope the styles locally. 🎨

Define your styles in Header.module.css like this:
.paragraph {
  text-align: center;
  color: #a39191;
  margin: 0;
}

Then, in your Header.jsx file, import the styles as an object:
import classes from './Header.module.css';

Finally, use dot notation to access the styles you want:
<p className={classes.paragraph}>A community of artists and art-lovers. 🎉</p>
Any remaining styles that use element selectors will be applied automatically. 🖌️

How to Use Tailwind CSS
For Tailwind CSS, I highly recommend checking out the official documentation and practicing to get comfortable with it! You can find it here: Tailwind CSS Docs. 🚀

With Tailwind, you can use utility classes directly in your JSX:
<div className="text-center text-gray-600">
  <p>A community of artists and art-lovers. 🎨</p>
</div>

I hope this help u 🐸
