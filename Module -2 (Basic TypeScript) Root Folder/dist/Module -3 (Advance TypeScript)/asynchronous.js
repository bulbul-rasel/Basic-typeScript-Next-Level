"use strict";
//Mocking
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject(" Failed to fetch");
        }
    });
};
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const data = { data: "Data is fetched" };
        if (data) {
            resolve(data);
        }
        else {
            reject(" Failed to fetch");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    // console.log(data); // if Void has return type
    return data; // if return has return type
});
const getPromiseDataObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    // console.log(data); // if Void has return type
    return data; // if return has return type
});
