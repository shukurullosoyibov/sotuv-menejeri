import { API_URL } from "./config";

const getMealByID = async (mealID) =>{
    const response = await fetch( API_URL + 'lookup.php?i=' + mealID);
     return await response.json(); 
}
const getAllCategories = async () => {
    const response = await fetch( API_URL + 'categories.php');
        return await response.json();
}
const getFilterCategory = async (categoryName) =>{
    const response = await fetch( API_URL + 'filter.php?c=' + categoryName);
        return await response.json();
}
const getAllCourse = async () =>{
    const response = await fetch(API_URL + '/course-manager/course/all');
    return await response.json();
}
const getItemCourse = async(slug) =>{
    const response = await fetch(API_URL + '/course-manager/course/detail?key=' + {slug});
    return await response.json();
}
export {getAllCourse, getItemCourse}