package com.sbeam.service.recommend.impl;

import com.sbeam.dao.recommend.RecommendGames;
import com.sbeam.pojo.recommend.Games;
import com.sbeam.service.recommend.RecommendGamesUservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendGamesUserviceImpl implements RecommendGamesUservice {

    @Autowired
    RecommendGames recommendGames;

    @Override
    public List<Games> getRecommend() {
        List<Games> rSet = recommendGames.getRecommendGames();
        System.out.println("rSet In ServiceImpl::\n"+rSet);
        return rSet;
    }
}
