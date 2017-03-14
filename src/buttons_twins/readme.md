[Back](https://github.com/korchemkin/spares)

# ButtonsTwins

```jsx

// example index.js

import React from 'react';
import ReactDOM from 'react-dom';

// import Spares uikit ButtonsTwins
import ButtonsTwins from './buttons_twins/ButtonsTwins';

ReactDOM.render(
  <div>

    <ButtonsTwins items={[
      {
        text: 'Button1',
        onclick: testFunc.bind(null, 'name1')
      }, {
        text: 'Button2',
        onclick: testFunc.bind(null, 'name2')
      }
    ]}/>

  </div>
, document.getElementById('root'));

```

## PropTypes

```jsx

ButtonsTwins.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      onclick: React.PropTypes.func.isRequired
    })
  )
};

```
