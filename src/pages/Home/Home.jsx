import React from 'react';
import {
  Container,
  Description,
  GridContainer,
  TextImageContainer,
  Title,
} from './Home.styled';

export const Home = () => {
  return (
    <>
      <Container>
        <Title>Застосунок Контактів</Title>
        <GridContainer>
          <TextImageContainer>
            <img
              className="icon"
              src="https://inwebpress.com/wp-content/uploads/2023/02/affiliate-marketing.jpg"
              alt="Smiley Icon"
            />
            <Description>
              На головній сторінці цього веб-сайту контактів ви знайдете зручне
              та легко зрозуміле середовище для управління вашими контактами.
              Тут ви зможете легко записувати та зберігати важливу контактну
              інформацію. Однак, для використання цієї функціональності вам
              потрібно буде виконати два прості кроки.
              <span className="emoji" role="img" aria-label="Иконка смайлика">
                😊
              </span>
            </Description>
          </TextImageContainer>

          <TextImageContainer>
            <Description>
              <span>Реєстрація:</span> Перед тим, як почати використовувати
              веб-сайт, вам потрібно буде пройти процес реєстрації. Це дозволить
              вам створити особистий обліковий запис та отримати доступ до
              можливостей управління контактами.
              <span className="emoji" role="img" aria-label="Иконка ключика">
                🔐
              </span>
            </Description>
            <img
              className="icon"
              src="https://itmed.org/upload/resize_cache/iblock/9f9/780_469_0/shchotakepartnerskiymarketingdeznaytipartneratayakpobuduvati.png"
              alt="Lock Icon"
            />
          </TextImageContainer>

          <TextImageContainer>
            <img
              className="icon"
              src="https://inwebpress.com/wp-content/uploads/2023/02/affiliate-marketing3.jpg"
              alt="Key Icon"
            />
            <Description>
              <span>Вхід в систему: </span>Після успішної реєстрації ви зможете
              увійти до свого облікового запису, використовуючи свої облікові
              дані. Це забезпечить конфіденційність ваших контактів і дозволить
              вам скористатися всіма доступними можливостями веб-сайту.
              <span className="emoji" role="img" aria-label="Иконка замка">
                🔒
              </span>
            </Description>
          </TextImageContainer>

          <TextImageContainer>
            <Description>
              Не пропустіть можливість зручно та безпечно управляти вашими
              контактами на цьому веб-сайті. Зареєструйтесь сьогодні та почніть
              користуватися всіма перевагами, які він надає!
              <span
                className="emoji"
                role="img"
                aria-label="Иконка пальца вверх"
              >
                👍
              </span>
            </Description>
            <img
              className="icon"
              src="https://inwebpress.com/wp-content/uploads/2023/01/webdeveloper.jpg"
              alt="Thumbs Up Icon"
            />
          </TextImageContainer>
        </GridContainer>
      </Container>
    </>
  );
};
