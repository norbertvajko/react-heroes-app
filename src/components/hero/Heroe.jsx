import React, { useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
        setData(response);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    
    }

    fetchData();
  }, []);

  return (
    <div>
    {loading && <div>Loading...</div>}
    {!loading && (
      <Wrapper>
        <h2>Heroes</h2>

      <Splide options={{
        perPage: 4,
        arrows: true,
        pagination: false,
        // drag: 'free',
        gap: '5rem',
        wheel: true,
        speed: 7000,
  
      }}>

        {data.map(item => (
          <SplideSlide key={item.id}>
          <Card key={item.id}>
            <p>{item.name}</p>
            <img src={item.images.md} />
            <Gradient />
          </Card>
          </SplideSlide>
          ))}
          </Splide>
      </Wrapper>
    )}
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

`;

const Card = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  min-height: 25rem;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 2rem;
    width: 100%;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Hero;