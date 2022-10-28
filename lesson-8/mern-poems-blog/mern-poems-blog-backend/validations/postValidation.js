import { body  } from "express-validator"


export const postValidation = () => [
    body('title', 'Введите заголовок поста').isLength({ min: 3 }).isStrinsg(),
    body('text', 'Введите текст поста').isLength({ min: 10 }).isString(),
    body('tags', 'Неверный формат тега').optional().isString(),
    body('imageUrl', 'Неверная ссылка на изображение',).optional().isString(),
]