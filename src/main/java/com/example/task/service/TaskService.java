package com.example.task.service;

import com.example.task.domain.Task;

public interface TaskService {



    Iterable<Task> list();

    Task save(Task task);
}
