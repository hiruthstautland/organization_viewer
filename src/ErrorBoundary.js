import React from "react";

import * as Sentry from "@sentry/react";
import { ErrorCard } from "./ErrorCard";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, eventId: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      scope.setTag("Custome-tag", "ErrorBoundary");
      scope.setLevel("warning");
      let eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorCard />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
