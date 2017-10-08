const animateScroll = (element, newScrollTop) => {
  const oldScrollTop = element.scrollTop;
  const scrollDelta = newScrollTop - oldScrollTop;
  const scrollTime = Math.round(10 * Math.sqrt(Math.abs(newScrollTop - oldScrollTop)));
  let start = null;

  const step = (timestamp) => {
    start = start ? start : timestamp;
    const progress = timestamp - start > scrollTime ? scrollTime : timestamp - start;
    element.scrollTop = oldScrollTop + scrollDelta * progress / scrollTime;
    if (progress < scrollTime) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default animateScroll;
