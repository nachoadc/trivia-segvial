import { Question } from "../models/Question.js";

export const create = async (question, options) => {
    
    const newQuestion = await Question.create({
        question,
        options
    });

    return newQuestion;

};