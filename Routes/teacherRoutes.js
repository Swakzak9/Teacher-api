import express from 'express';
import { Router } from "express";
import Teacher from '../Models/teacherModels.js';

const route = Router();

route.get('/api/v1/teacher', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});

export default route;
