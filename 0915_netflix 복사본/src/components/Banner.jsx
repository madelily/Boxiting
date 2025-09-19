import { useEffect, useState } from 'react';
import './Banner.css';
import { requests } from '../api/requests';
import axios from "../api/axios";
import styled from 'styled-components';
import { TbNumber10 } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative; 
`;

const Iframe = styled.iframe`
  position: reatieve;
  top: 50%;
  left: 50%;
  transform: translate(0%, -25%);

  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  opacity: 1;
  border: none;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const MuteButton = styled.button`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // ✅ 음소거 상태 추가

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const request = await axios.get(requests.fetchNowPlaying);
      const movieId =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ].id;
      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: "videos" },
      });
      setMovie(movieDetail);
    } catch (error) {
      console.error("데이터 안온다야", error);
    };
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover"
      }}>
      <div className="banner--fadeBottom" />
      {!isClicked ? (
        <div className='banner__contents'>
          <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__top10"><span className='banner_top10b'><TbNumber10 /></span> 오늘 시리즈 순위 1위</div>
          <p className="banner__description">{truncate(movie?.overview, 60)}</p>
          <div className='banner_buttons'>
            <button className='banner__button play' onClick={() => setIsClicked(true)}><FaPlay /> 재생</button>
            <span className="space"></span>
            <button className='banner__button info'><FiInfo /> 상세 정보</button>
          </div>
          
        </div>
      ) : (

        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&playlist=${movie?.videos?.results[0]?.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
              <Overlay />
              <MuteButton onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? '<HiOutlineSpeakerWave />' : '<HiOutlineSpeakerXMark />'}
          </MuteButton>
          </HomeContainer>
        </Container>
      )}

      <div className="banner--faedBottom" />
    </header>
  );
}