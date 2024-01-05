"use client";
import React, { useState } from "react";
import NextImage from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import ModalVideo from "react-modal-video";

import VideoCard from "./VideoCard";

import { pinpoints } from "./pinpointsData";
import { videos } from "./videosData";

const MapPage = () => {
  //Handle Map Clicks
  const [selectedPinpoint, setSelectedPinpoint] = useState(null);
  const handlePinpointClick = (pinpoint) => {
    setSelectedPinpoint(pinpoint);
  };

  const [isOpenModal, setOpenModal] = useState(false);
  const triggerModal = (video) => {
    return () => {
      setOpenModal(true);
      setSelectedVideo(video);
      console.log(video);
    };
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedVideo(null);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  // Handle list of videos
  const renderVideos = () => {
    if (selectedPinpoint) {
      return videos
        .filter((video) => video.pinpoint.includes(selectedPinpoint.id))
        .map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            triggerVideoModal={() => triggerModal(video)}
          />
        ));
    } else {
      return null;
    }
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto flex max-w-screen-lg flex-col rounded-md bg-primary bg-opacity-5 px-8 py-10 ">
                <h3 className="mb-10 text-center text-2xl font-bold text-black sm:text-3xl ">
                  Taman Rimba Bukit Lagong Map Layout
                </h3>
                <div className="flex flex-col gap-4 lg:flex-row">
                  {/* Map */}
                  <div
                    style={{
                      position: "relative",
                    }}
                    className="h-full w-full flex-1 lg:h-1/2 lg:w-1/2"
                  >
                    <NextImage
                      src="/bukit_lagong_map.jpg"
                      alt="map"
                      width="1000"
                      height="1000"
                    />
                    {pinpoints.map((pinpoint) => (
                      <div
                        key={pinpoint.id}
                        style={{
                          position: "absolute",
                          left: `${(pinpoint.x / 1000) * 100}%`,
                          top: `${(pinpoint.y / 1000) * 100}%`,
                          transform: "translate(-50%, -50%)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                        onClick={() => handlePinpointClick(pinpoint)}
                      >
                        <FaMapMarkerAlt size={30} color="red" />
                      </div>
                    ))}
                  </div>
                  {/* Video */}
                  <div className="flex flex-1 flex-col border-4 border-black bg-white p-2">
                    <p className="mb-4 text-lg font-bold text-black underline ">
                      Checkpoint Name:{" "}
                      {selectedPinpoint && selectedPinpoint.title}
                    </p>

                    {selectedPinpoint ? (
                      <>
                        <div className="flex h-full flex-col gap-4 overflow-scroll lg:h-[400px]">
                          {renderVideos()}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedVideo && (
          <ModalVideo
            channel="youtube"
            autoplay={true}
            start={true}
            isOpen={isOpenModal}
            videoId={selectedVideo.videoId}
            onClose={closeModal}
            allowFullScreen={true}
            ratio="9:16"
          />
        )}
      </section>
    </>
  );
};

export default MapPage;
