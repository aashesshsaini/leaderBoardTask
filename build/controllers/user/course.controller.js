"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../services");
const response_1 = require("../../utils/response");
const appConstant_1 = require("../../config/appConstant");
const universalFunctions_1 = require("../../utils/universalFunctions");
const getCourses = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield services_1.userCourseService.getCourses(req.query);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, courses);
}));
const courseDetails = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseData = yield services_1.userCourseService.courseDetails(req.query);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, courseData);
}));
const createOrder = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const orderData = yield services_1.userCourseService.createOrder(req.body, (_b = (_a = req.token) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b._id);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, orderData);
}));
const webhook = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = yield services_1.userCourseService.webhook(req.body);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, orderData);
}));
const myCourses = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const myCourseListing = yield services_1.userCourseService.myCourses(req.query, (_b = (_a = req.token) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b._id);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, myCourseListing);
}));
const getBlogs = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogListing = yield services_1.userCourseService.getBlogs(req.query);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, blogListing);
}));
const blogDetails = (0, universalFunctions_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogData = yield services_1.userCourseService.blogDetails(req.query);
    return (0, response_1.successResponse)(req, res, appConstant_1.STATUS_CODES.SUCCESS, appConstant_1.SUCCESS_MESSAGES.SUCCESS, blogData);
}));
exports.default = { getCourses, courseDetails, createOrder, webhook, myCourses, getBlogs, blogDetails };
