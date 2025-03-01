package top.wang.contentservice.service.impl;

import top.wang.contentservice.model.entity.Share;
import top.wang.contentservice.mapper.ShareMapper;
import top.wang.contentservice.service.IShareService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 分享表 服务实现类
 * </p>
 *
 * @author wang
 * @since 2025-02-28
 */
@Service
public class ShareServiceImpl extends ServiceImpl<ShareMapper, Share> implements IShareService {

}
