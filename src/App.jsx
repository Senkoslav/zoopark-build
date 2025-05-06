import React from 'react';
import './App.css';
import TabsController from './TabsController';
import CarouselController from './CarouselController';

function App() {
  return (
    <div className="app">
      {/* Контроллеры для интерактивности */}
      <TabsController />
      <CarouselController />
      
      {/* Шапка с логотипом и навигацией */}
      <header className="header">
        <div className="container header-container">
          <div className="logo-container">
            <img src="/placeholder.svg" alt="Логотип зоопарка" className="logo-image" />
            <span className="logo-text">Зоопарк Дикой Природы</span>
          </div>

          {/* Десктопная навигация */}
          <nav className="desktop-nav">
            <a href="#" className="nav-link">Главная</a>
            <a href="#animals" className="nav-link">Животные</a>
            <a href="#events" className="nav-link">События</a>
            <a href="#tickets" className="nav-link">Билеты</a>
            <a href="#reviews" className="nav-link">Отзывы</a>
            <a href="#contact" className="nav-link">Контакты</a>
          </nav>

          {/* Мобильная навигация */}
          <button className="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="menu-icon"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span className="sr-only">Открыть меню</span>
          </button>
        </div>
      </header>

      <main className="main-content">
        {/* Баннер */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img src="/images/zoopark.jpg" alt="Баннер зоопарка" className="hero-image" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Добро пожаловать в Зоопарк Дикой Природы</h1>
            <p className="hero-description">
              Откройте для себя удивительный мир животных в нашем прекрасном зоопарке. Познакомьтесь с природой вблизи!
            </p>
            <button className="cta-button">Исследовать</button>
          </div>
        </section>

        {/* Галерея животных */}
        <section id="animals" className="animals-section">
          <div className="container">
            <h2 className="section-title">Наши животные</h2>

            <div className="animal-tabs">
              <div className="tabs-list">
                <button className="tab-button active" data-tab="mammals">Млекопитающие</button>
                <button className="tab-button" data-tab="birds">Птицы</button>
                <button className="tab-button" data-tab="fish">Рыбы</button>
                <button className="tab-button" data-tab="others">Другие</button>
              </div>

              {/* Млекопитающие */}
              <div className="tab-content active" id="mammals-content">
                <div className="animal-grid">
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/joj.jpg"
                        alt="Ежик"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Ежик</h3>
                      <p className="animal-description">Ежик — небольшое млекопитающее, покрытое острыми иголками для защиты от хищников. При опасности сворачивается в колючий шар. Ведет преимущественно ночной образ жизни, питается насекомыми, червями, мелкими позвоночными и растительной пищей. Многие виды ежей впадают в спячку на зимний период. Эти симпатичные животные являются естественными помощниками в садах, уничтожая вредителей.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/lion-1.jpg"
                        alt="Лев"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Лев</h3>
                      <p className="animal-description">Лев — крупный хищник семейства кошачьих, известный как «царь зверей». Самцы отличаются внушительной гривой, символизирующей силу и статус. Живут прайдами до 30 особей, где самки занимаются охотой, а самцы защищают территорию. Длина тела взрослого льва достигает 2,5 метров, вес — до 250 кг. Сегодня львы обитают в основном в заповедниках Африки.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/delfin.jpg"
                        alt="Дельфин"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Дельфин</h3>
                      <p className="animal-description">Дельфины — одни из самых умных морских млекопитающих с высокоразвитым социальным поведением. Общаются с помощью сложной системы звуков и эхолокации. Известны своей игривостью и способностью к обучению. В среднем живут 25-30 лет, питаются рыбой и кальмарами. Дельфины дышат легкими и регулярно поднимаются к поверхности воды для вдоха через дыхало на голове.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/Koala.jpg"
                        alt="Коала"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Коала</h3>
                      <p className="animal-description">Коала — сумчатое млекопитающее, обитающее исключительно в Австралии. Питается листьями эвкалипта, которые токсичны для большинства животных. Проводит до 20 часов в день во сне, экономя энергию для переваривания сложной пищи. Детеныши развиваются в сумке матери около 6 месяцев. Коалы не пьют воду, получая влагу из листьев. К сожалению, их численность сокращается из-за разрушения среды обитания.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Птицы */}
              <div className="tab-content" id="birds-content">
                <div className="animal-grid">
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/pingvin1.jpg"
                        alt="Пингвин"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Императорский пингвин</h3>
                      <p className="animal-description">Самый крупный и тяжелый из современных видов пингвинов. Обитает в Антарктиде, где выдерживает суровые условия с температурой до -60°C и скоростью ветра до 200 км/ч. Питается рыбой, кальмарами и крилем, может нырять на глубину до 500 метров и оставаться под водой до 20 минут. Императорские пингвины образуют моногамные пары и демонстрируют удивительную заботу о потомстве — самцы высиживают яйца на своих лапах в течение антарктической зимы.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/solovey.jpg"
                        alt="Соловей"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Соловей</h3>
                      <p className="animal-description">Небольшая певчая птица семейства мухоловковых, знаменитая своим мелодичным пением. Несмотря на скромную внешность, соловей обладает удивительными вокальными способностями, воспроизводя до 40 различных типов трелей, свистов и щелканий. Поют преимущественно самцы в брачный период, особенно активно ночью. Питаются насекомыми и мелкими беспозвоночными, а также ягодами. Обитают в лиственных и смешанных лесах Европы, Азии и северной Африки.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/ara.jpg"
                        alt="Ара"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Попугай ара</h3>
                      <p className="animal-description">Крупные яркоокрашенные попугаи, обитающие в тропических лесах Южной и Центральной Америки. Отличаются ярким оперением, обычно сочетающим красный, синий, зеленый и желтый цвета. Могут жить до 80 лет в неволе. Питаются орехами, семенами, фруктами и нектаром. Обладают мощным клювом, способным раскалывать твердые орехи. Эти социальные птицы формируют прочные пары на всю жизнь и живут стаями. Некоторые виды ара находятся под угрозой исчезновения из-за разрушения среды обитания и незаконной торговли.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/orel.jpg"
                        alt="Белоголовый орлан"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Белоголовый орлан</h3>
                      <p className="animal-description">Хищная птица семейства ястребиных, национальный символ США. Отличается белоснежной головой и шеей, контрастирующими с темно-коричневым телом. Размах крыльев достигает 2,5 метров. Питается преимущественно рыбой, которую ловко выхватывает из воды, но также охотится на птиц и мелких млекопитающих. Строит огромные гнезда на высоких деревьях рядом с водоемами, которые могут использовать годами. Образуют пары на всю жизнь. Благодаря усилиям по охране, популяция белоголовых орланов восстановилась после угрозы исчезновения.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Рыбы */}
              <div className="tab-content" id="fish-content">
                <div className="animal-grid">
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/nemo.jpg"
                        alt="Рыба-клоун"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Рыба-клоун</h3>
                      <p className="animal-description">Яркая оранжевая рыба с характерными белыми полосами, прославившаяся благодаря мультфильму «В поисках Немо». Обитает в симбиозе с морскими анемонами, которые защищают её от хищников. Рыбы-клоуны имеют особый слизистый слой, защищающий их от ядовитых щупалец анемонов. Интересная особенность этого вида — все рыбы-клоуны рождаются самцами, и лишь доминантная особь в группе становится самкой. Обитают в тёплых водах Тихого и Индийского океанов, питаются планктоном и водорослями.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/White_shark.jpg"
                        alt="Белая акула"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Белая акула</h3>
                      <p className="animal-description">Один из крупнейших морских хищников планеты, достигающий длины 6-7 метров и веса до 2 тонн. Белая акула обладает уникальной системой терморегуляции, позволяющей поддерживать температуру тела выше окружающей воды. Её челюсти оснащены несколькими рядами острых треугольных зубов, которые постоянно обновляются. Эти величественные хищники могут развивать скорость до 56 км/ч при погоне за добычей. Несмотря на свою репутацию, белые акулы крайне редко нападают на людей и сегодня нуждаются в защите из-за сокращения популяции.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/Cyprinus-carpio.jpg"
                        alt="Карп"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Карп</h3>
                      <p className="animal-description">Одна из самых распространённых пресноводных рыб, культивируемая человеком более 2000 лет. Карпы отличаются выносливостью и способностью выживать в водоёмах с низким содержанием кислорода. Могут достигать веса более 30 кг и жить до 50 лет. Всеядны, питаются как растительной пищей, так и мелкими беспозвоночными. От дикого карпа произошли многие декоративные породы, включая знаменитых японских карпов кои, ценящихся за яркую расцветку и считающихся символом удачи и процветания в азиатских культурах.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/Black_Sea_fauna_Seahorse.jpg"
                        alt="Морской конёк"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Морской конёк</h3>
                      <p className="animal-description">Уникальное морское создание с вертикальной ориентацией тела и головой, напоминающей лошадиную. У морских коньков наблюдается одна из самых необычных форм размножения в животном мире: самцы вынашивают потомство в специальной выводковой сумке. Они передвигаются с помощью спинного плавника, совершающего до 35 колебаний в секунду. Питаются мелким планктоном, засасывая его через трубчатую морду. Морские коньки — мастера маскировки, способные менять окраску и сливаться с окружающей средой. Многие виды находятся под угрозой исчезновения из-за разрушения коралловых рифов и сбора для традиционной китайской медицины.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Другие */}
              <div className="tab-content" id="others-content">
                <div className="animal-grid">
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/gekkon-toki.jpg"
                        alt="Геккон токи"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Геккон токи</h3>
                      <p className="animal-description">Один из самых крупных видов гекконов, достигающий длины до 35 см. Отличается яркой пятнистой окраской и большими выразительными глазами с вертикальными зрачками. Получил название благодаря характерному громкому крику "то-ки", который издаёт для привлечения партнёров и защиты территории. Обладает удивительной способностью взбираться практически по любым поверхностям благодаря микроскопическим щетинкам на лапах. Обитает в Юго-Восточной Азии, где часто селится рядом с человеческим жильём. Питается насекомыми и мелкими позвоночными.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/IguanaIguana.jpg"
                        alt="Зеленая игуана"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Зеленая игуана</h3>
                      <p className="animal-description">Крупная ящерица, достигающая в длину до 2 метров, включая хвост. Известна своей впечатляющей внешностью с гребнем на спине, подвесом под горлом и яркой зеленой окраской. Несмотря на грозный вид, является растительноядной, питаясь листьями, фруктами и цветами. Обитает в тропических лесах Центральной и Южной Америки, где большую часть времени проводит на деревьях. При опасности может сбрасываться с высоты до 15 метров в воду или на землю без вреда для себя. Обладает так называемым "третьим глазом" на макушке головы — теменным органом, который помогает определять интенсивность освещения и регулировать температуру тела.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/Testudo graeca.jpg"
                        alt="Средиземноморская черепаха"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Средиземноморская черепаха</h3>
                      <p className="animal-description">Сухопутная черепаха среднего размера с характерным высоким куполообразным панцирем желто-коричневого цвета с темными пятнами. Может жить до 100 лет при благоприятных условиях. Обитает в странах Средиземноморья, предпочитая сухие травянистые и каменистые местности. Ведет дневной образ жизни, питаясь разнообразной растительной пищей: травами, листьями, фруктами и цветами. В жаркое время года может впадать в летнюю спячку (эстивацию), а в холодное — в зимнюю спячку. Статус вида оценивается как уязвимый из-за разрушения естественной среды обитания и незаконного отлова для продажи в качестве домашних питомцев.</p>
                    </div>
                  </div>
                  <div className="animal-card">
                    <div className="animal-image-container">
                      <img
                        src="/images/Crocodylus.jpg"
                        alt="Нильский крокодил"
                        className="animal-image"
                      />
                    </div>
                    <div className="animal-content">
                      <h3 className="animal-title">Нильский крокодил</h3>
                      <p className="animal-description">Один из крупнейших представителей отряда крокодилов, достигающий длины до 6 метров и веса более тонны. Эти древние рептилии обитают в реках и озерах Африки и мало изменились за последние 200 миллионов лет. Обладают самым мощным укусом в животном мире с силой до 5000 кг на квадратный сантиметр. Несмотря на грозный вид, проявляют удивительную заботу о потомстве: самки охраняют гнезда с яйцами и помогают малышам выбраться из скорлупы, а затем защищают их первые месяцы жизни. Нильские крокодилы могут не питаться месяцами и способны выживать в экстремальных условиях. Являются важным звеном экосистемы африканских водоемов.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Специальные события */}
        <section id="events" className="events-section">
          <div className="container">
            <h2 className="section-title">Предстоящие шоу</h2>

            <div className="events-grid">
              {/* Событие 1 */}
              <div className="event-card">
                <div className="event-image-container">
                  <img
                    src="/images/panda.jpg"
                    alt="Кормление панд"
                    className="event-image"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">Кормление редких панд</h3>
                  <div className="event-detail">
                    <span className="event-icon">📅</span>
                    <span>10 мая 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-icon">🕒</span>
                    <span>11:00 - 12:00</span>
                  </div>
                  <p className="event-description">
                    Посмотрите, как наши киперы кормят редких красных панд, и узнайте об их сохранении.
                  </p>
                </div>
              </div>

              {/* Событие 2 */}
              <div className="event-card">
                <div className="event-image-container">
                  <img
                    src="/images/tigr.jpeg"
                    alt="Шоу тигров"
                    className="event-image"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">Тренировка тигров</h3>
                  <div className="event-detail">
                    <span className="event-icon">📅</span>
                    <span>15 мая 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-icon">🕒</span>
                    <span>14:00 - 15:00</span>
                  </div>
                  <p className="event-description">
                    Увидите, как наши великолепные тигры демонстрируют свое природное поведение во время специальной тренировки.
                  </p>
                </div>
              </div>

              {/* Событие 3 */}
              <div className="event-card">
                <div className="event-image-container">
                  <img
                    src="/images/pingvin.jpg"
                    alt="Шоу пингвинов"
                    className="event-image"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-title">Парад пингвинов</h3>
                  <div className="event-detail">
                    <span className="event-icon">📅</span>
                    <span>20 мая 2025</span>
                  </div>
                  <div className="event-detail">
                    <span className="event-icon">🕒</span>
                    <span>16:00 - 16:30</span>
                  </div>
                  <p className="event-description">
                    Не пропустите наших очаровательных пингвинов, когда они вперевалку проходят через зоопарк в этом восхитительном ежедневном параде.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Покупка билетов */}
        <section id="tickets" className="tickets-section">
          <div className="container tickets-container">
            <h2 className="tickets-title">Спланируйте свой визит сегодня</h2>
            <p className="tickets-description">
              Испытайте чудеса дикой природы вблизи. Наш зоопарк открыт ежедневно с 9:00 до 18:00.
            </p>
            <button className="tickets-button">Купить билеты</button>
          </div>
        </section>

        {/* Отзывы клиентов */}
        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">Что говорят наши посетители</h2>

            <div className="reviews-carousel">
              <div className="reviews-container">
                {/* Отзыв 1 */}
                <div className="review-card">
                  <div className="review-avatar-container">
                    <img
                      src="/images/avatar.png"
                      alt="Клиент"
                      className="review-avatar"
                    />
                  </div>
                  <p className="review-text">
                    "Удивительный опыт для всей нашей семьи! Животные выглядят здоровыми и счастливыми, а персонал невероятно знающий и дружелюбный."
                  </p>
                  <div className="review-author">Сара Иванова</div>
                  <div className="review-role">Семейный посетитель</div>
                </div>

                {/* Отзыв 2 */}
                <div className="review-card">
                  <div className="review-avatar-container">
                    <img
                      src="/images/avatar.png"
                      alt="Клиент"
                      className="review-avatar"
                    />
                  </div>
                  <p className="review-text">
                    "Я был впечатлен усилиями по сохранению и образовательными программами. Это не просто зоопарк, но место, где можно узнать о защите дикой природы."
                  </p>
                  <div className="review-author">Михаил Чен</div>
                  <div className="review-role">Любитель дикой природы</div>
                </div>

                {/* Отзыв 3 */}
                <div className="review-card">
                  <div className="review-avatar-container">
                    <img
                      src="/images/avatar.png"
                      alt="Клиент"
                      className="review-avatar"
                    />
                  </div>
                  <p className="review-text">
                    "Специальные мероприятия стоит планировать вокруг вашего визита. Мы видели парад пингвинов, и это был главный момент нашего дня. Обязательно вернемся!"
                  </p>
                  <div className="review-author">Эмилия Родригес</div>
                  <div className="review-role">Постоянный посетитель</div>
                </div>
              </div>
              <button className="carousel-button prev-button">←</button>
              <button className="carousel-button next-button">→</button>
            </div>
          </div>
        </section>

        {/* Информация о билетах */}
        <section className="ticket-info-section">
          <div className="container">
            <h2 className="section-title">Информация о билетах</h2>

            <div className="ticket-types-grid">
              <div className="ticket-card">
                <div className="ticket-content">
                  <h3 className="ticket-title">Стандартный билет</h3>
                  <ul className="ticket-list">
                    <li>Взрослые: 2500₽</li>
                    <li>Дети (3-12): 1500₽</li>
                    <li>Пенсионеры (65+): 2000₽</li>
                    <li>Студенты: 2000₽</li>
                  </ul>
                  <button className="ticket-button">Купить сейчас</button>
                </div>
              </div>

              <div className="ticket-card">
                <div className="ticket-content">
                  <h3 className="ticket-title">Семейный пакет</h3>
                  <ul className="ticket-list">
                    <li>2 взрослых + 2 ребенка: 7000₽</li>
                    <li>2 взрослых + 3 ребенка: 8000₽</li>
                    <li>Дополнительный ребенок: 1000₽</li>
                    <li>Включает специальные жетоны для кормления</li>
                  </ul>
                  <button className="ticket-button">Купить сейчас</button>
                </div>
              </div>
              
              <div className="ticket-card">
                <div className="ticket-content">
                  <h3 className="ticket-title">Студенческий пакет</h3>
                  <ul className="ticket-list">
                    <li>Студенческий билет: 1500₽</li>
                    <li>Группа студентов (от 10 человек): 1200₽ за человека</li>
                    <li>Специальная экскурсия с биологом: +500₽</li>
                    <li>15% скидка в кафе при предъявлении студенческого</li>
                  </ul>
                  <button className="ticket-button">Купить сейчас</button>
                </div>
              </div>

              <div className="ticket-card">
                <div className="ticket-content">
                  <h3 className="ticket-title">Годовой абонемент</h3>
                  <ul className="ticket-list">
                    <li>Индивидуальный: 12000₽</li>
                    <li>Семейный (до 5 человек): 28000₽</li>
                    <li>Неограниченное количество посещений в течение года</li>
                    <li>10% скидка в сувенирных магазинах</li>
                  </ul>
                  <button className="ticket-button">Купить сейчас</button>
                </div>
              </div>
            </div>

            <div className="payment-info">
              <h3 className="payment-title">Способы оплаты</h3>
              <p className="payment-description">
                Мы принимаем все основные кредитные карты, дебетовые карты и мобильные платежные системы. Билеты можно
                приобрести онлайн или у входа в зоопарк.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал с контактной информацией и социальными сетями */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Контактная информация */}
            <div className="footer-column">
              <h3 className="footer-title">Свяжитесь с нами</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <span className="footer-icon">📍</span>
                  <span>адрес: Улан-Баторская ул. 6, Иркутск</span>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-icon">📞</span>
                  <span>(555) 123-4567</span>
                </li>
                <li className="footer-contact-item">
                  <span className="footer-icon">✉️</span>
                  <span>info@zoopark.ru</span>
                </li>
              </ul>
            </div>

            {/* Часы работы */}
            <div className="footer-column">
              <h3 className="footer-title">Часы работы</h3>
              <ul className="footer-hours-list">
                <li>Понедельник - Пятница: 9:00 - 18:00</li>
                <li>Суббота - Воскресенье: 8:00 - 19:00</li>
                <li>Праздничные дни: 10:00 - 17:00</li>
                <li>Последний вход: за 1 час до закрытия</li>
              </ul>
            </div>

            {/* Социальные сети */}
            <div className="footer-column">
              <h3 className="footer-title">Подписывайтесь на нас</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <img src="/images/facebook.png" alt="Facebook" className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <img src="/images/twitter.png" alt="Twitter" className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
                </a>
              </div>
              <div className="newsletter-signup">
                <h4 className="newsletter-title">Подпишитесь на нашу рассылку</h4>
                <div className="newsletter-form">
                  <input type="email" placeholder="Ваш email" className="newsletter-input" />
                  <button className="newsletter-button">Подписаться</button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Зоопарк Дикой Природы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 