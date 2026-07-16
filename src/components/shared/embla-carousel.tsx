"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./card-column";

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
    data: carouselProps[],
    isLoading: boolean
}

export default function EmblaCarousel({ data, isLoading }: EmblaCarouselProps) {
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
        <div className="relative">
             {/* Optional: Navigation Buttons */}
                <div className="flex gap-2 md:gap-4 justify-end mb-4 md:mb-6">
                    <button
                    className="disabled:opacity-50"
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    >
                        <ChevronLeft className="inline text-foreground duration-300" size={35}/>
                    </button>
                    <button
                    className="disabled:opacity-50"
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    >
                        <ChevronRight className="inline text-foreground duration-300" size={35}/>
                    </button>
                </div>
            {/* Viewport wrapper: must have overflow-hidden */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-8 md:gap-4">
                    {/* Container wrapper: holds all the slides together */}
                    {
                        data.map((blog) => (
                            <Card key={blog.id} data={blog} isLoading={isLoading} width={360} height={250}/>
                        ))
                    }
                </div>
            </div>
        </div>
  );
}
