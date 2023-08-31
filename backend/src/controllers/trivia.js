import * as triviaService from "../services/trivia.js";

export const get = async (req, res) => {
    try {
        const getTrivia = await triviaService.get();
        if (getTrivia.length < 5) {
            return res.status(500).json({ message: "Preguntas insuficientes para realizar la trivia" })
        }
        res.status(200).json(getTrivia);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
