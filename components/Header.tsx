"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useIsClient } from "@/app/hooks/useIsClient";
import useMatchMedia from "@/app/hooks/useMatchMedia";
import { Section_4 } from "./header-components/Section-4";
import { Section_3 } from "./header-components/Section-3";
import { Section_2 } from "./header-components/Section-2";
import { Section_1 } from "./header-components/Section-1";
import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { GetLocation } from "./GetLocation";

export default function Header() {
  const isClient = useIsClient();
  const mobile = useMatchMedia("(max-width: 700px)", false);
  const [visits, setVisits] = useState<any>(null);

  const sendDataLocation = async () => {
    const objectData = {
      ip: await GetLocation.ip(),
      city: await GetLocation.city(),
      province: await GetLocation.province(),
      country: await GetLocation.country(),
      flag: await GetLocation.flag(),
    };

    try {
      const { data: visitsData, error: visitsError } = await supabase
        .from("profile_visits")
        .select("id, ip")
        .limit(1)
        .order("id", { ascending: false });

      if (visitsError) {
        throw new Error(`Cannot get data from db: ${visitsError.message}`);
      }

      const lastVisit = visitsData?.[0];

      if (!lastVisit || lastVisit.ip !== objectData.ip) {
        const { error: insertError } = await supabase
          .from("profile_visits")
          .insert(objectData);

        if (insertError) {
          throw new Error(
            `Cannot insert data ip into db: ${insertError.message}`
          );
        }
      }

      setVisits(lastVisit?.id);
    } catch (error) {
      console.error("Error sending data location:", error);
    }
  };

  useEffect(() => {
    sendDataLocation();
  }, []);

  return (
    <>
      {isClient && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 700: 1, 900: 2 }}
          className="my-4"
        >
          {mobile ? (
            <Masonry gutter={mobile ? "0.5rem" : "0.8rem"}>
              <Section_4 />

              <Section_2 visits={visits} />

              <Section_3 />

              <Section_1 />
            </Masonry>
          ) : (
            <Masonry gutter={mobile ? "0.5rem" : "0.8rem"}>
              <Section_1 />

              <Section_2 visits={visits} />

              <Section_3 />

              <Section_4 />
            </Masonry>
          )}
        </ResponsiveMasonry>
      )}
    </>
  );
}
