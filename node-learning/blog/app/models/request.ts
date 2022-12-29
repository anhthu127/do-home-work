import { Role } from "../constants/constant";

export interface AccountRegistration {
  name: string;
  username: string;
  dob: string;
  email: string;
  role: Role;
}

export interface ClassRegistration {
  name: string;
  max: number;
  endTime: string;
  startTime: string;
}
export interface StudentRegistration {
  name: string;
  dob: string;
}
