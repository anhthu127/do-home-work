import fs from "fs";

export const writeLogFile = (fileName: string, content: string): void => {
  try {
    const isExist = fs.open(fileName, "wx");
    const writer = fs.createWriteStream(fileName);
    if (writer) {
      writer.write(content);
    }
    writer.end();
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("File already exists");
      return;
    }
    console.log(error);
  }
};

export const writeResponse = (fileName: string, content: string): void => {
  try {
    const writer = fs.createWriteStream(fileName);
    if (writer) {
      writer.write(content);
    }
    writer.end();
  } catch (error) {
    console.log(error);
  }
};

export const writeRequest = (fileName: string, content: string): void => {
  try {
    const writer = fs.createWriteStream(fileName);
    if (writer) {
      writer.write(content);
    }
    writer.end();
  } catch (error) {
    console.log(error);
  }
};
