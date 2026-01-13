document.addEventListener('DOMContentLoaded', function () {
  const first = new Typed('#line1', {
    strings: ["Hi! I'm Chris"],
    typeSpeed: 70,
    showCursor: true,
    cursorChar: '|',
    onComplete(self) {
      self.cursor.remove();

      // optional delay before second line
      setTimeout(() => {
        new Typed('#line2', {
          strings: ['Pangilinan'],
          typeSpeed: 70,
          showCursor: true,
          cursorChar: '|',
        });
      }, 300);
    }
  });
});