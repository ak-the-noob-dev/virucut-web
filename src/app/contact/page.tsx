"use client";
import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    window.location.replace("/contact-us");
  }, []);

  return null;
}
