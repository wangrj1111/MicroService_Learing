package top.wang.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class UserController {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/user")
    public String getUser(@RequestParam String username) {
        return "User: " + username;
    }

    @GetMapping("/userask")
    public String getUserAsk(@RequestParam String question){
        String askUrl="http://localhost:8084/ask?question="+question;
        String anwser = restTemplate.getForObject(askUrl, String.class);
        return "你的问题是:"+question+"\n"+"ai回答："+anwser;
    }
}