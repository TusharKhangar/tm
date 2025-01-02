package com.taskmanagment.tm.Repository;


import org.apache.el.stream.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.taskmanagment.tm.Model.Task;
import java.util.List;


public interface TaskRepository extends MongoRepository<Task,String>{
 Task findByTitle(String title);
 Task deleteByTitle(String title);
}
