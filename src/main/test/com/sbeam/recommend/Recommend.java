package com.sbeam.recommend;


import com.sbeam.pojo.recommend.Games;
import com.sbeam.service.recommend.LikeGamesService;
import com.sbeam.service.recommend.RecommendGamesUservice;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-context.xml", "classpath:spring-context-druid.xml", "classpath:spring-context-mybatis.xml"})


public class Recommend {
    @Autowired
    RecommendGamesUservice recommendGamesUservice;
    @Autowired
    LikeGamesService likeGamesService;
    @Test
    public void test(){
        List<Games> recommend = recommendGamesUservice.getRecommend();
//        System.out.println("reSetIn Test::\n"+recommend);
    }

    @Test
    public void test2(){

        List<Games> gamesByType = likeGamesService.getGamesByType("角色");
        System.out.println(gamesByType);
    }

    @Test
    public void test3(){
        String games = likeGamesService.likeTypes(1);

        String[] split = games.split(",");

        System.out.println(games);
    }
}
