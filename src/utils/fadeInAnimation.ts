
interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export const setupScrollAnimation = (
  selector: string = '.reveal',
  options: ObserverOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return;
  
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  elements.forEach(el => observer.observe(el));
  
  return () => elements.forEach(el => observer.unobserve(el));
};
