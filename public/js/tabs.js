// ここからコードを書いてください
const setupTabs = function() {
  const tabItems = document.querySelectorAll('[data-tab]');
  const contentSections = document.querySelectorAll('.content-section');

  tabItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = e.currentTarget.dataset.tab;
      
      contentSections.forEach(section => {
        section.classList.add('hidden');
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
    });
  });
};

export { setupTabs };