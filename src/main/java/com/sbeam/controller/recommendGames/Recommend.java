package com.sbeam.controller.recommendGames;

import com.sbeam.pojo.recommend.Games;
import com.sbeam.service.recommend.RecommendGamesUservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class Recommend {
    @Autowired
    RecommendGamesUservice recommendGamesUservice;

    @RequestMapping(value = "/test",method = RequestMethod.POST,produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Games> Recommend(){
        List<Games> strings = recommendGamesUservice.getRecommend();
//        System.out.println(strings);
        return strings;
    }
}
