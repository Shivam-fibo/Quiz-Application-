import express from "express";
import {
  newQuizController,
  updateQuizController,
  deleteQuizController,
  submitQuiz,
} from "../controller/quiz.controller.js";


const router = express.Router();

// Admin routes
router.post("/quiz",   newQuizController);
router.put("/quiz/:id",  updateQuizController);
router.delete("/quiz/:id",  deleteQuizController);

// User route
router.post("/quiz/:id/submit", submitQuiz);

export default router;


// http://localhost:3000/quiz/quiz
// http://localhost:3000/quiz/quiz/:id
