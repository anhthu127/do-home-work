import { Role } from "../constants/constant";

export interface Class {
  id: number;
  name: string;
  max: number;
  startTime: string;
  endTime: string;
}
export interface Student {
  id: number;
  name: string;
  dob: string;
  accountId: number;
  classId: number;
}

export interface Parents {
  name: string;
  dob: string;
  accountId: number;
  studentId: number;
}

export interface Account {
  name: string;
  username: string;
  email: string;
  role: Role;
}
