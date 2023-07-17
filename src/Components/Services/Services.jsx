import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Coquetéis Grátis",
        info:
          "Mergulhe na nossa seleção exclusiva de coquetéis gratuitos, servidos diariamente ao pôr do sol. Oferecemos uma variedade de misturas sofisticadas e refrescantes, perfeitas para complementar a vista incrível da nossa praia paradisíaca. Cada coquetel é habilmente preparado pelos nossos barmen especialistas, usando os ingredientes mais frescos e premium, criando um balé de sabores para o seu paladar. Brinde ao pôr do sol com estilo e sinta o sabor do verdadeiro luxo com nossos coquetéis gratuitos.",
      },
      {
        icon: <FaHiking />,
        title: "Aventuras garantida",
        info:
          "Na sua estadia conosco, prometemos mais do que apenas acomodações de luxo e serviço impecável, nós garantimos aventuras inesquecíveis. O nosso resort oferece uma vasta gama de atividades emocionantes, desde esportes aquáticos como caiaque e snorkeling, até trilhas de caminhada para os entusiastas ao ar livre. Explore o mar cristalino, descubra vida marinha exótica ou aventura-se na selva tropical circundante. Viva a aventura dos seus sonhos conosco, porque aqui, a diversão é garantida.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Transporte Gratuito",
        info:
          "Esqueça as preocupações com logística ao reservar conosco. O nosso serviço de transporte gratuito está à sua disposição para buscá-lo no aeroporto e levá-lo confortavelmente até o nosso resort. Quando estiver pronto para explorar a região, temos um serviço de transporte diário que vai do resort até os pontos turísticos locais mais populares. Assim, você pode desfrutar do que a região tem de melhor, sem qualquer preocupação com o transporte.",
      },
      {
        icon: <FaBeer />,
        title: "Bebida a vontade",
        info:
          "Em nosso resort, acreditamos que férias devem ser vivenciadas sem limites. Por isso, apresentamos nossa oferta de bebidas à vontade. Desde sucos naturais, refrescos tropicais, até a nossa seleção de vinhos e cervejas locais, oferecemos uma variedade de bebidas para todos os gostos e momentos. Desfrute de sua bebida favorita na praia, ao lado da piscina ou durante o jantar, a qualquer momento e quantas vezes quiser. Descontraia e desfrute do prazer de bebidas ilimitadas em um paraíso tropical.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Nossos serviços" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
