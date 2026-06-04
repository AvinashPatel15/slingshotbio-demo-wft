export function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <circle cx="8.75" cy="8.75" r="5.65" />
      <path d="m13 13 4 4" />
    </svg>
  );
}

export function CartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <path d="M2.7 3.4h2.2l1.4 8.3h7.9l1.6-5.5H6.1" />
      <circle cx="7.6" cy="16.2" r="1.1" />
      <circle cx="14" cy="16.2" r="1.1" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="header-utility-icon">
      <circle cx="10" cy="10" r="7.2" />
      <path d="M2.8 10h14.4" />
      <path d="M10 2.8c2 1.95 3.08 4.35 3.08 7.2S12 15.25 10 17.2C8 15.25 6.92 12.85 6.92 10S8 4.75 10 2.8Z" />
    </svg>
  );
}

export function LanguageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="header-utility-icon">
      <path d="M3.25 5.05h8.1" />
      <path d="M7.3 3.2v1.85" />
      <path d="M5 5.05c.35 2.7 2.05 4.95 5.35 6.65" />
      <path d="M10.8 5.05c-.28 2.35-1.58 4.35-4.1 6" />
      <path d="M11.95 16.8l3.4-8.4 3.4 8.4" />
      <path d="M13 14.25h4.7" />
    </svg>
  );
}

export function CompactChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="header-chevron-icon">
      <path d="m3 4.5 3 3 3-3" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <path d="M3.5 6.25h13" />
      <path d="M3.5 10h13" />
      <path d="M3.5 13.75h13" />
    </svg>
  );
}

export function ProductStepIcon({ iconSrc, title }: { iconSrc: string; title: string }) {
  return (
    <img
      className="product-step-icon"
      src={iconSrc}
      alt=""
      aria-hidden="true"
      width={60}
      height={60}
      title={title}
    />
  );
}

export function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon-svg">
      <path d="M5 10h9" />
      <path d="m10.5 5 4.5 5-4.5 5" />
    </svg>
  );
}

export function TelephoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7967 10.7552L13.4172 11.1325C13.4172 11.1325 12.515 12.0296 10.0525 9.58102C7.59002 7.13252 8.49217 6.23549 8.49217 6.23549L8.73117 5.99783C9.32 5.41238 9.3755 4.47244 8.86175 3.78625L7.81097 2.38258C7.17515 1.53328 5.94655 1.42109 5.21779 2.14571L3.90979 3.44628C3.54844 3.80558 3.30629 4.27134 3.33566 4.78803C3.41078 6.10987 4.00884 8.95393 7.34605 12.2722C10.885 15.791 14.2056 15.9308 15.5635 15.8043C15.993 15.7643 16.3665 15.5455 16.6675 15.2462L17.8513 14.0692C18.6504 13.2746 18.4251 11.9124 17.4027 11.3567L15.8106 10.4912C15.1392 10.1263 14.3214 10.2334 13.7967 10.7552Z" fill="currentColor" />
    </svg>
  );
}

export function CheckmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ContactSalesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00024 16.4999C13.1423 16.4999 16.5002 13.142 16.5002 8.99988C16.5002 4.85774 13.1423 1.49988 9.00024 1.49988C4.85811 1.49988 1.50024 4.85774 1.50024 8.99988C1.50024 10.1997 1.78196 11.3336 2.28284 12.3393C2.41595 12.6065 2.46025 12.912 2.38308 13.2003L1.93638 14.8699C1.74246 15.5946 2.4055 16.2576 3.13026 16.0638L4.79979 15.6171C5.08819 15.5399 5.39365 15.5842 5.66089 15.7173C6.66652 16.2182 7.80047 16.4999 9.00024 16.4999Z" stroke="#E8610A" strokeWidth="1.35" />
      <path d="M6.00024 7.875H12.0002" stroke="#E8610A" strokeWidth="1.125" strokeLinecap="round" />
      <path d="M6.00024 10.4999H10.1252" stroke="#E8610A" strokeWidth="1.125" strokeLinecap="round" />
    </svg>
  );
}

