"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {SquareChevronLeft, SquareChevronRight } from "lucide-react";
import CardColumn from "./card-column";

interface carouselProps {
    id: number;
    title: string;
    slug: string;
    description: string;
    category: string;
    imageURL: string;
    date: string;
    author: string; 
}

interface EmblaCarouselProps {
    data: carouselProps[];
}

export default function EmblaCarousel({ data }: EmblaCarouselProps) {
  // Initialize the carousel hook with basic loop behavior
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 'auto' }
    }
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);


  // Navigation handlers
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Track state changes to disable navigation buttons at bounds (if loop: false)
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
        <div className="embla relative">
             {/* Optional: Navigation Buttons */}
                <div className="flex gap-0 justify-end mb-4 md:mb-6">
                    <button
                    className="disabled:opacity-50"
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    >
                        <SquareChevronLeft className=" text-foreground duration-300" size={35}/>
                    </button>
                    <button
                    className="disabled:opacity-50"
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    >
                        <SquareChevronRight className="text-foreground duration-300" size={35}/>
                    </button>
                </div>
            {/* Viewport wrapper: must have overflow-hidden */}
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex gap-8 md:gap-3">
                    {/* Container wrapper: holds all the slides together */}
                    {
                        data.map((blog) => (
                            <CardColumn key={blog.id} data={blog}/>
                        ))
                    }
                </div>
            </div>
        </div>
  );
}
