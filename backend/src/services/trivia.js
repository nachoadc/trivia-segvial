import { Question } from "../models/Question.js";

export const get = async () => {
    
    const getTrivia = await Question.findAll();
    const trivia = getTrivia.sort(function() {return Math.random() - 0.5}).splice(0,5);
    return trivia;

};