export function HeadquartersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 4.5C7.34314 4.5 6 5.84314 6 7.5C6 9.15683 7.34314 10.5 9 10.5C10.6568 10.5 12 9.15683 12 7.5C12 5.84314 10.6568 4.5 9 4.5ZM9 6C8.17155 6 7.5 6.67157 7.5 7.5C7.5 8.32845 8.17155 9 9 9C9.82845 9 10.5 8.32845 10.5 7.5C10.5 6.67157 9.82845 6 9 6Z" fill="#E8610A" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8.31758 16.9468C8.40443 17.0065 8.47358 17.0525 8.52195 17.0841L8.60153 17.1354C8.84498 17.2878 9.15457 17.2881 9.39802 17.1357L9.47812 17.0841C9.52642 17.0525 9.59557 17.0065 9.68242 16.9468C9.85612 16.8275 10.1014 16.6531 10.3943 16.4281C10.979 15.9791 11.7601 15.3241 12.5435 14.5002C14.0893 12.8746 15.75 10.4794 15.75 7.63635C15.75 5.81536 15.0428 4.06563 13.7789 2.77296C12.5144 1.47972 10.7957 0.75 9 0.75C7.20428 0.75 5.48561 1.47972 4.2211 2.77296C2.95716 4.06563 2.25 5.81536 2.25 7.63635C2.25 10.4794 3.91075 12.8746 5.45648 14.5002C6.23995 15.3241 7.02102 15.9791 7.60567 16.4281C7.89862 16.6531 8.14388 16.8275 8.31758 16.9468ZM9 2.25C7.6131 2.25 6.27955 2.8133 5.29361 3.82164C4.30712 4.83055 3.75 6.20244 3.75 7.63635C3.75 9.90053 5.08925 11.9372 6.54352 13.4666C7.26005 14.2201 7.97895 14.8235 8.51933 15.2384C8.70345 15.3799 8.86613 15.4988 9 15.5938C9.13387 15.4988 9.29655 15.3799 9.48067 15.2384C10.021 14.8235 10.7399 14.2201 11.4565 13.4666C12.9107 11.9372 14.25 9.90053 14.25 7.63635C14.25 6.20244 13.6929 4.83055 12.7063 3.82164C11.7205 2.8133 10.3869 2.25 9 2.25Z" fill="#E8610A" />
    </svg>
  );
}

export function SmallCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export function PulsingCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.748-5.25z" clipRule="evenodd" />
    </svg>
  );
}

export function DropdownChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}



export function ScheduleCallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66699 10.0004C1.66699 6.85771 1.66699 5.28637 2.6433 4.31005C3.61962 3.33374 5.19096 3.33374 8.33366 3.33374H11.667C14.8097 3.33374 16.3811 3.33374 17.3573 4.31005C18.3337 5.28637 18.3337 6.85771 18.3337 10.0004V11.6671C18.3337 14.8097 18.3337 16.3812 17.3573 17.3574C16.3811 18.3337 14.8097 18.3337 11.667 18.3337H8.33366C5.19096 18.3337 3.61962 18.3337 2.6433 17.3574C1.66699 16.3812 1.66699 14.8097 1.66699 11.6671V10.0004Z" stroke="white" strokeWidth="1.25" />
      <path d="M5.83301 3.33374V2.08374" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M14.167 3.33374V2.08374" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M2.08301 7.5H17.9163" stroke="white" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M14.9997 14.1671C14.9997 14.6273 14.6266 15.0004 14.1663 15.0004C13.7061 15.0004 13.333 14.6273 13.333 14.1671C13.333 13.7068 13.7061 13.3337 14.1663 13.3337C14.6266 13.3337 14.9997 13.7068 14.9997 14.1671Z" fill="white" />
      <path d="M14.9997 10.8333C14.9997 11.2936 14.6266 11.6667 14.1663 11.6667C13.7061 11.6667 13.333 11.2936 13.333 10.8333C13.333 10.3731 13.7061 10 14.1663 10C14.6266 10 14.9997 10.3731 14.9997 10.8333Z" fill="white" />
      <path d="M10.8337 14.1671C10.8337 14.6273 10.4606 15.0004 10.0003 15.0004C9.54008 15.0004 9.16699 14.6273 9.16699 14.1671C9.16699 13.7068 9.54008 13.3337 10.0003 13.3337C10.4606 13.3337 10.8337 13.7068 10.8337 14.1671Z" fill="white" />
      <path d="M10.8337 10.8333C10.8337 11.2936 10.4606 11.6667 10.0003 11.6667C9.54008 11.6667 9.16699 11.2936 9.16699 10.8333C9.16699 10.3731 9.54008 10 10.0003 10C10.4606 10 10.8337 10.3731 10.8337 10.8333Z" fill="white" />
      <path d="M6.66667 14.1671C6.66667 14.6273 6.29357 15.0004 5.83333 15.0004C5.3731 15.0004 5 14.6273 5 14.1671C5 13.7068 5.3731 13.3337 5.83333 13.3337C6.29357 13.3337 6.66667 13.7068 6.66667 14.1671Z" fill="white" />
      <path d="M6.66667 10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333C5 10.3731 5.3731 10 5.83333 10C6.29357 10 6.66667 10.3731 6.66667 10.8333Z" fill="white" />
    </svg>
  );
}

