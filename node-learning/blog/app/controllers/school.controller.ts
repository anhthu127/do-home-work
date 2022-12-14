import { RequestHandler } from "express";
import {
  addBulkStudentRepo,
  addClassRepo,
  getClassListRepo,
  getStudentListRepo,
} from "../repositories/school.repository";
import { commonResponse } from "../utils/common-response";

export const addClass = async (req, res, next) => {
  const { name } = req.body;
  const result = await addClassRepo(name);
  res.status(200);
  res.send(commonResponse(result));
};

export const addBulkStudentController: RequestHandler = async (req, res) => {
  const { students, classId } = req.body;
  const values = [];
  for (const student of students) {
    values.push([student, classId]);
  }
  if (values.length > 0) {
    const result = addBulkStudentRepo(values);
    res.status(200);
    res.send(commonResponse(result));
  } else {
    res.json({ message: "Student data is required" });
  }
};

export const getStudentListController: RequestHandler = async (req, res) => {
  const result = await getStudentListRepo();
  res.status(200);
  res.send(commonResponse(result));
};

export const getClassList = async (req, res) => {
  const result = await getClassListRepo();

  res.status(200);
  res.send(commonResponse(result));
};
