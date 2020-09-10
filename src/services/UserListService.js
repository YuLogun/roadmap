import { coursesTestData } from '../components/DeveloperView/coursesTestData';

export default class UserListService {
    constructor() {
        this.courses = coursesTestData;
    }

    getUserData() {
        return [
            {
                id: 0,
                name: "Вася"
            },
            {
                id: 1,
                name: "Петя"
            },
            {
                id: 2,
                name: "Юля"
            },
            {
                id: 3,
                name: "Рита"
            },
        ]
    }

    getUserRoadmap(userId) {
        debugger;
        return
    }
}