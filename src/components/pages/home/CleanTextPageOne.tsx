import SwipeableStackCards from "@/components/ui/SwipableStackCards";

export default function CleanTextPageOne() {
  return (
    <section
      id="clean-text-page-one"
      className="md:h-[60vh] lg:h-[100vh] w-full bg-white text-gray-800 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-16 sm:py-20 lg:py-28 flex-col md:flex md:items-start md:justify-between"
    >
      <div className="h-full flex flex-col items-start justify-between">
        <div className="">
          <p className="w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[50px] text-left mt-4 text-[#1C2042] font-bold font-formular tracking-tighter">
            What We Make,
          </p>
          <p className="w-full md:w-[70vw] lg:w-[60vw] xl:w-[50vw] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[50px] text-left -mt-2 sm:-mt-3 lg:-mt-4 text-[#1C2042] font-bold font-formular tracking-tighter">
            Makes You Look Great
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-8 sm:mt-12 lg:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="13"
            viewBox="0 0 31 13"
            className="w-6 h-3 sm:w-8 sm:h-4 lg:w-[31px] lg:h-[13px]"
          >
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path
                  fill="#1c2042"
                  d="M3.872.187C1.526.187.008 2.519 0 4.435c-.015 3.525 7.053 7.876 7.053 7.876s7.07-4.351 7.055-7.876C14.1 2.52 12.581.187 10.235.187c-1.076 0-2.433.701-3.182 1.36C6.305.889 4.948.188 3.872.188z"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  fill="#e8a4a5"
                  d="M20.22.187c-2.346 0-3.863 2.332-3.872 4.248-.015 3.525 7.054 7.876 7.054 7.876s7.07-4.351 7.055-7.876C30.448 2.52 28.93.187 26.584.187c-1.076 0-2.434.701-3.182 1.36-.749-.659-2.106-1.36-3.182-1.36z"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </svg>
          <p className="text-[#1C2042] font-formular tracking-tight text-[14px] sm:text-[15px] lg:text-[16px] max-w-xs sm:max-w-sm lg:max-w-md">
            From timeless frames to modern moods, we don
            <span className="font-sans">&apos;</span>t just capture how you
            look, we showcase who you are.
          </p>
        </div>
      </div>

      <div className="h-full w-full flex items-center">
        <SwipeableStackCards />
      </div>
    </section>
  );
}
