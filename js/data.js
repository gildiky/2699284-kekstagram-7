// js/data.js
import { getRandomInteger, getRandomArrayElement } from './util.js';

const DESCRIPTIONS = [
  'Закат на море',
  'Утренний кофе в любимой кофейне',
  'Прогулка по осеннему парку',
  'Мой новый рабочий стол',
  'Вкусный обед',
  'Путешествие в горы',
  'Вечерний город в огнях',
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'София',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Елена',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Функция для создания одного комментария
const createComment = () => ({
  id: getRandomInteger(1, 10000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' '),
  name: getRandomArrayElement(NAMES),
});

// Функция для создания одной фотографии
const createPhotoDescription = (index) => {
  const id = index + 1;
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment),
  };
};

// Функция для генерации массива из 25 объектов
const generatePhotos = () => Array.from({ length: 25 }, (_, index) => createPhotoDescription(index));

export { generatePhotos };
