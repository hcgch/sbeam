package com.sbeam.service.recommend;

import com.sbeam.pojo.recommend.Games;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RecommendGamesUservice {

    //获取随机推荐游戏
    List<Games> getRecommend();
}
