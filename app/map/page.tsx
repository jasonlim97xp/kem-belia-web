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
                  <div className="flex flex-1 flex-col border-4 border-black p-2">
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
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default MapPage;
