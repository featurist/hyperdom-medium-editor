# Medium Editor for hyperdom

    npm install hyperdom-medium-editor

## Usage

```js
var mediumEditor = require('hyperdom-medium-editor');

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
