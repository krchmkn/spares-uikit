[Back](https://github.com/korchemkin/spares)

# Button

```jsx

// example index.js

import React from 'react';
import ReactDOM from 'react-dom';

// import Spares uikit Button
import Button from './button/Button';

ReactDOM.render(
  <div>

    <Button onclick={testFunc.bind(null, 'click')}>Click me</Button>

    <Button submit>Submit button</Button>

    <Button color="primary">Click me</Button>

    <Button color="danger">Click me</Button>

  </div>
, document.getElementById('root'));

```

## Button with icon

```jsx

  <Button icon="edit">Edit</Button>

  <Button icon="refresh">Refresh</Button>

  <Button icon="menu">Menu</Button>

  <Button icon="dropdown" color="primary">Dropdown</Button>

  <Button icon="remove" color="danger">Remove</Button>

```

# Button disabled

```jsx

  <Button disabled>Click me</Button>

  <Button color="primary" disabled>Click me</Button>

  <Button color="danger" disabled>Click me</Button>

```


## PropTypes

```jsx

Button.propTypes = {
  color: React.PropTypes.string,
  submit: React.PropTypes.bool,
  onclick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  icon: React.PropTypes.string
}

```
