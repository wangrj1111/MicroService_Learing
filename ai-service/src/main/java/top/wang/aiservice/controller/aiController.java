package top.wang.aiservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.wang.aiservice.service.DoubaoService;

@RestController

public class aiController {

    @Autowired
    private DoubaoService doubaoService;

    @GetMapping("/ask")
    public String queryDoubao(@RequestParam String question) {
        return doubaoService.queryDoubao(question);
    }
}