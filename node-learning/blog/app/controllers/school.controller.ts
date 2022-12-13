import { RequestHandler } from "express";
import {
  addBulkStudentRepo,
  addClassRepo,
  getClassListRepo,
  getStudentListRepo,
} from "../repositories/school.repository";
import { commonResponse } from "../utils/common-response";

// TODO: dùng controller handler và common response

export const addClass = async (req, res, next) => {
  const { name } = req.body;
  const result = await addClassRepo(name);
  res.status(200);
  res.send(commonResponse(result));
};

export const addBulkStudent: RequestHandler = async (req, res, next) => {
  const { students, classId } = req.body;
  const values = [];
  for (const student of students) {
    values.push([student, classId]);
  }
  if (values.length > 0) {
    try {
      const result = addBulkStudentRepo(values);
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
    const result = await getStudentListRepo();
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
    const result = await getClassListRepo();
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
