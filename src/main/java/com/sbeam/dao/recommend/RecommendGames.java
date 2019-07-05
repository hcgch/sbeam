package com.sbeam.dao.recommend;

import com.sbeam.pojo.recommend.Games;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author 洪春根
 *
 * 游客游戏推荐
 */
@Repository
public interface RecommendGames {

    //获取随机推荐游戏
     List<Games> getRecommendGames();

}
