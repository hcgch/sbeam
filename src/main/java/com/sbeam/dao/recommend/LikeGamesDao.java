package com.sbeam.dao.recommend;


import com.sbeam.pojo.recommend.Games;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeGamesDao {
    //用户点击类型推荐
    public List<Games> getGamesByType(String type);

    //用户喜欢类型推荐
    public String likeTypes(int id);

    public List<Games> likeTypesGet(String[] s);
}
