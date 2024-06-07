# Movies Explorer Frontend
## О проекте
 
Данный проект является реализацией фронтенд-части веб-приложения Movies Explorer. Он позволяет просматривать видеоролики, предоставляемые внешним сервисом и сохранять их в избранном. Проект реализован  с помощью библиотеки React с применением методологии БЭМ. Используются функциональные компоненты, хуки, контекст, high order component.

## Описание проекта

Главная страница проекта Movies Explorer Frontend содержит общую информацию о проекте и его создателе. 

![Alt text](/public/readme_pic_about.png?raw=true "О проекте")

Для перехода к просмотру видеороликов необходимо зарегистрироваться и войти. Соответствующая кнопка находится в главном меню сверху. 

![Alt text](/public/readme_pic_registration.png?raw=true "Окно регистрации")

Профиль пользователя в дальнейшем можно редактировать.

![Alt text](/public/readme_pic_edit_profile.png?raw=true "Редактирование профиля пользователя")

В проекте Movies Explorer Frontend настроено подключение к сервису BeatfilmMovies через его API для получения видеороликов с помощью поиска.

![Alt text](/public/readme_pic_search.png?raw=true "Поиск видеороликов")

Можно отфильтровать видео по длительности с помощью переключателя "Короткометражки"

![Alt text](/public/readme_pic_short.png?raw=true "Короткометражки")

Также Movies Explorer Frontend имеет собственный API, реализованный в проекте https://github.com/Slava65/movies-explorer-api. Данный API реализует функционал регистрации пользователя, упомянутый выше, и сохранения видеороликов в избранном. Этот список доступен с помощью кнопки "Сохраненные фильмы". Видео также можно удалить из списка с помощью соответствующей кнопки.

![Alt text](/public/readme_pic_saved.png?raw=true "Сохраненные фильмы")

## Используемые технологии 

<div display="flex" flex-direction="row" justify-content="space-between">
<img src="/public/readme_pic_techs/javascript.svg" width="100" height="100" alt="JavaScript">
<img src="/public/readme_pic_techs/react.svg" width="100" height="100" alt="React">
<img src="/public/readme_pic_techs/html5.svg" width="100" height="100" alt="HTML">
<img src="/public/readme_pic_techs/css3.svg" width="100" height="100" alt="CSS">
<img src="/public/readme_pic_techs/nodedotjs.svg" width="100" height="100" alt="NodeJS">
<img src="/public/readme_pic_techs/bem.svg" width="100" height="100" alt="BEM">
<img src="/public/readme_pic_techs/mongodb.svg" width="100" height="100" alt="MongoDB">
</div>
1. JavaScript. 
2. React. 
3. HTML.  
4. CSS.
5. Node.js.
6. БЭМ.
7. MongoDB.


