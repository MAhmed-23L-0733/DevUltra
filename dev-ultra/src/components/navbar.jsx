"use client";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content");
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] z-[99] top-[1.2em] md:top-[2em] ${className} fixed`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${
          isExpanded ? "open" : ""
        } h-[60px] rounded-2xl shadow-2xl relative overflow-hidden will-change-[height] backdrop-blur-sm bg-white/5 border border-white/10 transition-all ease-linear duration-100 hover:shadow-3xl hover:border-white/20 hover:backdrop-blur-3xl hover:bg-white/10 block`}
        style={{
          boxShadow: isExpanded
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
            : "0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-5 z-[2]">
          <div className="logo-container flex items-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-full p-1 transition-all duration-300">
              <Link href="/">
                <Image
                  src={logo}
                  alt={logoAlt}
                  height={50}
                  width={70}
                  className="transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
                />
              </Link>
            </div>
          </div>
          <div
            className={`hamburger-menu ${
              isHamburgerOpen ? "open" : ""
            } group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px] order-2 md:order-none p-2 rounded-xl hover:bg-white/5 transition-colors duration-200`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor || "#ffffff" }}
          >
            <div
              className={`hamburger-line w-[24px] h-[2.5px] bg-current transition-all duration-300 ease-out [transform-origin:50%_50%] rounded-full ${
                isHamburgerOpen
                  ? "translate-y-[3.5px] rotate-45 bg-gradient-to-r from-blue-400 to-purple-500"
                  : "group-hover:scale-105"
              }`}
            />
            <div
              className={`hamburger-line w-[24px] h-[2.5px] bg-current transition-all duration-300 ease-out [transform-origin:50%_50%] rounded-full ${
                isHamburgerOpen
                  ? "-translate-y-[3.5px] -rotate-45 bg-gradient-to-r from-blue-400 to-purple-500"
                  : "group-hover:scale-105"
              }`}
            />
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col items-stretch gap-3 justify-start z-[1] ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-[16px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-[16px_20px] rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[80px] md:h-full md:min-h-0 md:flex-[1_1_0%] backdrop-blur-xl border border-white/20 transition-all duration-100 hover:border-white/30 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 hover:backdrop-blur-2xl cursor-pointer group overflow-hidden"
              ref={setCardRef(idx)}
              style={{
                backgroundColor: `${item.bgColor}40`,
                color: item.textColor,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>

              <div className="nav-card-label font-semibold tracking-[-0.5px] text-[18px] md:text-[20px] relative z-10 group-hover:text-white transition-colors duration-100">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[4px] relative z-10">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[8px] no-underline cursor-pointer transition-all duration-100 hover:text-white hover:translate-x-1 text-[15px] md:text-[16px] opacity-80 hover:opacity-100 group/link"
                    href={lnk.href}
                    target={item.label == "Contact" ? "_blank" : "false"}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight
                      className="nav-card-link-icon shrink-0 transition-transform duration-300 group-hover/link:rotate-45 group-hover/link:scale-110"
                      aria-hidden="true"
                    />
                    {lnk.label}
                  </a>
                ))}
              </div>

              {/* Animated border */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.bgColor}80, transparent)`,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  padding: "1px",
                }}
              ></div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
