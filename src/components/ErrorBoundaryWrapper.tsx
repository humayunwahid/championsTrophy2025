"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ErrorBoundary from "./ErrorBoundary"; // Adjust path as needed

const ErrorBoundaryWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get current route

  return <ErrorBoundary key={pathname}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
