const showKirin = (entries) => {
  console.log(entries[0].target);
};

const kirinObserver = new IntersectionObserver(showKirin);

kirinObserver.observe(document.querySelector('#kirin'));