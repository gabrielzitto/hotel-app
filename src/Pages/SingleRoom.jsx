import React, { Component } from "react";

import { Link } from "react-router-dom";

// import assets
import defaultBcg from "../assets/img/jpeg/room-1.jpeg";

// import components
import Banner from "../Components/Banner/Banner";
import { RoomContext } from "../Context/Context";
import StyledHero from "../Components/StyledHero/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found!</h3>
          <Link to="/rooms" className="btn-primary">
            Voltar a seção de quartos
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Voltar a seção de quartos
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Informações:</h3>
              <h6>preço : ${price}</h6>
              <h6>Tamanho : {size} m²</h6>
              <h6>
                Capacidade :{" "}
                {capacity > 1 ? `${capacity} pessoa(s)` : `${capacity} pessoa(s)`}
              </h6>
              <h6>{pets ? "pets permitido" : "pets não é permitido"}</h6>
              <h6>{breakfast && "café da manhã incluido"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras:</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}