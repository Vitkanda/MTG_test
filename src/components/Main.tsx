import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import ReviewCard from "./ReviewCard";
import { IReview } from "../types/types";
import { fetchReviews } from '../redux/reviewsSlice';

interface MainProps {
  lang: string;
  reviews: IReview[];
  fetchReviews: (lang: string) => void;
}

interface MainState {
  currentPage: number;
  reviewsPerPage: number;
}

class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      currentPage: 1,
      reviewsPerPage: 10,
    };
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.lang);
  }

  componentDidUpdate(prevProps: MainProps) {
    if (this.props.lang !== prevProps.lang) {
      this.props.fetchReviews(this.props.lang);
      this.setState({ currentPage: 1 }); 
    }
  }

  handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    event.preventDefault();
    this.setState({ currentPage: page });
  };

  render() {
    const indexOfLastReview =
      this.state.currentPage * this.state.reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - this.state.reviewsPerPage;
    const currentReviews = this.props.reviews.slice(
      indexOfFirstReview,
      indexOfLastReview
    );

    const totalPages = Math.ceil(
      this.props.reviews.length / this.state.reviewsPerPage
    );
    return (
      <main>
        {currentReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}

        <div>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={(e) => this.handlePageChange(e, i + 1)}
              className={this.state.currentPage === i + 1 ? "active-page" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  lang: state.reviews.language,
  reviews: state.reviews.reviews,
});

export default connect(mapStateToProps, { fetchReviews })(Main);
