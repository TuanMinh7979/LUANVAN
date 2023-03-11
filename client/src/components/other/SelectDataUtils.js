import { jobCats, salaryTypes, ranks, workTypes, workExps, addresss, salaryFilterSelect, contactProcesses } from "../../clientData/selectData.js";
///jobcat
export const getCatNameList = () => {
    return jobCats.map((item) => item.name);
}
export const getCatIdFromName = (catName) => {

    let selectedCat = jobCats.filter((item) => item.name == catName)[0];

    return selectedCat._id;
}
export const getCatNameFromId = (id) => {

    console.log("-->>>", id)
    let selectedCat = jobCats.filter((item) => item._id == id)[0];

    return selectedCat.name;
}
///salaryType
export const getSalaryTypeTitleList = () => {
    return salaryTypes.map((item) => item.title);
}
export const getSalaryTypeIdFromTitle = (title) => {

    let selectSalaryType = salaryTypes.filter((item) => item.title == title)[0];

    return selectSalaryType._id;
}
///ranks
export const getRankTitleList = () => {
    return ranks.map((item) => item.title);
}
export const getRankIdFromTitle = (title) => {

    let rank = ranks.filter((item) => item.title == title)[0];

    return rank._id;
}
//ranks
///worktypes
export const getWorkTypeTitleList = () => {
    return workTypes.map((item) => item.title);
}
export const getWorkTypeIdFromTitle = (title) => {

    let workType = workTypes.filter((item) => item.title == title)[0];

    return workType._id;
}
//worktypes
///worktypes
export const getWorkExpTitleList = () => {
    return workExps.map((item) => item.title);
}
export const getWorkExpIdFromTitle = (title) => {

    let workExp = workExps.filter((item) => item.title == title)[0];

    return workExp._id;
}
//worktypes
///worktypes
export const getAddressTitleList = () => {
    return addresss.map((item) => item.title);
}



export const getAddressIdFromTitle = (title) => {

    let address = addresss.filter((item) => item.title == title)[0];

    return address._id;
}


//worktypes


//get title from id
export const getAddressTitleFromId = (idInp) => {
    let address = addresss.filter((item) => item._id == idInp)[0];
    return address.title;
}
export const getWorkExpTitleFromId = (idInp) => {

    let workExp = workExps.filter((item) => item._id == idInp)[0];
    return workExp.title;
}
export const getWorkTypeTitleFromId = (idInp) => {

    let workType = workTypes.filter((item) => item._id == idInp)[0];
    return workType.title;
}
export const getRankTitleFromId = (idInp) => {

    let rank = ranks.filter((item) => item._id === idInp)[0];
    return rank.title;
}
export const getSalaryTypeTitleFromId = (idInp) => {

    let salaryType = salaryTypes.filter((item) => item._id == idInp)[0];
    return salaryType.title;
}
export const getJobCategoryTitleFromId = (idInp) => {

    let jobCateogory = jobCats.filter((item) => item._id == idInp)[0];
    return jobCateogory.title;
}





//for jobs page
export const getSalaryFilterTitleList = () => {
    return salaryFilterSelect.map((item) => item.title);
}
export const getSalaryFilterQueryFromTitle = (title) => {

    let salaryFilter = salaryFilterSelect.filter((item) => item.title == title)[0];
    return salaryFilter.query;
}



export const getValFromTitle = (title) => {
    let contactProcess = contactProcesses.filter(item => item.title == title)[0]
    return contactProcess.val

}

export const getTitleFromVal = (val) => {
    let contactProcess = contactProcesses.filter(item => item.val == val)[0]
    return contactProcess.title

}