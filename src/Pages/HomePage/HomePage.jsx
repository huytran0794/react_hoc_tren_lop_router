import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { GET_ALL_MOVIE } from "../../utils/request";
import { stringEllipsis } from "../../utils/utils";
class HomePage extends Component {
  state = {
    moveList: [],
  };
  componentDidMount() {
    GET_ALL_MOVIE("GP03")
      .then((res) => {
        this.setState({
          moveList: res.data.content,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  renderMovieList = () => {
    if (!this.state.moveList.length) return null;
    return this.state.moveList.map((movie, idx) => (
      <div
        className="card-movie w-4/12 p-4 basis-4/12 shadow-md bg-slate-300"
        id={movie.maPhim}
        key={idx.toString() + movie.maPhim}
      >
        <div className="thumb-wrapper w-full h-auto max-h-[60%] min-h-[40%] p-2 flex-all-center overflow-hidden">
          <img
            className="thumb object-cover object-center min-h-full min-w-full max-w-full"
            src={movie.hinhAnh}
            alt="Title"
          />
        </div>
        <div className="body mt-5">
          <h4 className="title">{movie.tenPhim}</h4>
          <p className="desc">{stringEllipsis(movie.moTa)}</p>
          <div className="body-footer flex justify-center items-center mt-7">
            <button className="bg-sky-500/100 px-4 py-2 flex justify-center items-center text-white rounded-md">
              <NavLink to={`/detail/${movie.maPhim}`}>Xem chi tiết</NavLink>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper flex flex-wrap">{this.renderMovieList()}</div>
      </div>
    );
  }
}

export default HomePage;
