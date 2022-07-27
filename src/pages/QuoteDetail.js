import React, { useEffect } from "react";
import { Route, Routes, useParams, Link, Outlet } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const {
    status,
    data: loadedQuote,
    sendRequest,
    error,
  } = useHttp(getSingleQuote, true);

  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  return (
    <React.Fragment>
      <h1>Quote detail page</h1>

      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
        id={loadedQuote.id}
      />
      <Outlet />
    </React.Fragment>
  );
};

export default QuoteDetail;
