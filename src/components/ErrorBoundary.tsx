"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean, prevPathname: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, prevPathname: "" };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // Reset error state when navigating to a new page
    if (this.state.prevPathname !== window.location.pathname) {
      this.setState({ hasError: false, prevPathname: window.location.pathname });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <Error />
        </Wrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