export function FeatureSyntheticIcon() {
  return (
    <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.3188 12.7217V35.2773L20.7847 46.5557L1.25049 35.2773V12.7217L20.7847 1.44336L40.3188 12.7217Z" stroke="#333130" strokeWidth="2.5" />
    </svg>
  );
}

export function FeatureCustomIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.25" y="1.25" width="45.5" height="45.5" rx="22.75" stroke="#F76A00" strokeWidth="2.5" />
      <circle cx="24.0003" cy="24.0001" r="2.32258" fill="#F76A00" />
      <circle cx="19.7423" cy="18.9677" r="1.16129" fill="#F76A00" />
      <circle cx="19.7423" cy="28.2582" r="1.16129" fill="#F76A00" />
      <circle cx="28.258" cy="28.2582" r="1.16129" fill="#F76A00" />
      <circle cx="28.258" cy="18.9677" r="1.16129" fill="#F76A00" />
      <circle cx="14.7103" cy="24.0001" r="2.32258" fill="#F76A00" />
      <circle cx="33.2904" cy="24.0001" r="2.32258" fill="#F76A00" />
      <circle cx="33.2904" cy="30.9678" r="2.32258" fill="#F76A00" />
      <circle cx="33.2904" cy="17.0322" r="2.32258" fill="#F76A00" />
      <circle cx="14.7103" cy="17.0322" r="2.32258" fill="#F76A00" />
      <circle cx="14.7103" cy="30.9678" r="2.32258" fill="#F76A00" />
      <circle cx="24.0003" cy="14.7097" r="2.32258" fill="#F76A00" />
      <circle cx="24.0003" cy="33.2903" r="2.32258" fill="#F76A00" />
    </svg>
  );
}

export function FeatureAmbientIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.4824 1.25L46.75 21.5176V26.4824L26.4824 46.75H21.5176L1.25 26.4824V21.5176L21.5176 1.25H26.4824Z" stroke="#333130" strokeWidth="2.5" />
    </svg>
  );
}

export function FeatureIdenticalIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_3306)">
        <path d="M47.25 0.75H0.75V12H47.25V0.75Z" stroke="#333130" strokeWidth="2.5" strokeMiterlimit="10" />
        <path d="M47.25 12H0.75V24H47.25V12Z" stroke="#333130" strokeWidth="2.5" strokeMiterlimit="10" />
        <path d="M47.25 24H0.75V35.25H47.25V24Z" stroke="#333130" strokeWidth="2.5" strokeMiterlimit="10" />
        <path d="M47.25 35.25H0.75V47.25H47.25V35.25Z" stroke="#333130" strokeWidth="2.5" strokeMiterlimit="10" />
      </g>
      <defs>
        <clipPath id="clip0_1_3306">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AppIcon() {
  return (
    <svg width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M152.88 42.6543V123.345L83 163.689L13.1201 123.345V42.6543L83 2.30957L152.88 42.6543Z" stroke="#DDDBDA" strokeWidth="4" />
      <circle cx="83.0011" cy="83.001" r="8.03226" fill="#FFDCC2" />
      <circle cx="68.2756" cy="65.5974" r="4.01613" fill="#FFDCC2" />
      <circle cx="68.2756" cy="97.7256" r="4.01613" fill="#FFDCC2" />
      <circle cx="97.7255" cy="97.7256" r="4.01613" fill="#FFDCC2" />
      <circle cx="97.7255" cy="65.5974" r="4.01613" fill="#FFDCC2" />
      <circle cx="50.873" cy="83.001" r="8.03226" fill="#FFDCC2" />
      <circle cx="115.129" cy="83.001" r="8.03226" fill="#FFDCC2" />
      <circle cx="115.129" cy="107.096" r="8.03226" fill="#FFDCC2" />
      <circle cx="115.129" cy="58.9026" r="8.03226" fill="#FFDCC2" />
      <circle cx="50.873" cy="58.9026" r="8.03226" fill="#FFDCC2" />
      <circle cx="50.873" cy="107.096" r="8.03226" fill="#FFDCC2" />
      <circle cx="83.0011" cy="50.8714" r="8.03226" fill="#FFDCC2" />
      <circle cx="83.0011" cy="115.129" r="8.03226" fill="#FFDCC2" />
    </svg>
  );
}



export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.66663 11.3334L11.3333 4.66675M11.3333 10.6667V4.66675H5.33329" stroke="currentColor" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RedCrossIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="18" height="18" rx="9" fill="#DC463C" />
      <path d="M6.22116 12.2689L5.74596 11.7937L8.63236 8.8897L5.74596 5.9857L6.22116 5.5105L9.10756 8.4145L11.9764 5.5105L12.4516 5.9857L9.56516 8.8897L12.4516 11.7937L11.9764 12.2689L9.10756 9.3825L6.22116 12.2689Z" fill="white" />
    </svg>
  );
}

