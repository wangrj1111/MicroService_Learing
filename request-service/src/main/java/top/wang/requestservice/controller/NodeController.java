package top.wang.requestservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import top.wang.requestservice.openfeign.NodeService;

@RestController
public class NodeController {
    @Autowired
    private NodeService nodeService;

    @GetMapping("/Node")
    public String getNode()
    {
        return nodeService.getUser();
    }
}
