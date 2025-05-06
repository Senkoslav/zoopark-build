import React, { useEffect } from 'react';

export default function CarouselController() {
  useEffect(() => {
    // Находим элементы карусели
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewCards = document.querySelectorAll('.review-card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    if (!reviewsContainer || !reviewCards.length || !prevButton || !nextButton) {
      return;
    }
    
    let currentIndex = 0;
    const totalCards = reviewCards.length;
    
    // Функция для перемещения карусели
    const moveToCard = (index) => {
      if (index < 0) index = totalCards - 1;
      if (index >= totalCards) index = 0;
      
      currentIndex = index;
      
      // Вычисляем сдвиг для карусели (33.333% на каждую карточку)
      const shift = currentIndex * (100 / totalCards);
      reviewsContainer.style.transform = `translateX(-${shift}%)`;
    };
    
    // Обработчики кнопок
    const handlePrevClick = () => {
      moveToCard(currentIndex - 1);
    };
    
    const handleNextClick = () => {
      moveToCard(currentIndex + 1);
    };
    
    // Добавляем обработчики событий
    prevButton.addEventListener('click', handlePrevClick);
    nextButton.addEventListener('click', handleNextClick);
    
    // Инициализация начального положения
    moveToCard(0);
    
    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      prevButton.removeEventListener('click', handlePrevClick);
      nextButton.removeEventListener('click', handleNextClick);
    };
  }, []);

  // Этот компонент не рендерит ничего, он только добавляет функциональность
  return null;
} 