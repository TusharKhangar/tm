package com.taskmanagment.tm.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanagment.tm.Model.Task;
import com.taskmanagment.tm.Repository.TaskRepository;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin("http://localhost:5173/")
@AllArgsConstructor
@RestController
@RequestMapping("/tasks")
public class TaskController {
    
    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/get")
    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    @PostMapping("/create")
    public Task CreateTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable String id, @RequestBody Task taskDetails) {
        Optional<Task> task = taskRepository.findById(id);
       if (task.isPresent()) {
        Task task2 = task.get();
           task2.setTitle(taskDetails.getTitle());
           task2.setStatus(taskDetails.getStatus());
           Task saveTask = taskRepository.save(task2);
           return ResponseEntity.ok(saveTask);
       }else{
            return ResponseEntity.notFound().build();
       }
    }

    @DeleteMapping("/{id}")
        public ResponseEntity<String> DeleteTask(@PathVariable String id){
            Optional<Task> t = taskRepository.findById(id) ;
            if (t.isPresent()) {
                Task task = t.get();
                taskRepository.delete(task);
                return ResponseEntity.noContent().build();
            }else{
                return ResponseEntity.notFound().build(); 
            }
    }
    
}
