import cors from "cors";
import express from "express";
import {
  promises as fs
} from "fs";
import winston from "winston";
import hospedagemRouter from "./routes/hospedagem.routes.js";

const {
    readFile,
    writeFile
} = fs;

global.fileName = "hospedagem.json";

// logger

const {
  combine,
  timestamp,
  label,
  printf
} = winston.format;
const myFormat = printf(({
  level,
  message,
  label,
  timestamp
}) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

global.logger = winston.createLogger({
  level: "silly",
  transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({
          filename: "mock-api.log"
      })
  ],
  format: combine(
      label({
          label: "api"
      }),
      timestamp(),
      myFormat
  )
})

const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/v1/hospedagem", hospedagemRouter )

const server = async () => {

    try {
        await readFile(fileName);
        logger.info("API Started!");
    } catch (err) {
        const initialJson = {
            hospedagem: [
              
            ],           
        };
        writeFile(fileName, JSON.stringify(initialJson)).then(() => {
            logger.info("API Started and File Created!");
        }).catch(erro => {
            logger.error(erro);
        });
    }
};
app.listen(3000, server);
