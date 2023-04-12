import {ModelMessage} from "./model.message";


export interface ModelStringConversion{

  id: number,
  dateSave: string,
  originalString: string,
  convertedString: string,
  messageModel: ModelMessage,

}
