"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = require("../../middlewares/validate");
const course_validation_1 = __importDefault(require("../../validations/user/course.validation"));
const course_controller_1 = __importDefault(require("../../controllers/user/course.controller"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const appConstant_1 = require("../../config/appConstant");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(appConstant_1.USER_TYPE.USER), (0, validate_1.validate)(course_validation_1.default.getCourses), course_controller_1.default.getCourses);
router.get('/courseDetails', (0, auth_1.default)(appConstant_1.USER_TYPE.USER), (0, validate_1.validate)(course_validation_1.default.courseDetails), course_controller_1.default.courseDetails);
router.post('/createOrder', (0, auth_1.default)(appConstant_1.USER_TYPE.USER), (0, validate_1.validate)(course_validation_1.default.createOrder), course_controller_1.default.createOrder);
router.post('/webhook', course_controller_1.default.webhook);
router.get('/myCourses', (0, auth_1.default)(appConstant_1.USER_TYPE.USER), (0, validate_1.validate)(course_validation_1.default.myCourses), course_controller_1.default.myCourses);
router.get('/blogs', (0, validate_1.validate)(course_validation_1.default.getBlogs), course_controller_1.default.getBlogs);
router.get('/blogDetails', (0, validate_1.validate)(course_validation_1.default.blogDetails), course_controller_1.default.blogDetails);
exports.default = router;
