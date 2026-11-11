// Вспомогательная функция для получения случайного целого числа из диапазона
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Вспомогательная функция для получения случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Списки данных для генерации
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
  id: getRandomInteger(1, 10000), // Случайный уникальный ID комментария
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  // Берем одно или два случайных предложения для сообщения
  message: Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' '),
  name: getRandomArrayElement(NAMES),
});

// Функция для создания одной фотографии
const createPhotoDescription = (index) => {
  const id = index + 1; // Число от 1 до 25
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    // Создаем массив от 0 до 30 комментариев
    comments: Array.from({ length: getRandomInteger(0, 30) }, createComment),
  };
};

// Функция для генерации массива из 25 объектов
const generatePhotos = () => Array.from({ length: 25 }, (_, index) => createPhotoDescription(index));

// Получаем итоговый массив с данными
export const similarPhotos = generatePhotos();
