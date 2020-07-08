# Lightweight JS library for autogrowing `<textarea />` 

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/js-textarea-autogrow?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/js-textarea-autogrow)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/js-textarea-autogrow)](https://www.npmjs.com/package/@ivanhanak_com/js-textarea-autogrow)

Lightweight (>0,1kb) javascript library to auto-grow your `<textarea />` on user input. 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/js-textarea-autogrow
```

Using yarn:

```sh
yarn add @ivanhanak_com/js-textarea-autogrow
```

## Usage in vanilla js

```jsx harmony 
import autoGrow, {initializeTextAreaAutoGrow} from '@ivanhanak_com/js-textarea-autogrow';
const textArea = document.getElementById("my-textarea");

textArea.addEventListener("input", e => {
    autoGrow(textArea);
});
autoGrow(textArea);


//or let the library take care of attaching onInput event
initializeTextAreaAutoGrow(textArea);

```

## Usage in react

### Controlled component example
```jsx harmony 
import React, {Component} from 'react'; //sorry for classes guys :D

//with controlled component
class App extends Component {

  fieldRef = null;

  componentDidMount() {
    autoGrow(this.fieldRef);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.value !== this.props.value) {
      autoGrow(this.fieldRef);
    }
  }

  render() {
    return (
        <textarea onChange={this.props.onChange} value={this.props.value} ref={ref => this.fieldRef = ref} />
    );
  }
}
```

### Uncontrolled component example
```jsx harmony 
class App extends Component {

  fieldRef = null;

  componentDidMount() {
    initializeTextAreaAutoGrow(this.fieldRef);
  }

  render() {
    return (
        <textarea ref={ref => this.fieldRef = ref} />
    );
  }
}

```


## Browser support
IE5+ 🙂