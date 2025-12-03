import { useState } from "react";
const todoKey="reactTodo";

export  const getLocalStorageData=()=>{
   const rawsTodos=localStorage.getItem(todoKey);
    
    if(!rawsTodos) return[];

    return JSON.parse(rawsTodos);
}


export  const setLocalStorageData=(task)=>{
  
    return localStorage.setItem(todoKey,JSON.stringify(task));
}