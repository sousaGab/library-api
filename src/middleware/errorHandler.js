import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js";
import BadRequest from "../errors/BadRequest.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
	//console.log(error); //Print error to developer

	if (error instanceof mongoose.Error.CastError) {
		new BadRequest().sendResponse(res);
	} else if (error instanceof mongoose.Error.ValidationError) {
		new ValidationError(error).sendResponse(res);
	} else if (error instanceof BaseError) {
		error.sendResponse(res);
	} else {
		new BaseError().sendResponse(res);
	}
}

export default errorHandler;
