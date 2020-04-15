"use strict";

import { Request, Response } from "express";
import axios from "axios";
import {getAllStudentData}from "../mock/studentData";
import {getAllClassData} from "../mock/classData"; 
import {Student} from "../models/student.model";
import {ClassMap} from "../models/class.model"; 

//Inital axios request setup
const api = () => {
  return axios.create({
    baseURL: ""
  });
};

/**
 * GET
 * All student data in our mock DB
 */
export interface AllStudentsRes{
  status: string;
  data: Student[]; 
}
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const studentData: AllStudentsRes = getAllStudentData(); 
    return res.send(studentData);
  }
  catch (err) {
    throw err;
  }
};

/**
 * GET
 * All class data in our mock DB
 */
export interface AllClassesRes{
  status: string;
  data: ClassMap; 
}
export const getAllClasses = async (req: Request, res: Response) => {
  try {
    const classData: AllClassesRes = getAllClassData(); 
    return res.send(classData);
  }
  catch (err) {
    throw err;
  }
};