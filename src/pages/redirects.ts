import Route from "../core/route";
import Express from "express";

import * as fs from "fs";
export const redirects = [{ id: "0001", url: "https://youtube.com" }];

const script = (req: Express.Request, res: Express.Response) => {
	const redirect = redirects.find(
		(redirect) => redirect.id === req.params.id,
	);
	if (redirect) {
		return res.redirect(redirect.url);
	}
};

export default class Home extends Route {
	/**
	 * super()
	 * parameter 1: the URL path (/)
	 * parameter 2: the Express routing method (GET)
	 * parameter 3: the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/:id", "get", script);
	}
}
