import { Question } from "../models/Question.js";

export const create = async (question, correct_answer, incorrect_answers) => {
    
    const newQuestion = await Question.create({
        question,
        correct_answer,
        incorrect_answers
    });

    return newQuestion;

};