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
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      // All headings with hero-title (section headings, detail titles, etc.)
      document.querySelectorAll(".hero-title").forEach((el) => {
        // Skip if it has span children (already handled above)
        if (el.querySelectorAll("span").length > 0) return;
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
        });
      });

      gsap.from(".hero-subtitle", {
        y: 15,
        opacity: 0,
        delay: 0.2,
        duration: 0.6,
      });

      gsap.from(".hero-buttons", {
        y: 15,
        opacity: 0,
        delay: 0.3,
        duration: 0.6,
      });

      gsap.from(".hero-stat", {
        y: 15,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.6,
      });

      // Counter animation
      document.querySelectorAll(".counter").forEach((el) => {
        const htmlel = el as HTMLElement;
        const value = parseInt(htmlel.dataset.value || "0");
        const suffix = htmlel.dataset.suffix || "";

        const obj = { val: 0 };

        gsap.to(obj, {
          val: value,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: htmlel,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            htmlel.innerText = Math.floor(obj.val) + suffix;
          },
        });
      });

      // subtle background movement
      gsap.to(".hero-circle", {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "sine.inOut",
      });
      // paragraph animation
      gsap.from(".hero-para", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.out",
      });

      // buttons animation
      gsap.from(".hero-btn", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
      });
    });


    return () => ctx.revert();
  }, []);

  return null;
}
