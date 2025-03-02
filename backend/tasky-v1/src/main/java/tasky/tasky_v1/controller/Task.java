package tasky.tasky_v1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Task {
    @GetMapping("/tasks")
    public String getTask(){
        return "task";
    }
}
