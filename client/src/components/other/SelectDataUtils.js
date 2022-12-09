import { jobCats, salaryTypes, ranks, workTypes, workExps, addresss, salaryFilterSelect } from "../../clientData/selectData.js";
///jobcat
export const getCatNameList = () => {
    return jobCats.map((item) => item.name);
}
export const getCatIdFromName = (catName) => {
    catName = catName.trim();
    let selectedCat = jobCats.filter((item) => item.name == catName)[0];

    return selectedCat._id;
}
///salaryType
export const getSalaryTypeTitleList = () => {
    return salaryTypes.map((item) => item.title);
}
export const getSalaryTypeIdFromTitle = (title) => {
    title = title.trim();
    let selectSalaryType = salaryTypes.filter((item) => item.title == title)[0];

    return selectSalaryType._id;
}
///ranks
export const getRankTitleList = () => {
    return ranks.map((item) => item.title);
}
export const getRankIdFromTitle = (title) => {
    title = title.trim();
    let rank = ranks.filter((item) => item.title == title)[0];

    return rank._id;
}
//ranks
///worktypes
export const getWorkTypeTitleList = () => {
    return workTypes.map((item) => item.title);
}
export const getWorkTypeIdFromTitle = (title) => {
    title = title.trim();
    let workType = workTypes.filter((item) => item.title == title)[0];

    return workType._id;
}
//worktypes
///worktypes
export const getWorkExpTitleList = () => {
    return workExps.map((item) => item.title);
}
export const getWorkExpIdFromTitle = (title) => {
    title = title.trim();
    let workExp = workExps.filter((item) => item.title == title)[0];

    return workExp._id;
}
//worktypes
///worktypes
export const getAddressTitleList = () => {
    return addresss.map((item) => item.title);
}



export const getAddressIdFromTitle = (title) => {
    title = title.trim();
    let address = addresss.filter((item) => item.title == title)[0];

    return address._id;
}


//worktypes


//get title from id
export const getAddressTitleFromId = (idInp) => {
    idInp = idInp.trim();
    let address = addresss.filter((item) => item._id == idInp)[0];
    return address.title;
}
export const getWorkExpTitleFromId = (idInp) => {
    idInp = idInp.trim();
    let workExp = workExps.filter((item) => item._id == idInp)[0];
    return workExp.title;
}
export const getWorkTypeTitleFromId = (idInp) => {
    idInp = idInp.trim();
    let workType = workTypes.filter((item) => item._id == idInp)[0];
    return workType.title;
}
export const getRankTitleFromId = (idInp) => {
    idInp = idInp.trim();
    let rank = ranks.filter((item) => item._id === idInp)[0];
    return rank.title;
}
export const getSalaryTypeTitleFromId = (idInp) => {
    idInp = idInp.trim();
    let salaryType = salaryTypes.filter((item) => item._id == idInp)[0];
    return salaryType.title;
}
export const getJobCategoryTitleFromId = (idInp) => {
    idInp = idInp.trim();
    let jobCateogory = jobCats.filter((item) => item._id == idInp)[0];
    return jobCateogory.title;
}





//for jobs page
export const getSalaryFilterTitleList = () => {
    return salaryFilterSelect.map((item) => item.title);
}
export const getSalaryFilterQueryFromTitle = (title) => {
    title = title.trim();
    let salaryFilter = salaryFilterSelect.filter((item) => item.title == title)[0];
    return salaryFilter.query;
}