package top.wang.contentservice.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import top.wang.contentservice.model.entity.Share;
import top.wang.contentservice.model.vo.UserVO;
import top.wang.contentservice.openfeign.ShareService;
import top.wang.contentservice.service.impl.ShareServiceImpl;

/**
 * <p>
 * 分享表 前端控制器
 * </p>
 *
 * @author wang
 * @since 2025-02-28
 */
@RestController
@RequiredArgsConstructor
public class ShareController {
    private final ShareServiceImpl Service;
    private final ShareService shareService;

    @GetMapping("/share/{shareId}")
    public Share share(@PathVariable int shareId){
        Share shareInfo = Service.getById(shareId);
        int Userid = shareInfo.getUserId();
        UserVO user = shareService.ShareUser(Userid);
        shareInfo.setUserInfo(user);
        return shareInfo;
    }

}