export function GreenCheckIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="18" height="18" rx="9" fill="#32C35F" />
      <path d="M7.28124 11.9873C7.28124 11.911 7.26657 11.8729 7.23724 11.8729L7.03484 11.9697C7.03484 11.9286 7.01137 11.8993 6.96444 11.8817L6.89404 11.8729C6.84711 11.8729 6.78844 11.8934 6.71804 11.9345C6.70631 11.9052 6.69164 11.8758 6.67404 11.8465C6.65644 11.8172 6.64177 11.7908 6.63004 11.7673C6.55377 11.6206 6.47751 11.4593 6.40124 11.2833C6.33084 11.1014 6.26337 10.9284 6.19884 10.7641C6.14017 10.5998 6.09324 10.4708 6.05804 10.3769C6.03457 10.3006 6.00817 10.1862 5.97884 10.0337C5.94951 9.88116 5.92017 9.68756 5.89084 9.4529C5.95537 9.49396 6.00524 9.5145 6.04044 9.5145C6.08151 9.5145 6.11964 9.4529 6.15484 9.3297C6.17244 9.35316 6.20471 9.3649 6.25164 9.3649C6.28684 9.3649 6.31324 9.35316 6.33084 9.3297L6.47164 9.1185L6.63004 9.1713H6.63884C6.65057 9.1713 6.66231 9.16543 6.67404 9.1537C6.68577 9.14196 6.70337 9.13023 6.72684 9.1185C6.77377 9.08916 6.80897 9.0745 6.83244 9.0745L6.85884 9.0833C7.00551 9.1537 7.09937 9.28276 7.14044 9.4705C7.24604 9.91636 7.35164 10.1393 7.45724 10.1393C7.56284 10.1393 7.68604 10.0278 7.82684 9.8049C7.89724 9.69343 7.96764 9.56436 8.03804 9.4177C8.11431 9.27103 8.19057 9.10676 8.26684 8.9249C8.27857 8.9953 8.29031 9.0305 8.30204 9.0305C8.33137 9.0305 8.38124 8.95716 8.45164 8.8105C8.52791 8.66383 8.64817 8.46143 8.81244 8.2033C8.90631 8.0449 9.02364 7.86596 9.16444 7.6665C9.31111 7.46703 9.46657 7.2617 9.63084 7.0505C9.79511 6.8393 9.95351 6.63983 10.106 6.4521C10.2644 6.26436 10.4052 6.10303 10.5284 5.9681C10.6516 5.83316 10.7426 5.74516 10.8012 5.7041C11.0242 5.55156 11.2002 5.4049 11.3292 5.2641C11.3234 5.30516 11.3146 5.3433 11.3028 5.3785C11.297 5.40783 11.294 5.42836 11.294 5.4401C11.294 5.46356 11.3058 5.4753 11.3292 5.4753L11.5756 5.3521V5.3873C11.5756 5.43423 11.5874 5.4577 11.6108 5.4577C11.6284 5.4577 11.6636 5.4313 11.7164 5.3785C11.7692 5.3257 11.7986 5.28756 11.8044 5.2641L11.7868 5.3873L12.086 5.2113L12.0156 5.3697C12.1095 5.30516 12.177 5.2729 12.218 5.2729C12.2415 5.2729 12.2591 5.28756 12.2708 5.3169C12.2826 5.34036 12.2884 5.36383 12.2884 5.3873C12.2884 5.4225 12.2738 5.46356 12.2444 5.5105C12.2151 5.55743 12.177 5.61316 12.13 5.6777C12.0948 5.72463 12.0362 5.79503 11.954 5.8889C11.8778 5.9769 11.7604 6.1089 11.602 6.2849C11.4436 6.45503 11.2324 6.69263 10.9684 6.9977C10.898 7.07396 10.7895 7.2089 10.6428 7.4025C10.4962 7.59023 10.329 7.81023 10.1412 8.0625C9.95937 8.3089 9.77751 8.55823 9.59564 8.8105C9.41377 9.06276 9.25244 9.29156 9.11164 9.4969C8.97084 9.69636 8.87111 9.84596 8.81244 9.9457L8.26684 10.8697C8.14951 11.0692 8.05271 11.2334 7.97644 11.3625C7.90017 11.4857 7.84151 11.5708 7.80044 11.6177C7.71244 11.7233 7.61564 11.8172 7.51004 11.8993L7.43084 11.8553L7.36044 11.8993L7.28124 11.9873Z" fill="white" />
    </svg>
  );
}
