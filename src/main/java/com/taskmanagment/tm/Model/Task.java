package com.taskmanagment.tm.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


// import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Document(collection = "tasks")
@Getter
@Setter
public class Task {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String title;
    private String status;
    // private int CustomId;

}
