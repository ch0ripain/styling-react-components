### ⚛️ Styling React Components - Simple Guide ⚛️

This project explores different approaches to styling React components, including Native CSS, Modular CSS, Styled Components (third-party package), and Tailwind CSS. 🎨✨ 
Each method offers unique benefits and disadvantages that cater to different development needs. Let's dive in! 🚀

| CSS Method         | Advantages                                                     | Disadvantages                              | Scope                                   |
|--------------------|----------------------------------------------------------------|------------------------------------------  |-------------------------------------------------|
| Native CSS         | Simple to use, no dependencies required. 😊                   | Global scope can lead to conflicts. 🔻     | Global 🌐
| Modular CSS        | Scopes styles to components, avoids conflicts. 🔒             | Multiple CSS files without much code. 🔻   | Only in the file where it is imported ✅
| Styled Components  | Configurable style functions, components reusability. 🐸      | Many small 'wrapper' components. 🔻        | Only in the file where it is imported ✅
| Tailwind CSS       | Utility-first, easy to learn and rapid prototyping. ⚡        | Can lead to overload CSS classes. 🔻       | Unique CSS classes ✅

## How to Use Different CSS Methods

### How to Use Native CSS
To use Native CSS in your project, import your CSS file in your main `index.jsx` file (root component):

```javascript
import './index.css';
```
Then, define your styles in the index.css file. For example:
```css
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
```
🌟 This method is straightforward and requires no additional dependencies!

### How to Use Modular CSS
For Modular CSS, create a CSS file for the component you want to style. 
For instance, if you have a Header component, you would create a file named Header.module.css
> [!NOTE]  
> The .module suffix signals the underlying build process of React to scope the styles locally. 🎨

Define your styles in Header.module.css like this:
```css
.paragraph {
  text-align: center;
  color: #a39191;
  margin: 0;
}
```
Then, in your Header.jsx file, import the styles as an object:
```javascript
import classes from './Header.module.css';
```
Finally, use dot notation to access the styles you want:
```javascript
<p className={classes.paragraph}>A community of artists and art-lovers. 🎉</p>
```
> [!NOTE]  
> Any remaining styles that use element selectors will be applied automatically. 🖌️

### How to Use Styled Components
The first step is to install the Styled Components package. You can do this by running the following command:
```bash
npm install styled-components
```
Once installed, you can create your styled components by importing the styled object from the package. 
> [!NOTE]
> The styled object is a utility that allows you to define your components with styles attached directly to them. 🎨

Here’s how to create a styled component:
```javascript
import { styled } from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
```
You can also add dynamic styles using the ${} syntax, which allows you to interpolate JavaScript expressions within your styled component definitions.
```javascript
color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")}; // Dynamic color based on the $invalid prop
```
In this function, we destructure the $invalid prop, since styled components automatically forward all defined props. 
This means you can use props.invalid as well. 
We check the value of $invalid using a ternary expression to define the color based on its value. 

Finally, you can use your styled component just like any React component or HTML element:
```javascript
<Label $invalid={emailNotValid}>Email</Label>
```
> [!NOTE]
> The $ symbol is used to avoid naming clashes with other props.

### How to Use Tailwind CSS
For Tailwind CSS, I highly recommend checking out the official documentation and practicing to get comfortable with it! You can find it here: [Tailwind CSS Docs](https://tailwindcss.com/docs/guides/vite). 🚀

With Tailwind, you can use utility classes directly in your JSX:
```javascript
<div className="text-center text-gray-600">
  <p>A community of artists and art-lovers. 🎨</p>
</div>
```
---
<p align="center">This project is a practice exercise I learned from the (https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=ST7MT110524)[Academind's React Course] - I hope this helps u 🐸</p>

