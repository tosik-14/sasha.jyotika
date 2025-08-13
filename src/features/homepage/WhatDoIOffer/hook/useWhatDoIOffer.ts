import React, {useState} from "react";
import {offers} from "@/features/homepage/WhatDoIOffer/content/myOffers";

export function useWhatDoIOffer () {
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggleOffer = (id: string) => {
        setActiveId((prev) => prev = id ? id : null);
    }

    const activeOffer = offers.find((offer) => offer.id === activeId);

    return {
        offers,
        activeId,
        activeOffer,
        toggleOffer,
    }
}