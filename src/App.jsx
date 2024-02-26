import React, { useEffect, useState } from "react";
import "./global.css";
import style from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./componants/TVShowDetail/TVShowDetail";
import { Logo } from "./componants/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowList } from "./componants/TVShowList/TVShowList";
import { SearchBar } from "./componants/SearchBar/SearchBar";

const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  // Fetch populars movies
  async function fechPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopular();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fechPopulars();
  }, []);

  // Fetch  recommendation list
  async function fetchRecommendations(tvShowID) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowID);
      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function searchTvShow(tvShowName) {
    try {
      const response = await TVShowAPI.fetchByTitle(tvShowName);
      if (response.length > 0) {
        setCurrentTVShow(response[0]);
      }
    } catch (error) {
      alert(`${error}\nUne erreur est parvenue durant la récherche.`);
    }
  }

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title={"Whatowatch"}
              subtitle={"Marvel Cinematic Universe"}
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTvShow} />
          </div>
        </div>
      </div>
      <div className={style.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommandations}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
};

export default App;
