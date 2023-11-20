const showKirin = () => {
  console.log('キリンさんでーす');
};

const kirinObserver = new IntersectionObserver(showKirin);

kirinObserver.observe(document.querySelector('#kirin'));