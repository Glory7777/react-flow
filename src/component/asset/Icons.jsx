const IconSubNetwork = (props) => {
  return (
    <div
      style={{
        width: 35,
        height: 35,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        display: "inline-flex",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
      >
        <g clipPath="url(#clip0_3_27702)">
          <path
            d="M1.76538 9.28125L18.2403 16.6723"
            stroke="url(#paint0_linear_3_27702)"
            strokeWidth="3"
          />
          <path
            d="M21.6947 18.2196C22.4486 16.6766 21.7568 14.8368 20.1441 14.1109C18.5314 13.3896 16.6086 14.0516 15.85 15.5992C15.0962 17.1422 15.788 18.982 17.4007 19.7078C19.0133 20.4291 20.9361 19.7672 21.6947 18.2241V18.2196Z"
            fill="url(#paint1_linear_3_27702)"
          />
          <path
            d="M1.76538 10.7191L18.2403 3.32812"
            stroke="url(#paint2_linear_3_27702)"
            strokeWidth="3"
          />
          <path
            d="M21.6947 1.78082C22.4486 3.32384 21.7568 5.16361 20.1441 5.88947C18.5314 6.61077 16.6086 5.94425 15.85 4.40122C15.0962 2.8582 15.788 1.01843 17.4007 0.292573C19.0133 -0.428724 20.9361 0.233226 21.6947 1.78082Z"
            fill="url(#paint3_linear_3_27702)"
          />
          <path
            d="M6.15007 8.75152C6.90392 10.2945 6.21209 12.1343 4.59465 12.8556C2.98199 13.5815 1.0592 12.915 0.300575 11.3719C-0.458045 9.8289 0.23855 7.98914 1.85122 7.26328C3.46388 6.54198 5.38667 7.20393 6.14529 8.75152H6.15007Z"
            fill="url(#paint4_linear_3_27702)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_3_27702"
            x1="10.0029"
            y1="9.28125"
            x2="10.0029"
            y2="16.6723"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56A0FF" />
            <stop offset="1" stopColor="#005DD6" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_27702"
            x1="18.7724"
            y1="13.8193"
            x2="18.7724"
            y2="19.9995"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56A0FF" />
            <stop offset="1" stopColor="#005DD6" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3_27702"
            x1="10.0029"
            y1="3.32812"
            x2="10.0029"
            y2="10.7191"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56A0FF" />
            <stop offset="1" stopColor="#005DD6" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3_27702"
            x1="18.7724"
            y1="0.000976562"
            x2="18.7724"
            y2="6.18032"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56A0FF" />
            <stop offset="1" stopColor="#005DD6" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_3_27702"
            x1="3.22424"
            y1="6.97168"
            x2="3.22424"
            y2="13.1493"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#56A0FF" />
            <stop offset="1" stopColor="#005DD6" />
          </linearGradient>
          <clipPath id="clip0_3_27702">
            <rect width="22" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const IconDmz = () => {
  return (
    <div
      style={{
        width: 35,
        height: 35,
        position: "relative",
        background: "rgba(255, 255, 255, 0)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="36"
        viewBox="0 0 35 36"
        fill="none"
      >
        <path
          d="M17.6665 6.06648L17.599 6L17.5316 6.06648C15.29 8.27516 12.1487 9.36103 9 9.02124V17.6048C9 20.8624 10.4469 23.9649 12.9584 26.0849L17.599 30L22.2397 26.0849C24.7512 23.9649 26.1981 20.8624 26.1981 17.6048V9.02124C23.0494 9.36103 19.9081 8.27516 17.6665 6.06648Z"
          stroke="#008903"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
        <path
          d="M14.8551 23.8985C12.9883 22.3177 11.9163 20.0278 11.9163 17.6049V11.8505C13.9629 11.5846 15.8972 10.8607 17.5915 9.73047C19.2933 10.8607 21.2275 11.5846 23.2667 11.8505V17.6049C23.2667 20.0278 22.1946 22.3251 20.3279 23.8985L17.5915 26.2106L14.8551 23.8985Z"
          stroke="#008903"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
        <path
          d="M20.2078 16.0312L17.0741 19.119L14.9824 17.058"
          stroke="#008903"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </svg>
    </div>
  );
};
const IconServer = (props) => {
  let width = props.width ? props.width : 40;
  let height = props.height ? props.height : 40;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      data-name="Layer 2"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <path d="M432,64V80.17a5.34,5.34,0,0,1-10.67,0V64a16,16,0,0,0-16-16H160a5.34,5.34,0,0,1,0-10.67H405.33A26.69,26.69,0,0,1,432,64Zm0,42.44v32.23a26.69,26.69,0,0,1-26.67,26.66h-16V192h16A26.69,26.69,0,0,1,432,218.67v74.66A26.69,26.69,0,0,1,405.33,320h-16v26.67h16A26.69,26.69,0,0,1,432,373.33V448a26.69,26.69,0,0,1-26.67,26.67H106.67A26.69,26.69,0,0,1,80,448V373.33a26.69,26.69,0,0,1,26.67-26.66h16V320h-16A26.69,26.69,0,0,1,80,293.33V266.67a5.34,5.34,0,1,1,10.67,0v26.66a16,16,0,0,0,16,16H405.33a16,16,0,0,0,16-16V218.67a16,16,0,0,0-16-16h-64a5.34,5.34,0,0,1,0-10.67h37.34V165.33H133.33V192H316.07a5.34,5.34,0,1,1,0,10.67H106.67a16,16,0,0,0-16,16v23.18a5.34,5.34,0,1,1-10.67,0V218.67A26.69,26.69,0,0,1,106.67,192h16V165.33h-16A26.69,26.69,0,0,1,80,138.67V64a26.69,26.69,0,0,1,26.67-26.67h27.16a5.34,5.34,0,1,1,0,10.67H106.67a16,16,0,0,0-16,16v74.67a16,16,0,0,0,16,16H405.33a16,16,0,0,0,16-16V106.44a5.34,5.34,0,1,1,10.67,0ZM378.67,320H133.33v26.67h37.34a5.33,5.33,0,1,1,0,10.66h-64a16,16,0,0,0-16,16V448a16,16,0,0,0,16,16H405.33a16,16,0,0,0,16-16V373.33a16,16,0,0,0-16-16H199.86a5.33,5.33,0,0,1,0-10.66H378.67Zm16-202.67a16,16,0,1,1,16-16A16,16,0,0,1,394.67,117.33Zm0-10.66a5.34,5.34,0,1,0-5.34-5.34A5.35,5.35,0,0,0,394.67,106.67Zm-272-43.26a10.67,10.67,0,0,1,10.66,10.66v54.52a10.67,10.67,0,0,1-10.66,10.67H112a10.67,10.67,0,0,1-10.67-10.67V74.07A10.67,10.67,0,0,1,112,63.41Zm0,10.66H112v54.52h10.67ZM144,128.59V74.07a10.67,10.67,0,0,1,10.67-10.66h10.66A10.67,10.67,0,0,1,176,74.07v54.52a10.67,10.67,0,0,1-10.67,10.67H154.67A10.67,10.67,0,0,1,144,128.59Zm10.67,0h10.66V74.07H154.67Zm42.66,10.67a10.67,10.67,0,0,1-10.66-10.67V74.07a10.67,10.67,0,0,1,10.66-10.66H208a10.67,10.67,0,0,1,10.67,10.66v54.52A10.67,10.67,0,0,1,208,139.26Zm0-10.67H208V74.07H197.33ZM394.67,272a16,16,0,1,1,16-16A16,16,0,0,1,394.67,272Zm0-10.67a5.33,5.33,0,1,0-5.34-5.33A5.34,5.34,0,0,0,394.67,261.33ZM112,293.93a10.67,10.67,0,0,1-10.67-10.67V228.74A10.67,10.67,0,0,1,112,218.07h10.67a10.67,10.67,0,0,1,10.66,10.67v54.52a10.67,10.67,0,0,1-10.66,10.67Zm0-10.67h10.67V228.74H112Zm42.67,10.67A10.67,10.67,0,0,1,144,283.26V228.74a10.67,10.67,0,0,1,10.67-10.67h10.66A10.67,10.67,0,0,1,176,228.74v54.52a10.67,10.67,0,0,1-10.67,10.67Zm0-10.67h10.66V228.74H154.67Zm42.66,10.67a10.67,10.67,0,0,1-10.66-10.67V228.74a10.67,10.67,0,0,1,10.66-10.67H208a10.67,10.67,0,0,1,10.67,10.67v54.52A10.67,10.67,0,0,1,208,293.93Zm0-10.67H208V228.74H197.33ZM378.67,410.67a16,16,0,1,1,16,16A16,16,0,0,1,378.67,410.67Zm10.66,0a5.34,5.34,0,1,0,5.34-5.34A5.35,5.35,0,0,0,389.33,410.67Zm-256-27.26v54.52a10.67,10.67,0,0,1-10.66,10.66H112a10.67,10.67,0,0,1-10.67-10.66V383.41A10.67,10.67,0,0,1,112,372.74h10.67A10.67,10.67,0,0,1,133.33,383.41Zm-10.66,0H112v54.52h10.67Zm53.33,0v54.52a10.67,10.67,0,0,1-10.67,10.66H154.67A10.67,10.67,0,0,1,144,437.93V383.41a10.67,10.67,0,0,1,10.67-10.67h10.66A10.67,10.67,0,0,1,176,383.41Zm-10.67,0H154.67v54.52h10.66Zm21.34,54.52V383.41a10.67,10.67,0,0,1,10.66-10.67H208a10.67,10.67,0,0,1,10.67,10.67v54.52A10.67,10.67,0,0,1,208,448.59H197.33A10.67,10.67,0,0,1,186.67,437.93Zm10.66,0H208V383.41H197.33Z" />
    </svg>
  );
};

const IconUbuntuServer = () => {
  return (
    <svg
      id="Capa_1"
      viewBox="0 0 512 512"
      width="40"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m457.21 512.599h-401.821c-30.59 0-55.389-24.799-55.389-55.389v-401.821c0-30.59 24.799-55.389 55.389-55.389h401.82c30.591 0 55.389 24.799 55.389 55.389v401.82c.001 30.591-24.798 55.39-55.388 55.39z" />
        <g>
          <path
            d="m452.001 255.222c0 108.252-87.745 196.005-195.997 196.005-108.251 0-196.005-87.753-196.005-196.005 0-108.245 87.754-195.995 196.005-195.995 108.252 0 195.997 87.749 195.997 195.995z"
            fill="#fff"
          />
          <path d="m154.281 255.222c0 13.918-11.283 25.203-25.211 25.203-13.911 0-25.194-11.285-25.194-25.203 0-13.911 11.283-25.195 25.194-25.195 13.928 0 25.211 11.283 25.211 25.195zm143.369 122.533c6.96 12.044 22.365 16.175 34.419 9.224 12.052-6.96 16.181-22.373 9.222-34.427-6.959-12.052-22.365-16.173-34.417-9.214-12.053 6.959-16.183 22.365-9.224 34.417zm43.641-219.856c6.959-12.054 2.837-27.465-9.222-34.416-12.045-6.959-27.458-2.829-34.419 9.219-6.959 12.053-2.829 27.46 9.224 34.419 12.052 6.96 27.466 2.83 34.417-9.222zm-85.287 25.464c37.55 0 68.361 28.784 71.58 65.499l36.47-.575c-1.731-27.28-13.564-51.815-31.8-69.906-9.653 3.725-20.853 3.218-30.516-2.365-9.669-5.582-15.709-15.033-17.305-25.272-9.063-2.462-18.598-3.779-28.429-3.779-17.246 0-33.547 4.033-48.023 11.206l17.745 31.867c9.197-4.276 19.467-6.675 30.278-6.675zm-71.867 71.859c0-24.307 12.078-45.803 30.557-58.801l-18.724-31.301c-21.689 14.485-37.846 36.579-44.662 62.483 8.066 6.496 13.235 16.453 13.235 27.619 0 11.174-5.169 21.131-13.235 27.627 6.816 25.904 22.973 47.997 44.662 62.491l18.725-31.3c-18.48-13.007-30.558-34.495-30.558-58.818zm71.867 71.874c-10.811 0-21.081-2.398-30.279-6.68l-17.745 31.866c14.476 7.179 30.777 11.207 48.023 11.207 9.831 0 19.366-1.309 28.429-3.775 1.596-10.246 7.636-19.697 17.305-25.27 9.663-5.583 20.862-6.091 30.516-2.366 18.236-18.099 30.068-42.635 31.8-69.915l-36.47-.566c-3.217 36.708-34.029 65.499-71.579 65.499z" />
        </g>
      </g>
    </svg>
  );
};

const IconServerStorage = () => {
  return (
    <svg
      id="_x31__x2C_5"
      height="40"
      width="40"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 6c-1.228 0-12-.084-12-3s10.772-3 12-3 12 .084 12 3-10.772 3-12 3zm-10.412-3c.732.568 4.245 1.5 10.412 1.5s9.68-.932 10.412-1.5c-.732-.568-4.245-1.5-10.412-1.5s-9.68.932-10.412 1.5zm20.939.116h.01z" />
      <path d="m12 12c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z" />
      <path d="m12 18c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z" />
      <path d="m12 24c-1.228 0-12-.084-12-3v-18c0-.414.336-.75.75-.75s.75.336.75.75v17.919c.481.556 4.03 1.581 10.5 1.581s10.019-1.025 10.5-1.581v-17.919c0-.414.336-.75.75-.75s.75.336.75.75v18c0 2.916-10.772 3-12 3z" />
      <circle cx="5" cy="14" r="1" />
      <circle cx="5" cy="8" r="1" />
      <circle cx="5" cy="20" r="1" />
    </svg>
  );
};

const IconNetworkSwitch = (props) => {
  let width = props.width ? props.width : 30;
  let height = props.height ? props.height : 30;

  return (
    <svg
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width={width}
      height={height}
    >
      <path
        d="m123.29 277.668h-3.611v26.132h28.673v-26.132h-3.61a6.388 6.388 0 0 1 -6.388-6.387v-8.171h-8.677v8.171a6.388 6.388 0 0 1 -6.387 6.387zm-10-12.775h3.61v-8.171a6.388 6.388 0 0 1 6.388-6.387h21.452a6.388 6.388 0 0 1 6.387 6.387v8.171h3.611a6.388 6.388 0 0 1 6.388 6.388v38.911a6.388 6.388 0 0 1 -6.388 6.387h-41.447a6.388 6.388 0 0 1 -6.387-6.387v-38.911a6.388 6.388 0 0 1 6.387-6.388zm79.825 12.775h-3.611v26.132h28.674v-26.132h-3.611a6.388 6.388 0 0 1 -6.388-6.387v-8.171h-8.679v8.171a6.388 6.388 0 0 1 -6.388 6.387zm-10-12.775h3.61v-8.171a6.388 6.388 0 0 1 6.388-6.387h21.452a6.388 6.388 0 0 1 6.388 6.387v8.171h3.61a6.388 6.388 0 0 1 6.388 6.388v38.911a6.388 6.388 0 0 1 -6.388 6.387h-41.445a6.388 6.388 0 0 1 -6.388-6.387v-38.911a6.388 6.388 0 0 1 6.388-6.388zm79.824 12.775h-3.611v26.132h28.674v-26.132h-3.611a6.388 6.388 0 0 1 -6.387-6.387v-8.171h-8.674v8.171a6.388 6.388 0 0 1 -6.388 6.387zm-10-12.775h3.611v-8.171a6.388 6.388 0 0 1 6.387-6.387h21.452a6.388 6.388 0 0 1 6.388 6.387v8.171h3.61a6.388 6.388 0 0 1 6.388 6.388v38.911a6.388 6.388 0 0 1 -6.388 6.387h-41.443a6.388 6.388 0 0 1 -6.388-6.387v-38.911a6.388 6.388 0 0 1 6.388-6.388zm79.825 12.775h-3.611v26.132h28.673v-26.132h-3.61a6.388 6.388 0 0 1 -6.388-6.387v-8.171h-8.677v8.171a6.388 6.388 0 0 1 -6.387 6.387zm-10-12.775h3.611v-8.171a6.388 6.388 0 0 1 6.388-6.387h21.452a6.388 6.388 0 0 1 6.387 6.387v8.171h3.611a6.388 6.388 0 0 1 6.387 6.388v38.911a6.388 6.388 0 0 1 -6.387 6.387h-41.443a6.388 6.388 0 0 1 -6.388-6.387v-38.911a6.388 6.388 0 0 1 6.388-6.388zm79.836 12.775h-3.611v26.132h28.674v-26.132h-3.611a6.388 6.388 0 0 1 -6.388-6.387v-8.171h-8.676v8.171a6.388 6.388 0 0 1 -6.388 6.387zm-10-12.775h3.611v-8.171a6.388 6.388 0 0 1 6.388-6.387h21.452a6.387 6.387 0 0 1 6.387 6.387v8.171h3.611a6.388 6.388 0 0 1 6.388 6.388v38.911a6.388 6.388 0 0 1 -6.388 6.387h-41.449a6.388 6.388 0 0 1 -6.387-6.387v-38.911a6.388 6.388 0 0 1 6.387-6.388zm58.757-25.393a1.9 1.9 0 0 1 1.881 1.882v84.154a1.9 1.9 0 0 1 -1.881 1.882h-356.31a1.9 1.9 0 0 1 -1.881-1.882v-84.156a1.9 1.9 0 0 1 1.881-1.882zm-356.31-12.777h356.31a14.684 14.684 0 0 1 14.657 14.657v84.154a14.684 14.684 0 0 1 -14.657 14.657h-356.31a14.684 14.684 0 0 1 -14.657-14.657v-84.154a14.684 14.684 0 0 1 14.657-14.657zm388.164-15.523v143.7h-454.422v-143.7zm-3.091-12.776-16.779-41.324h-414.682l-16.779 41.328zm-463.507 3.687 21.84-53.793a6.382 6.382 0 0 1 5.913-3.987v-.006h423.268a6.389 6.389 0 0 1 6.037 4.3l21.716 53.488a6.37 6.37 0 0 1 .6 2.705v156.469a6.388 6.388 0 0 1 -6.388 6.388h-467.199a6.388 6.388 0 0 1 -6.388-6.388v-156.471a6.37 6.37 0 0 1 .6-2.705zm38.844 126.537a9.125 9.125 0 1 0 -9.125-9.125 9.119 9.119 0 0 0 9.125 9.125zm0-34.773a9.125 9.125 0 1 0 -9.125-9.125 9.119 9.119 0 0 0 9.125 9.125z"
        fillRule="evenodd"
      />
    </svg>
  );
};

const IconNetworkSwitch2 = (props) => {
  let width = props.width ? props.width : 30;
  let height = props.height ? props.height : 30;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_3"
      data-name="Layer 3"
      viewBox="0 0 64 64"
      width={width}
      height={height}
    >
      <path d="M60,33H59V4a3,3,0,0,0-6,0V33H11V4A3,3,0,0,0,5,4V33H4a3,3,0,0,0-3,3V54a3,3,0,0,0,3,3H5.279l1.772,5.316A1,1,0,0,0,8,63h4a1,1,0,0,0,.949-.684L14.721,57H49.279l1.772,5.316A1,1,0,0,0,52,63h4a1,1,0,0,0,.949-.684L58.721,57H60a3,3,0,0,0,3-3V36A3,3,0,0,0,60,33ZM57,11H55V9h2ZM56,3a1,1,0,0,1,1,1V7H55V4A1,1,0,0,1,56,3ZM55,13h2V33H55ZM9,11H7V9H9ZM8,3A1,1,0,0,1,9,4V7H7V4A1,1,0,0,1,8,3ZM7,13H9V33H7Zm4.279,48H8.721L7.388,57h5.224Zm44,0H52.721l-1.333-4h5.224ZM61,54a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V36a1,1,0,0,1,1-1H60a1,1,0,0,1,1,1Z" />
      <path d="M58,37H6a1,1,0,0,0-1,1V52a1,1,0,0,0,1,1H58a1,1,0,0,0,1-1V38A1,1,0,0,0,58,37ZM57,51H7V39H57Z" />
      <path d="M10,49h8a1,1,0,0,0,1-1V44a1,1,0,0,0-1-1H17V42a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1v1H10a1,1,0,0,0-1,1v4A1,1,0,0,0,10,49Zm1-4h1a1,1,0,0,0,1-1V43h2v1a1,1,0,0,0,1,1h1v2H11Z" />
      <path d="M22,49h8a1,1,0,0,0,1-1V44a1,1,0,0,0-1-1H29V42a1,1,0,0,0-1-1H24a1,1,0,0,0-1,1v1H22a1,1,0,0,0-1,1v4A1,1,0,0,0,22,49Zm1-4h1a1,1,0,0,0,1-1V43h2v1a1,1,0,0,0,1,1h1v2H23Z" />
      <path d="M34,49h8a1,1,0,0,0,1-1V44a1,1,0,0,0-1-1H41V42a1,1,0,0,0-1-1H36a1,1,0,0,0-1,1v1H34a1,1,0,0,0-1,1v4A1,1,0,0,0,34,49Zm1-4h1a1,1,0,0,0,1-1V43h2v1a1,1,0,0,0,1,1h1v2H35Z" />
      <path d="M46,49h8a1,1,0,0,0,1-1V44a1,1,0,0,0-1-1H53V42a1,1,0,0,0-1-1H48a1,1,0,0,0-1,1v1H46a1,1,0,0,0-1,1v4A1,1,0,0,0,46,49Zm1-4h1a1,1,0,0,0,1-1V43h2v1a1,1,0,0,0,1,1h1v2H47Z" />
      <path d="M45,18A13,13,0,1,0,32,31,13.015,13.015,0,0,0,45,18ZM21,18A11,11,0,1,1,32,29,11.013,11.013,0,0,1,21,18Z" />
      <path d="M35,24a2.951,2.951,0,0,0-.3-1.285L36.715,20.7A2.951,2.951,0,0,0,38,21a3,3,0,0,0,0-6,2.951,2.951,0,0,0-1.285.3L34.7,13.285A2.951,2.951,0,0,0,35,12a3,3,0,0,0-6,0,2.951,2.951,0,0,0,.3,1.285L27.285,15.3A2.951,2.951,0,0,0,26,15a3,3,0,0,0,0,6,2.951,2.951,0,0,0,1.285-.3L29.3,22.715A2.951,2.951,0,0,0,29,24a3,3,0,0,0,6,0Zm-4.285-2.7L28.7,19.285a2.893,2.893,0,0,0,0-2.57L30.715,14.7a2.893,2.893,0,0,0,2.57,0L35.3,16.715a2.893,2.893,0,0,0,0,2.57L33.285,21.3a2.893,2.893,0,0,0-2.57,0ZM39,18a1,1,0,1,1-1-1A1,1,0,0,1,39,18Zm-7-7a1,1,0,1,1-1,1A1,1,0,0,1,32,11Zm-7,7a1,1,0,1,1,1,1A1,1,0,0,1,25,18Zm6,6a1,1,0,1,1,1,1A1,1,0,0,1,31,24Z" />
    </svg>
  );
};

const IconDesktopPc = (props) => {
  let width = props.width ? props.width : 40;
  let height = props.height ? props.height : 40;

  return (
    <svg
      id="Icons"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="rgb(0,0,0)">
        <path d="m90 283.94h79.75v9a7.06 7.06 0 0 1 -2.5 5.4l-15.76 11.66-.27.21c-4.15 3.42-3.25 8.54-2.83 12.76a11.59 11.59 0 0 0 11.61 11.45h95.7a11.61 11.61 0 0 0 11.57-11.42c.42-4.22 1.32-9.34-2.83-12.76l-.27-.21-15.79-11.66a7.06 7.06 0 0 1 -2.5-5.4v-9h81.92a22.2 22.2 0 0 0 22.2-22.2v-167a22.21 22.21 0 0 0 -22.2-22.19h-237.8a22.2 22.2 0 0 0 -22.15 22.18v167a22.2 22.2 0 0 0 22.15 22.18zm149 26.13.27.21 12.38 9.14h-87.65l12.37-9.14.28-.21a22 22 0 0 0 8.14-17.13v-9h46.11v9a22 22 0 0 0 8.1 17.13zm88.77-41.13h-237.77a7.18 7.18 0 0 1 -7.17-7.17v-14.06h252.17v14.06a7.18 7.18 0 0 1 -7.2 7.17zm-244.92-174.18a7.18 7.18 0 0 1 7.15-7.18h237.8a7.19 7.19 0 0 1 7.2 7.18v138h-252.15z" />
        <path d="m480 118.39a7.51 7.51 0 0 0 -5.29-7.17v-14a24.68 24.68 0 0 0 -24.65-24.65h-55.62a24.68 24.68 0 0 0 -24.65 24.65v14a7.52 7.52 0 0 0 0 14.34v24.37a7.52 7.52 0 0 0 0 14.34v24.36a7.52 7.52 0 0 0 0 14.34v114.16a7.5 7.5 0 0 0 7.5 7.5h89.91a7.5 7.5 0 0 0 7.5-7.5v-114.13a7.52 7.52 0 0 0 0-14.34v-24.39a7.52 7.52 0 0 0 0-14.34v-24.37a7.5 7.5 0 0 0 5.3-7.17zm-85.56-30.81h55.61a9.66 9.66 0 0 1 9.65 9.65v13.66h-74.91v-13.66a9.66 9.66 0 0 1 9.65-9.65zm27.81 192.6c-16.34 0-30.25 6.46-37.46 16.19v-93.07h74.91v93.07c-7.21-9.73-21.12-16.19-37.45-16.19zm27.45 29.45h-54.91c1.9-7.91 13.91-14.45 27.46-14.45s25.55 6.54 27.45 14.45zm-64.91-121.33v-23.7h74.91v23.7zm0-38.7v-23.71h74.91v23.71z" />
        <path d="m337.38 342.4h-243.54a7.5 7.5 0 0 0 -7.39 6.19l-13.53 76.53a7.55 7.55 0 0 0 7.39 8.8h270.6a7.55 7.55 0 0 0 7.39-8.8l-13.53-76.53a7.51 7.51 0 0 0 -7.39-6.19zm-248.13 76.52 10.88-61.52h231l10.87 61.52z" />
        <path d="m114.84 375.11h15.22c9.93-.34 9.93-14.66 0-15h-15.22c-9.92.34-9.93 14.66 0 15z" />
        <path d="m151.37 375.11h15.22c9.93-.34 9.93-14.66 0-15h-15.22c-9.92.34-9.93 14.66 0 15z" />
        <path d="m187.9 375.11h15.22c9.93-.34 9.93-14.66 0-15h-15.22c-9.9.34-9.9 14.66 0 15z" />
        <path d="m224.43 375.11h15.22c9.92-.34 9.93-14.66 0-15h-15.22c-9.92.34-9.93 14.66 0 15z" />
        <path d="m261 375.11h15.22c9.92-.34 9.93-14.66 0-15h-15.22c-10 .34-10 14.66 0 15z" />
        <path d="m312.71 360.11h-15.22c-9.92.34-9.93 14.66 0 15h15.22c9.92-.34 9.93-14.66 0-15z" />
        <path d="m130.06 399.37h-15.22c-9.92.34-9.93 14.66 0 15h15.22c9.94-.37 9.94-14.65 0-15z" />
        <path d="m276.18 399.37h-124.81a7.5 7.5 0 0 0 0 15h124.81c9.9-.37 9.95-14.65 0-15z" />
        <path d="m312.71 399.37h-15.22c-9.92.34-9.93 14.66 0 15h15.22c9.92-.37 9.93-14.65 0-15z" />
        <path d="m133.11 379.05c-9.93.34-9.93 14.65 0 15h15.22c9.92-.34 9.93-14.66 0-15z" />
        <path d="m169.64 379.05c-9.93.34-9.93 14.65 0 15h15.22c9.92-.34 9.93-14.66 0-15z" />
        <path d="m206.17 379.05c-9.93.34-9.93 14.65 0 15h15.22c9.92-.34 9.93-14.66 0-15z" />
        <path d="m242.7 379.05c-9.93.34-9.93 14.65 0 15h15.22c9.92-.34 9.92-14.66 0-15z" />
        <path d="m271.72 386.55a7.5 7.5 0 0 0 7.5 7.5h15.22c9.93-.34 9.93-14.66 0-15h-15.22a7.5 7.5 0 0 0 -7.5 7.5z" />
        <path d="m454.33 364.07c-.19-12.18-12-21.67-27.05-21.67h-10.07c-15 0-26.86 9.49-27 21.67l-2.72 37.31c-.38 13.53 12.62 24.11 29.21 24.13h11.19c16.39 0 29.23-10.36 29.23-23.59 0-.18 0-.36 0-.54zm-26.49 46.44h-11.19c-8.25 0-14-4.38-14.23-8.38l2.71-37.21c-.2-3.41 3.68-6.48 9.62-7.36v13.36a7.5 7.5 0 1 0 15 0v-13.36c5.62.74 9.59 3.93 9.59 6.81a5.06 5.06 0 0 0 0 .55l2.71 37.21c-.18 4-5.96 8.38-14.21 8.38z" />
      </g>
    </svg>
  );
};

// <svg clipRule="evenodd" fillRule="evenodd" height="512" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 43.3492 43.3492" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_x0020_1"><g id="_216511152"><path id="_216511416" d="m.9464 13.1428h41.4564v-7.1121h-41.4564v7.1121zm41.9295.9464h-42.4026c-.2613 0-.4734-.2119-.4734-.4731v-8.0587c0-.2622.212-.4732.4732-.4732l42.4028-.0001c.2613 0 .4732.2111.4732.4734l.0002 8.0585c0 .2612-.2122.4733-.4734.4732z"/><path id="_216511176" d="m8.7575 14.0892c-.2611 0-.4732-.2119-.4732-.4731l.0001-8.0587c0-.2622.2119-.4732.4731-.4732.2624-.0001.4732.211.4732.4733l.0002 8.0585c0 .2612-.2112.4733-.4734.4732z"/><path id="_216511848" d="m21.6747 14.0892c-.2613 0-.4735-.2119-.4735-.4731l.0001-8.0587c0-.2622.2119-.4732.4732-.4732.2613-.0001.4732.211.4732.4733l.0002 8.0585c0 .2612-.2121.4733-.4732.4732z"/><path id="_216511752" d="m34.5906 14.0892c-.2613 0-.4733-.2119-.4733-.4731l.0001-8.0587c0-.2622.2119-.4732.4731-.4732.2623-.0001.4732.211.4732.4733l.0002 8.0585c0 .2612-.2111.4733-.4733.4732z"/><path id="_216511344" d="m.4733 22.1478c-.2613 0-.4734-.2119-.4734-.4732v-8.0586c0-.2613.212-.4732.4732-.4732.2613 0 .4733.212.4733.4733v8.0585c0 .2612-.212.4733-.4731.4732zm42.4026 0c-.2611 0-.4732-.2119-.4732-.4732l.0001-8.0586c0-.2613.2118-.4732.4731-.4732s.4732.212.4732.4733l.0002 8.0585c0 .2612-.2122.4733-.4734.4732z"/><path id="_216511536" d="m12.2219 22.1478c-.2613 0-.4732-.2119-.4732-.4732l.0001-8.0586c0-.2613.2118-.4732.473-.4732.2623 0 .4733.212.4733.4733l.0002 8.0585c0 .2612-.2112.4733-.4734.4732z"/><path id="_216511920" d="m31.1261 22.1478c-.261 0-.4732-.2119-.4732-.4732l.0001-8.0586c0-.2613.2119-.4732.4731-.4732.2625 0 .4733.212.4733.4733l.0001 8.0585c0 .2612-.2111.4733-.4734.4732z"/><path id="_216510984" d="m.4733 30.2064c-.2613 0-.4734-.2119-.4734-.4732v-8.0586c0-.2613.212-.4732.4732-.4732h20.0313c.2613 0 .4731.212.4731.4732s-.212.4733-.4732.4733l-19.5579-.0001v7.5853c0 .2613-.212.4733-.4731.4733zm42.4026 0c-.2611 0-.4732-.2119-.4732-.4732l.0001-7.5854h-18.446c-.2622 0-.4732-.2119-.4732-.4732.0001-.2613.211-.4732.4732-.4732h18.9191c.2613 0 .4732.212.4732.4732l.0002 8.0585c0 .2613-.2122.4733-.4734.4733z"/><path id="_216511128" d="m5.6895 30.2064c-.2611 0-.4733-.2119-.4733-.4732l.0001-8.0586c0-.2613.2119-.4732.4731-.4732.2614 0 .4733.212.4733.4732l.0002 8.0585c0 .2613-.2122.4733-.4734.4733z"/><path id="_216510936" d="m37.6597 30.2064c-.2613 0-.4734-.2119-.4734-.4732v-8.0586c0-.2613.212-.4732.4733-.4732.2614 0 .4732.212.4732.4732l.0001 8.0585c0 .2613-.2121.4733-.4732.4733z"/><path id="_216510960" d="m42.8759 38.265h-42.4026c-.2613 0-.4734-.2119-.4734-.4732v-8.0587c0-.2612.212-.4731.4732-.4731h13.8724c.2613 0 .4732.212.4732.4732.0001.2612-.212.4732-.4732.4732h-13.3991v7.1121h41.4564v-7.1121h-13.4208c-.2613 0-.4734-.2119-.4734-.4732s.212-.4732.4732-.4732h13.8941c.2613 0 .4732.212.4732.4732l.0002 8.0585c0 .2613-.2122.4733-.4734.4733z"/><path id="_216511032" d="m15.2367 27.9585c-1.0636 3.3826-.4693 6.1422 1.7233 7.8507 2.532 1.9737 6.7149 2.0122 9.3255.0877 2.246-1.6572 2.8955-4.3497 1.8623-7.6356-1.4453 1.2776-2.5722.4289-2.585.419-.142-.1105-.209-.2908-.1725-.4673.5048-2.4894-.2189-4.7106-2.1532-6.6014-.7601-.7435-1.5695-1.2906-2.1787-1.6475.2949 1.4345-.1726 2.5732-1.4119 3.4605-1.802 1.2904-1.4669 5.4046-1.4639 5.446.0137.1587-.0533.3145-.1785.4131-.1252.0985-.2919.1281-.4427.0769-1.2313-.4112-1.9313-.9248-2.3247-1.4021zm6.436 10.3065c-.0257 0-.0504 0-.0751 0-1.9708-.0149-3.8242-.6221-5.2193-1.7085-1.2824-1.0007-2.1304-2.378-2.4508-3.9849-.3598-1.8062-.071-3.8745.8596-6.147.0958-.2346.3638-.3687.6014-.2839.2358.0837.3688.3194.3007.559-.0057.0837-.0098.835 1.5192 1.5123-.0156-1.3862.1666-4.325 1.887-5.5574 1.1812-.845 1.399-1.8771.7286-3.4506-.0749-.1765-.0355-.3815.0995-.5186.1352-.136.3402-.1774.5177-.1035.0741.0306 1.8268.767 3.4348 2.3306 2.0646 2.0072 2.928 4.4562 2.511 7.1033.3027.0443.8607-.0483 1.5863-.9415.1065-.1311.275-.1962.4427-.1686.1667.0276.3066.141.3667.2997 1.5105 3.9859.8055 7.4316-1.9353 9.4526-1.4068 1.0381-3.2425 1.607-5.1747 1.607z"/><path id="_216510576" d="m23.7144 38.0343c-.1824 0-.357-.1074-.4339-.2849-.1045-.2406.0059-.5186.2455-.6231.8627-.3747 1.4404-.9789 1.6257-1.7006.2317-.9031-.1341-2.0122-1.0588-3.2061-1.327-1.7333-1.8288-2.9724-1.9954-3.7828-2.4833 2.5159-1.5025 5.2942-1.4562 5.4203.0583.1578.0296.3343-.0769.4644-.1064.1301-.2731.1942-.4377.1686-.7008-.1076-1.4266-.5097-1.9166-.8321-.2986 1.6227.2396 2.8374 1.5528 3.4575.2357.1124.3372.3943.2247.6309-.1112.2357-.3933.3372-.6299.2248-.9138-.4318-2.9271-1.8071-1.8919-5.2458.0455-.1519.1646-.2702.3165-.3165.1509-.0454.3164-.0128.4377.0887.0089.0069.626.5127 1.327.8282-.0639-.4112-.1045-.9465-.0483-1.5567.1173-1.2669.6901-3.1164 2.7496-4.7293.1735-.1371.4269-.1528.5974-.0138.1697.137.2307.353.14.5491-.0264.1182-.2238 1.3507 1.8574 4.0668 1.401 1.81 1.4394 3.1854 1.2255 4.0194-.2591 1.0104-1.0283 1.8397-2.166 2.3336-.0611.0265-.1252.0384-.1882.0394z"/><path id="_216510840" d="m9.7553 38.265c-.2622 0-.4733-.2119-.4733-.4732l.0001-8.0587c0-.2612.2109-.4731.4731-.4731.2614 0 .4732.212.4732.4732l.0002 8.0585c0 .2613-.2121.4733-.4733.4733z"/><path id="_216510432" d="m33.5939 38.265c-.2613 0-.4733-.2119-.4733-.4732v-8.0587c0-.2612.2119-.4731.4732-.4731.2623 0 .4732.212.4732.4732l.0001 8.0585c0 .2613-.211.4733-.4732.4733z"/></g></g></svg>

const IconFirewall = (props) => {
  let width = props.width ? props.width : 40;
  let height = props.height ? props.height : 40;

  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 43.3492 43.3492"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_x0020_1">
        <g id="_216511152">
          <path
            id="_216511416"
            d="m.9464 13.1428h41.4564v-7.1121h-41.4564v7.1121zm41.9295.9464h-42.4026c-.2613 0-.4734-.2119-.4734-.4731v-8.0587c0-.2622.212-.4732.4732-.4732l42.4028-.0001c.2613 0 .4732.2111.4732.4734l.0002 8.0585c0 .2612-.2122.4733-.4734.4732z"
          />
          <path
            id="_216511176"
            d="m8.7575 14.0892c-.2611 0-.4732-.2119-.4732-.4731l.0001-8.0587c0-.2622.2119-.4732.4731-.4732.2624-.0001.4732.211.4732.4733l.0002 8.0585c0 .2612-.2112.4733-.4734.4732z"
          />
          <path
            id="_216511848"
            d="m21.6747 14.0892c-.2613 0-.4735-.2119-.4735-.4731l.0001-8.0587c0-.2622.2119-.4732.4732-.4732.2613-.0001.4732.211.4732.4733l.0002 8.0585c0 .2612-.2121.4733-.4732.4732z"
          />
          <path
            id="_216511752"
            d="m34.5906 14.0892c-.2613 0-.4733-.2119-.4733-.4731l.0001-8.0587c0-.2622.2119-.4732.4731-.4732.2623-.0001.4732.211.4732.4733l.0002 8.0585c0 .2612-.2111.4733-.4733.4732z"
          />
          <path
            id="_216511344"
            d="m.4733 22.1478c-.2613 0-.4734-.2119-.4734-.4732v-8.0586c0-.2613.212-.4732.4732-.4732.2613 0 .4733.212.4733.4733v8.0585c0 .2612-.212.4733-.4731.4732zm42.4026 0c-.2611 0-.4732-.2119-.4732-.4732l.0001-8.0586c0-.2613.2118-.4732.4731-.4732s.4732.212.4732.4733l.0002 8.0585c0 .2612-.2122.4733-.4734.4732z"
          />
          <path
            id="_216511536"
            d="m12.2219 22.1478c-.2613 0-.4732-.2119-.4732-.4732l.0001-8.0586c0-.2613.2118-.4732.473-.4732.2623 0 .4733.212.4733.4733l.0002 8.0585c0 .2612-.2112.4733-.4734.4732z"
          />
          <path
            id="_216511920"
            d="m31.1261 22.1478c-.261 0-.4732-.2119-.4732-.4732l.0001-8.0586c0-.2613.2119-.4732.4731-.4732.2625 0 .4733.212.4733.4733l.0001 8.0585c0 .2612-.2111.4733-.4734.4732z"
          />
          <path
            id="_216510984"
            d="m.4733 30.2064c-.2613 0-.4734-.2119-.4734-.4732v-8.0586c0-.2613.212-.4732.4732-.4732h20.0313c.2613 0 .4731.212.4731.4732s-.212.4733-.4732.4733l-19.5579-.0001v7.5853c0 .2613-.212.4733-.4731.4733zm42.4026 0c-.2611 0-.4732-.2119-.4732-.4732l.0001-7.5854h-18.446c-.2622 0-.4732-.2119-.4732-.4732.0001-.2613.211-.4732.4732-.4732h18.9191c.2613 0 .4732.212.4732.4732l.0002 8.0585c0 .2613-.2122.4733-.4734.4733z"
          />
          <path
            id="_216511128"
            d="m5.6895 30.2064c-.2611 0-.4733-.2119-.4733-.4732l.0001-8.0586c0-.2613.2119-.4732.4731-.4732.2614 0 .4733.212.4733.4732l.0002 8.0585c0 .2613-.2122.4733-.4734.4733z"
          />
          <path
            id="_216510936"
            d="m37.6597 30.2064c-.2613 0-.4734-.2119-.4734-.4732v-8.0586c0-.2613.212-.4732.4733-.4732.2614 0 .4732.212.4732.4732l.0001 8.0585c0 .2613-.2121.4733-.4732.4733z"
          />
          <path
            id="_216510960"
            d="m42.8759 38.265h-42.4026c-.2613 0-.4734-.2119-.4734-.4732v-8.0587c0-.2612.212-.4731.4732-.4731h13.8724c.2613 0 .4732.212.4732.4732.0001.2612-.212.4732-.4732.4732h-13.3991v7.1121h41.4564v-7.1121h-13.4208c-.2613 0-.4734-.2119-.4734-.4732s.212-.4732.4732-.4732h13.8941c.2613 0 .4732.212.4732.4732l.0002 8.0585c0 .2613-.2122.4733-.4734.4733z"
          />
          <path
            id="_216511032"
            d="m15.2367 27.9585c-1.0636 3.3826-.4693 6.1422 1.7233 7.8507 2.532 1.9737 6.7149 2.0122 9.3255.0877 2.246-1.6572 2.8955-4.3497 1.8623-7.6356-1.4453 1.2776-2.5722.4289-2.585.419-.142-.1105-.209-.2908-.1725-.4673.5048-2.4894-.2189-4.7106-2.1532-6.6014-.7601-.7435-1.5695-1.2906-2.1787-1.6475.2949 1.4345-.1726 2.5732-1.4119 3.4605-1.802 1.2904-1.4669 5.4046-1.4639 5.446.0137.1587-.0533.3145-.1785.4131-.1252.0985-.2919.1281-.4427.0769-1.2313-.4112-1.9313-.9248-2.3247-1.4021zm6.436 10.3065c-.0257 0-.0504 0-.0751 0-1.9708-.0149-3.8242-.6221-5.2193-1.7085-1.2824-1.0007-2.1304-2.378-2.4508-3.9849-.3598-1.8062-.071-3.8745.8596-6.147.0958-.2346.3638-.3687.6014-.2839.2358.0837.3688.3194.3007.559-.0057.0837-.0098.835 1.5192 1.5123-.0156-1.3862.1666-4.325 1.887-5.5574 1.1812-.845 1.399-1.8771.7286-3.4506-.0749-.1765-.0355-.3815.0995-.5186.1352-.136.3402-.1774.5177-.1035.0741.0306 1.8268.767 3.4348 2.3306 2.0646 2.0072 2.928 4.4562 2.511 7.1033.3027.0443.8607-.0483 1.5863-.9415.1065-.1311.275-.1962.4427-.1686.1667.0276.3066.141.3667.2997 1.5105 3.9859.8055 7.4316-1.9353 9.4526-1.4068 1.0381-3.2425 1.607-5.1747 1.607z"
          />
          <path
            id="_216510576"
            d="m23.7144 38.0343c-.1824 0-.357-.1074-.4339-.2849-.1045-.2406.0059-.5186.2455-.6231.8627-.3747 1.4404-.9789 1.6257-1.7006.2317-.9031-.1341-2.0122-1.0588-3.2061-1.327-1.7333-1.8288-2.9724-1.9954-3.7828-2.4833 2.5159-1.5025 5.2942-1.4562 5.4203.0583.1578.0296.3343-.0769.4644-.1064.1301-.2731.1942-.4377.1686-.7008-.1076-1.4266-.5097-1.9166-.8321-.2986 1.6227.2396 2.8374 1.5528 3.4575.2357.1124.3372.3943.2247.6309-.1112.2357-.3933.3372-.6299.2248-.9138-.4318-2.9271-1.8071-1.8919-5.2458.0455-.1519.1646-.2702.3165-.3165.1509-.0454.3164-.0128.4377.0887.0089.0069.626.5127 1.327.8282-.0639-.4112-.1045-.9465-.0483-1.5567.1173-1.2669.6901-3.1164 2.7496-4.7293.1735-.1371.4269-.1528.5974-.0138.1697.137.2307.353.14.5491-.0264.1182-.2238 1.3507 1.8574 4.0668 1.401 1.81 1.4394 3.1854 1.2255 4.0194-.2591 1.0104-1.0283 1.8397-2.166 2.3336-.0611.0265-.1252.0384-.1882.0394z"
          />
          <path
            id="_216510840"
            d="m9.7553 38.265c-.2622 0-.4733-.2119-.4733-.4732l.0001-8.0587c0-.2612.2109-.4731.4731-.4731.2614 0 .4732.212.4732.4732l.0002 8.0585c0 .2613-.2121.4733-.4733.4733z"
          />
          <path
            id="_216510432"
            d="m33.5939 38.265c-.2613 0-.4733-.2119-.4733-.4732v-8.0587c0-.2612.2119-.4731.4732-.4731.2623 0 .4732.212.4732.4732l.0001 8.0585c0 .2613-.211.4733-.4732.4733z"
          />
        </g>
      </g>
    </svg>
  );
};

const IconAddCircle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9 15H11V11H15V9H11V5H9V9H5V11H9V15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
        fill="#CCCCCC"
      />
    </svg>
  );
};

const IconCancelCircle = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.96841 11.919L8 8.88743L11.0316 11.919L11.919 11.0316L8.88743 8L11.919 4.96841L11.0316 4.08098L8 7.11257L4.96841 4.08098L4.08098 4.96841L7.11257 8L4.08098 11.0316L4.96841 11.919ZM8.00141 16C6.89494 16 5.85491 15.79 4.88132 15.3701C3.90772 14.9502 3.06082 14.3803 2.34064 13.6604C1.62044 12.9405 1.05028 12.094 0.63017 11.1208C0.210057 10.1477 0 9.10788 0 8.00141C0 6.89494 0.209966 5.85491 0.629896 4.88132C1.04983 3.90772 1.61972 3.06082 2.33958 2.34064C3.05946 1.62044 3.90598 1.05028 4.87915 0.630171C5.8523 0.210058 6.89212 0 7.99859 0C9.10506 0 10.1451 0.209966 11.1187 0.629897C12.0923 1.04983 12.9392 1.61972 13.6594 2.33959C14.3796 3.05946 14.9497 3.90598 15.3698 4.87915C15.7899 5.8523 16 6.89212 16 7.99859C16 9.10506 15.79 10.1451 15.3701 11.1187C14.9502 12.0923 14.3803 12.9392 13.6604 13.6594C12.9405 14.3796 12.094 14.9497 11.1208 15.3698C10.1477 15.7899 9.10788 16 8.00141 16ZM8 14.7369C9.88071 14.7369 11.4737 14.0842 12.779 12.779C14.0842 11.4737 14.7369 9.88071 14.7369 8C14.7369 6.11929 14.0842 4.52631 12.779 3.22104C11.4737 1.91577 9.88071 1.26314 8 1.26314C6.11929 1.26314 4.52631 1.91577 3.22104 3.22104C1.91577 4.52631 1.26314 6.11929 1.26314 8C1.26314 9.88071 1.91577 11.4737 3.22104 12.779C4.52631 14.0842 6.11929 14.7369 8 14.7369Z"
        fill="#808080"
      />
    </svg>
  );
};

export {
  IconAddCircle,
  IconDmz,
  IconSubNetwork,
  IconServer,
  IconUbuntuServer,
  IconServerStorage,
  IconCancelCircle,
  IconNetworkSwitch,
  IconNetworkSwitch2,
  IconDesktopPc,
  IconFirewall,
};