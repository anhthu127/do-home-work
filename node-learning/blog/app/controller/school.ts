import { RequestHandler } from "express";
import {
  addBulkStudentService,
  addClassService,
  getClassListService,
  getStudentListService,
} from "../services/school-service";

export const addClass = async (req, res, next) => {
  const { name } = req.body;
  try {
    const result = await addClassService(name);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      data: error,
    });
  }
};

export const addBulkStudent: RequestHandler = async (req, res, next) => {
  const { students, classId } = req.body;
  const values = [];
  for (const student of students) {
    values.push([student, classId]);
  }
  if (values.length > 0) {
    try {
      const result = addBulkStudentService(values);
      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "success",
        data: error,
      });
    }
  } else {
    res.json({ message: "Student data is required" });
  }
};

export const getStudentList: RequestHandler = async (req, res) => {
  try {
    const result = await getStudentListService();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      data: error,
    });
  }
};

export const getClassList: RequestHandler = async (req, res) => {
  try {
    const result = await getClassListService();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      data: error,
    });
  }
};
