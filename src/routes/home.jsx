import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import "./home.css";

const Home = () => {
  const [nasaData, setNasaData] = useState(null);
  const { Title } = Typography;

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const apiKey = "oeMzFyh8qwxlcgrpyvllB1xUHhvxYhsWaZLb6jwE";
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Erro ao obter dados da API da NASA");
        }

        const data = await response.json();
        setNasaData(data);
      } catch (error) {
        console.error("Erro ao processar dados da API da NASA:", error);
      }
    };

    fetchNasaData();
  }, []); // A dependência vazia significa que o efeito só é executado uma vez, semelhante ao componentDidMount

  console.log(nasaData);
  return (
    <div className="homediv">
      <Title className="Text">Project Nasa</Title>
      {nasaData ? (
        <div style={{ alignItems: "center", textAlign: "center" }}>
          <h1>{nasaData.title}</h1>
          <img
            src={nasaData.url}
            alt={nasaData.title}
            style={{ borderRadius: "6px" }}
          />
          <p
            style={{
              textAlign: "center",
              background: "white",
              padding: "20px",
              borderRadius: "6px",
              width: "70%",
              color: "black",
              fontWeight: "bold",
              margin: "auto", // Centraliza horizontalmente
              marginTop: "20px", // Adicione margem superior conforme necessário
              marginBottom: "20PX",
            }}
          >
            {nasaData.explanation}
          </p>
        </div>
      ) : (
        <p>Carregando dados da NASA...</p>
      )}
    </div>
  );
};

export default Home;
