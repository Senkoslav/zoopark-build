document.addEventListener('DOMContentLoaded', function() {

  function initTabsController() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    const handleTabClick = (event) => {
      const button = event.currentTarget;
      const targetTab = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(`${targetTab}-content`).classList.add('active');
    };

    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });
  }

  function initCarouselController() {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewCards = document.querySelectorAll('.review-card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (!reviewsContainer || !reviewCards.length || !prevButton || !nextButton) {
      return;
    }
    
    let currentIndex = 0;
    const totalCards = reviewCards.length;
    
    const moveToCard = (index) => {
      if (index < 0) index = totalCards - 1;
      if (index >= totalCards) index = 0;
      
      currentIndex = index;
      
      const shift = currentIndex * (100 / totalCards);
      reviewsContainer.style.transform = `translateX(-${shift}%)`;
    };
    
    const handlePrevClick = () => {
      moveToCard(currentIndex - 1);
    };
    
    const handleNextClick = () => {
      moveToCard(currentIndex + 1);
    };
    
    prevButton.addEventListener('click', handlePrevClick);
    nextButton.addEventListener('click', handleNextClick);
    
    moveToCard(0);
  }

  function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if (!mobileMenuButton || !desktopNav) return;

    mobileMenuButton.addEventListener('click', () => {
      let mobileNav = document.querySelector('.mobile-nav');
      
      if (!mobileNav) {
        mobileNav = document.createElement('nav');
        mobileNav.className = 'mobile-nav';
        
        const links = desktopNav.querySelectorAll('a');
        links.forEach(link => {
          const newLink = link.cloneNode(true);
          mobileNav.appendChild(newLink);
        });
        
        document.querySelector('.header').after(mobileNav);
      }
      
      mobileNav.classList.toggle('active');
    });
  }

  initTabsController();
  initCarouselController();
  initMobileMenu();
}); 