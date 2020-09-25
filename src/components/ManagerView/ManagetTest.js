import { managerViewData } from '../../APISettings/manager_dashboard';

export function getEmployees() {
    return managerViewData.data.employees.map(employee => employee.user);
}

export function getRoadmapByUsername(username) {
    return managerViewData.data.employees.filter(employee => employee.user.username === username)[0].roadmaps;
}

export function getRoadmapData(roadmap) {
    let result = {
        title: roadmap.name,

    }
    debugger;
}