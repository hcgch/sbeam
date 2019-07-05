package com.sbeam.service.recommend.impl;

import com.sbeam.dao.recommend.LikeGamesDao;
import com.sbeam.pojo.recommend.Games;
import com.sbeam.service.recommend.LikeGamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeGamesServiceImpl implements LikeGamesService {
    @Autowired
    LikeGamesDao likeGamesDao;

    @Override
    public List<Games> getGamesByType(String type) {
        List<Games> gamesByType = likeGamesDao.getGamesByType(type);
        return gamesByType;
    }

    @Override
    public String likeTypes(int id) {
        String games = likeGamesDao.likeTypes(id);

        return games;
    }

    @Override
    public List<Games> likeTypesGet(String[] s) {
        List<Games> games = likeGamesDao.likeTypesGet(s);
        return games;
    }
}
