//TODO: OG image generation currently doesn't work
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function get() {
  const fontData = await fetch(
    new URL("fonts/Inter-ExtraBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Inter",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
        }}
      >
        {/* BACKGROUND SVG */}
        <svg
          fill="none"
          viewBox="0 0 120 120"
          style={{
            top: "50%",
            left: "50%",
            width: "101vw",
            height: "100vw",
            aspectRatio: "1/1",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            opacity: "0.5",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96 0.00402832H24C10.7452 0.00402832 0 10.7492 0 24.004V96.004C0 109.259 10.7452 120.004 24 120.004H96C109.255 120.004 120 109.259 120 96.004V24.004C120 10.7492 109.255 0.00402832 96 0.00402832Z"
            stroke="white"
            strokeOpacity="0.1386"
            strokeWidth="0.25"
          />
          <path
            d="M38.0425 82.6074C25.5685 70.48 25.288 50.5376 37.4151 38.0647C49.5425 25.5907 69.4849 25.3102 81.9578 37.4373C94.4318 49.5647 94.7123 69.5071 82.5852 81.9801C70.6202 94.2876 51.0037 94.7493 38.4726 83.0184"
            stroke="white"
            strokeOpacity="0.1386"
            strokeWidth="0.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.4005 97.6867C2.61083 77.4745 2.14321 44.2376 22.3549 23.4496C42.567 2.65987 75.804 2.1923 96.592 22.404C117.382 42.6161 117.849 75.8531 97.6376 96.6411C77.6961 117.154 45.0023 117.923 24.1174 98.3716"
            stroke="white"
            strokeOpacity="0.1386"
            strokeWidth="0.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44.6614 75.8002C35.9494 67.3302 35.7534 53.4022 44.2232 44.6909C52.6932 35.9789 66.6213 35.7829 75.3326 44.2527C84.0446 52.7227 84.2405 66.6508 75.7708 75.3621C67.4142 83.9579 53.7137 84.2803 44.9618 76.0873"
            stroke="white"
            strokeOpacity="0.1386"
            strokeWidth="0.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.494019 38.004H119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M0.494019 82.004H119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M59.9969 0.494019V119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M81.9969 0.494019V119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M37.9969 0.494019V119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M0.494019 60.004H119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M0.494019 112.454H119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M0.494019 7.50403H119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M112.497 0.494019V119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M7.5 0.494019V119.504"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M0.5 119.454L119.5 0.504028"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
          <path
            d="M119.497 119.454L0.496948 0.504028"
            stroke="white"
            strokeOpacity="0.1292"
            strokeWidth="0.25"
          />
        </svg>
        <div tw="flex flex-col h-full w-full items-center justify-center">
          {/* LOGO SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginBottom: "4rem",
            }}
            viewBox="0 0 272 238"
            height={128}
            width={128}
            fill="none"
          >
            <path
              d="M171.787 155.271C175.434 153.845 175.895 152.292 175.895 151.032C175.895 149.772 175.434 147.678 171.787 146.253C145.06 135.075 91.8039 116.62 52.5035 103.003C26.8957 94.1206 7.21258 87.3012 4.71104 85.8983C-4.68945 80.6468 1.16941 73.4447 11.8338 69.2585C22.3271 65.1398 29.7 63.9995 37.5601 63.9995C42.9186 63.9995 236.195 123.702 252.284 129.711C267.754 135.487 271.664 137.378 271.664 147.266V154.678C271.664 164.543 267.754 165.969 252.284 171.753C236.195 177.762 42.9187 237.472 37.5733 237.472C29.7 237.472 22.3271 236.324 11.8338 232.198C1.16941 228.011 -4.68946 220.809 4.7242 215.558C7.22574 214.162 26.8957 207.343 52.5167 198.46C91.8039 184.844 145.06 166.449 171.8 155.263L171.787 155.271Z"
              fill="white"
            />
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M171.891 123.271C175.538 121.845 175.998 120.292 175.998 119.032C175.998 117.772 175.538 115.678 171.891 114.253C145.164 103.075 91.9074 84.6196 52.607 71.0032C26.9992 62.1206 7.31608 55.3012 4.81454 53.8983C-4.58595 48.6468 1.27292 41.4447 11.9373 37.2585C22.4306 33.1398 29.8035 31.9995 37.6636 31.9995C43.0222 31.9995 236.298 91.7016 252.387 97.7108C267.857 103.487 271.768 105.378 271.768 115.266V122.678C271.768 132.543 267.857 133.969 252.387 139.753C236.298 145.762 43.0222 205.472 37.6768 205.472C29.8036 205.472 22.4306 204.324 11.9373 200.198C1.27292 196.011 -4.58593 188.809 4.82773 183.558C7.32926 182.162 26.9992 175.343 52.6202 166.46C91.9074 152.844 145.164 134.449 171.904 123.263L171.891 123.271Z"
                fill="white"
              />
            </g>
            <g filter="url(#filter1_d_0_1)">
              <path
                className="group-hover:translate-y-8 gorup-hover:opacity-0 duration-500"
                d="M171.995 91.2712C175.642 89.8458 176.102 88.2928 176.102 87.0324C176.102 85.7721 175.642 83.679 171.995 82.2536C145.268 71.0754 92.0114 52.6201 52.711 39.0037C27.1032 30.1212 7.42008 23.3017 4.91855 21.8988C-4.48195 16.6473 1.37692 9.44525 12.0414 5.25905C22.5346 1.14037 29.9075 4.57764e-05 37.7676 4.57764e-05C43.1262 4.57764e-05 236.402 59.7021 252.491 65.7113C267.961 71.488 271.872 73.3785 271.872 83.2664V90.6785C271.872 100.544 267.961 101.969 252.491 107.753C236.402 113.763 43.1262 173.472 37.7808 173.472C29.9076 173.472 22.5346 172.324 12.0414 168.198C1.37692 164.012 -4.48193 156.81 4.93173 151.558C7.43326 150.163 27.1032 143.344 52.7242 134.461C92.0114 120.845 145.268 102.449 172.008 91.2637L171.995 91.2712Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0.103516"
                y="31.9995"
                width="271.664"
                height="200.472"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="27" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_0_1"
                x="0.20752"
                y="6.10352e-05"
                width="271.664"
                height="200.472"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="27" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div tw="flex flex-row font-sans text-7xl text-center text-white w-9/12 flex-wrap justify-center">
            <div>The</div>
            <div style={{ width: "1rem" }}></div>
            <div
              tw="text-white"
              style={{
                textShadow: "0 0 2rem #fff8",
                background: "linear-gradient(90deg, #888fff 0%, #ff88ff 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              most configurable
            </div>
            <div style={{ width: "1rem" }}></div>
            <div>way to create an</div>
          </div>
          <div tw="flex flex-row font-sans text-7xl text-center text-white w-9/12 flex-wrap justify-center">
            <div
              style={{
                background: "linear-gradient(90deg, #f97316 0%, #eab308 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Expo
            </div>
            <div style={{ width: "1rem" }}></div>
            <div>app</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
        },
      ],
    },
  );
}
