package com.sbeam.controller.recommendGames;

import com.sbeam.pojo.recommend.Gamer;
import com.sbeam.pojo.recommend.Games;
import com.sbeam.service.recommend.LikeGamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用户游戏推荐
 *
 */
@Controller
public class LikeGamesController {

    @Autowired
    LikeGamesService likeGamesService;

    //用户点击类型推荐
    @RequestMapping(value = "/clickType",method = RequestMethod.POST,produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Games> clickType(@RequestBody Games games){

        String type1 = games.getType();
        List<Games> games1 = likeGamesService.getGamesByType(type1);

        return games1;
    }

    //根据用户喜欢类型推荐
    @RequestMapping(value = "/likeGames",method = RequestMethod.POST,produces = "application/json;charset=utf-8")
    @ResponseBody
    public List<Games> getLikeGames(@RequestBody Gamer gamer){

        int id = gamer.getId();

        String games1 = likeGamesService.likeTypes(id);

        String[] split = games1.split(",");

        List<Games> games = likeGamesService.likeTypesGet(split);

        return games;
    }
}
