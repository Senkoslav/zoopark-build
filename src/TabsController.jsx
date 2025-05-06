import React, { useEffect } from 'react';

export default function TabsController() {
  useEffect(() => {
    // Находим все табы на странице
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Обработчик события для каждой кнопки таба
    const handleTabClick = (event) => {
      const button = event.currentTarget;
      const targetTab = button.getAttribute('data-tab');
      
      // Удаляем класс active со всех кнопок и контента
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Добавляем класс active выбранной кнопке и соответствующему контенту
      button.classList.add('active');
      document.getElementById(`${targetTab}-content`).classList.add('active');
    };

    // Добавляем обработчики событий
    tabButtons.forEach(button => {
      button.addEventListener('click', handleTabClick);
    });

    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      tabButtons.forEach(button => {
        button.removeEventListener('click', handleTabClick);
      });
    };
  }, []);

  // Этот компонент не рендерит ничего, он только добавляет функциональность
  return null;
} 