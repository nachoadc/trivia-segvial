import * as questionService from "../services/question.js";

export const create = async (req, res) => {

    try {
        const {question, options} = req.body;
        const newQuestion = await questionService.create(question, options);
        res.status(200).send(newQuestion);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    };

};