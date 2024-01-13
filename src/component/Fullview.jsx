import React from "react";

const FullView = (props) => {
  return (
    <span className="items-start bg-neutral-100 flex max-w-[480px] w-full flex-col mx-auto pl-2.5 py-2.5 rounded-md">
      <div className="self-stretch flex items-stretch justify-between gap-0.5">
        <span className="flex flex-col">
          <div className="text-zinc-800 text-xs self-stretch">
            This turf is to be mowed with a manual mower of 30” . The total area
            includes the lawn back of the house. This turf is to be mowed with a
            manual mower of 30” . The total area includes the lawn back of the
            house.
          </div>
          <span className="items-stretch self-stretch flex justify-between gap-0 mt-4">
            <div className="text-zinc-800 text-sm font-semibold whitespace-nowrap">
              1. Turf Audit
            </div>
          </span>
          <span className="items-stretch self-stretch flex justify-between gap-0 mt-2">
            <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
              1.a Overall Appearance
            </div>
          </span>
          <div className="self-stretch text-stone-500 text-xs">
            Please share feedback on the relative input points relevant to the
            area of the site that these questions are linked to. Please ensure
            all mandatory fields are filled sincerely.{" "}
          </div>
          <div className="text-stone-500 text-xs font-semibold self-stretch mt-2">
            5 <span className=" text-stone-500">out of 5</span>
          </div>
          <div className="self-stretch text-zinc-800 text-xs font-medium whitespace-nowrap">
            Upto MyLawn Standards
          </div>
          <div className="self-stretch text-zinc-800 text-xs">
            Few lines elaborating the context of the note being created
          </div>
          <div className="items-stretch self-stretch flex justify-between gap-2 mt-1 pr-20">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
              className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
              className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <span className="items-stretch self-stretch flex justify-between gap-0 mt-6">
            <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
              1.b Flower Type
            </div>
          </span>
          <div className="text-zinc-800 text-xs self-stretch mt-2">
            Caladium, Calendula, Cardinal, Lavender, Roses and Sunflower
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
            className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden max-w-full mt-1 self-start"
          />
          <span className="items-stretch self-stretch flex justify-between gap-0 mt-6">
            <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
              1.c Flower Type
            </div>
          </span>
          <div className="text-neutral-400 text-xs self-stretch whitespace-nowrap mt-2">
            None
          </div>
          <span className="items-stretch self-stretch flex justify-between gap-0 mt-6">
            <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
              1.d Is the Turf dry?
            </div>
          </span>
          <div className="text-zinc-800 text-xs self-stretch whitespace-nowrap mt-2">
            No
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
            className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden max-w-full mt-1 self-start"
          />
        </span>
      </div>
      <span className="items-stretch self-stretch flex justify-between gap-0 mt-4">
        <div className="text-zinc-800 text-sm font-semibold whitespace-nowrap">
          2. Mulch Audit
        </div>
      </span>
      <span className="items-stretch self-stretch flex justify-between gap-0 mt-2">
        <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
          2.a Overall Appearance
        </div>
      </span>
      <div className="self-stretch text-stone-500 text-xs w-full">
        Please share feedback on the relative input points relevant to the area
        of the site that these questions are linked to. Please ensure all
        mandatory fields are filled sincerely.{" "}
      </div>
      <div className="text-stone-500 text-xs font-semibold self-stretch mt-2">
        5 <span className=" text-stone-500">out of 5</span>
      </div>
      <div className="self-stretch text-zinc-800 text-xs font-medium whitespace-nowrap">
        Upto MyLawn Standards
      </div>
      <div className="self-stretch text-zinc-800 text-xs w-full">
        Few lines elaborating the context of the note being created
      </div>
      <div className="items-stretch self-stretch flex justify-between gap-2 mt-1 pr-20">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
          className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5806231f9c821498ee54987c97fa00adaa522a3b4f5495435d9514b22a4a2858?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
          className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <span className="items-stretch self-stretch flex justify-between gap-0 mt-6">
        <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
          2.b Flower Type
        </div>
      </span>
      <div className="text-zinc-800 text-xs self-stretch w-full mt-2">
        Caladium, Calendula, Cardinal, Lavender, Roses and Sunflower
      </div>
      <span className="items-stretch self-stretch flex justify-between gap-0 mt-6">
        <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
          2.c Flower Type
        </div>
      </span>
      <div className="text-neutral-400 text-xs self-stretch whitespace-nowrap mt-2">
        None
      </div>
      <span className="items-stretch self-stretch flex justify-between gap-0 mt-6">
        <div className="text-stone-500 text-xs font-semibold whitespace-nowrap">
          2.d Is the Turf dry?
        </div>
      </span>
      <div className="text-zinc-800 text-xs self-stretch whitespace-nowrap mt-2">
        No
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe373f3b5d86ca07d23add2219172ab23bc9b2ba4a1cf68d98d2201996017dbb?apiKey=b2551c1a133242ba93a6dc4befb9452b&"
        className="aspect-[1.11] object-contain object-center w-[82px] overflow-hidden max-w-full mt-1 self-start"
      />
    </span>
  );
};

export default FullView;
