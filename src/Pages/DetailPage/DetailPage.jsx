import React, { Component } from "react";
import { GET_SINGLE_MOVIE } from "../../utils/request";
class DetailPage extends Component {
  state = {
    movieDetail: null,
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    GET_SINGLE_MOVIE(id)
      .then((res) => {
        this.setState({
          movieDetail: res.data.content,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="movie-detail" id={this.state.movieDetail?.maPhim}>
        <div className="container">
          <div className="wrapper py-5 flex flex-wrap justify-center">
            <div className="--left w-3/12 basis-3/12 px-4 relative">
              <div className="thumb-wrapper w-full h-full">
                <img
                  className="thumb max-w-full max-h-52 absolute inset-"
                  src={this.state.movieDetail?.hinhAnh}
                  alt="hinh phim"
                />
              </div>
            </div>
            <div className="--right w-5/12 basis-5/12 px-4">
              <div className="content-wrapper flex flex-col gap-4">
                <h4 className="title font-semibold text-2xl">
                  {this.state.movieDetail?.tenPhim}
                </h4>
                <p className="desc">{this.state.movieDetail?.moTa}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
