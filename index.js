var plastiq = require('plastiq');
var h = require('plastiq').html;
var Medium = require('medium-editor');

module.exports = function (options) {
  var binding = plastiq.binding(options.binding);

  return h.component(
    {
      binding: binding,

      onadd: function (element) {
        var self = this;

        this.html = this.binding.get();
        element.innerHTML = normaliseHtml(this.html);

        this.editor = new Medium(element, options.mediumOptions || {});

        element.addEventListener('input', function (ev) {
          self.html = ev.target.innerHTML;
          self.binding.set(self.html);
        });
      },

      onupdate: function (element) {
        var html = this.binding.get();

        if (this.html != html) {
          this.html = html;
          element.innerHTML = normaliseHtml(html);
        }
      },

      onremove: function () {
        this.editor.destroy();
      }
    },

    h('div', {class: options.class})
  );
};

function normaliseHtml(html) {
  if (html) {
    return html;
  } else {
    return '<p><br></p>';
  }
}
