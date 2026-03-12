"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page-level title (with span children — Hero page)
      gsap.from(".hero-title span", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // All headings with hero-title (section headings, detail titles, etc.)
      document.querySelectorAll(".hero-title").forEach((el) => {
        // Skip if it has span children (already handled above)
        if (el.querySelectorAll("span").length > 0) return;
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        delay: 0.6,
        duration: 0.8,
      });

      gsap.from(".hero-stat", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        delay: 0.4,
        duration: 0.8,
      });

      // Counter animation
      document.querySelectorAll(".counter").forEach((el: any) => {
        const value = parseInt(el.dataset.value);
        const suffix = el.dataset.suffix || "";

        const obj = { val: 0 };

        gsap.to(obj, {
          val: value,
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.innerText = Math.floor(obj.val) + suffix;
          },
        });
      });

      // subtle background movement
      gsap.to(".hero-circle", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
      });
      // paragraph animation
      gsap.from(".hero-para", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        delay: 0.5,
        ease: "power3.out",
      });

      // buttons animation
      gsap.from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.7,
        ease: "power3.out",
      });
    });
    

    return () => ctx.revert();
  }, []);

  return null;
}
