# Medium Editor for Plastiq

    npm install plastiq-medium-editor

## Usage

```js
var mediumEditor = require('plastiq-medium-editor');

function render(model) {
  return mediumEditor({
    class: 'my-class',
    binding: [model, 'html'],

    mediumOptions: {
      ...
      buttons: ['bold', 'italic', 'header1', 'header2', 'unorderedlist', 'orderedlist'],
      ...
    }
  });
}
```
