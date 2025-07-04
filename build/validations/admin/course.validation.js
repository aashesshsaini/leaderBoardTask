"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const appConstant_1 = require("../../config/appConstant");
// const createCourse = {
//     body: Joi.object().keys({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         video: Joi.string().required(),
//         duration:Joi.string().required(),
//         price: Joi.number().required(),
//         priceWithOffer: Joi.number().required()
//     })
// }
const createCourse = {
    body: joi_1.default.object().keys({
        title: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        duration: joi_1.default.string().required(),
        price: joi_1.default.number().required(),
        priceWithOffer: joi_1.default.number().required()
    }),
    file: joi_1.default.object({
        fieldname: joi_1.default.string().valid("video").required(),
        originalname: joi_1.default.string().required(),
        mimetype: joi_1.default.string().valid("video/mp4", "video/avi", "video/mov", "video/mkv").required(),
        size: joi_1.default.number().max(100 * 1024 * 1024).required() // Limit: 100MB
    }).required()
};
const getCourse = {
    query: joi_1.default.object().keys({
        page: appConstant_1.JOI.PAGE,
        limit: appConstant_1.JOI.LIMIT,
        search: joi_1.default.string().allow('')
    })
};
const updateCourse = {
    body: joi_1.default.object().keys({
        courseId: appConstant_1.JOI.OBJECTID,
        title: joi_1.default.string(),
        description: joi_1.default.string(),
        duration: joi_1.default.string(),
        price: joi_1.default.number(),
        priceWithOffer: joi_1.default.number()
    }),
    file: joi_1.default.object({
        fieldname: joi_1.default.string().valid("video").required(),
        originalname: joi_1.default.string().required(),
        mimetype: joi_1.default.string().valid("video/mp4", "video/avi", "video/mov", "video/mkv").required(),
        size: joi_1.default.number().max(100 * 1024 * 1024).required() // Limit: 100MB
    })
};
const deleteCourse = {
    query: joi_1.default.object().keys({
        courseId: appConstant_1.JOI.OBJECTID
    })
};
const courseDetails = {
    query: joi_1.default.object().keys({
        courseId: appConstant_1.JOI.OBJECTID
    })
};
const orderListing = {
    query: joi_1.default.object().keys({
        page: appConstant_1.JOI.PAGE,
        limit: appConstant_1.JOI.LIMIT,
        search: joi_1.default.string().allow('')
    })
};
exports.default = { createCourse, getCourse, updateCourse, deleteCourse, courseDetails, orderListing };
