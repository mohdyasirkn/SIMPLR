import React from "react";
import PdfPreview from "../components/PdfViewer";
import SearchBar from "../components/SearchBar";
import ChatSearch from "../components/ChatSearch";

const customStyles = {
  negativeMargin: {
    marginRight: "-0.5rem",
  },
};

export const Landing = () => {
  return (
    <div className="ml-80 px-4 py-8 h-screen bg-neutral-100">
      <div className="container mx-auto h-screen flex flex-col">
        <div className="h-24 flex flex-row justify-between">
          <div className="">
            <div className="text-3xl">Convert & Chat</div>
            <div className="text-xl">Welcome Marie!</div>
          </div>
          <div className="justidy-center w-2/6">
            <SearchBar />
          </div>
          <div className="flex flex-row mt-4">
            <div
              className="z-20 rounded-full"
              style={customStyles.negativeMargin}
            >
              <img src="/Mask group.png" alt="" />
            </div>
            <div
              className="z-10 rounded-full"
              style={customStyles.negativeMargin}
            >
              <img src="/people_1.png" alt="" />
            </div>
            <div className="z-0 rounded-full">
              <img src="/people_2.png" alt="" />
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className="flex flex-row h-full mt-10 gap-12">
          <div className="w-full">
            <div className="text-xl pb-3">
              Preview & Convert your file in a glance
            </div>
            <div className="w-full h-full pb-24 pt-1">
              <PdfPreview
                url={
                  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                }
              />
            </div>
          </div>
          <div className="w-full">
            <div className="text-xl pb-4">Chat with AI</div>
            <div className="pb-24 h-full">
              <div className="border-2 border-zinc-300 rounded-lg w-full h-full pt-1 flex flex-col justify-between place-items-center">
                <div className="text-xl pt-52">
                  Your Chat with AI appear here
                </div>
                <div className="w-full pb-5">
                  <ChatSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// url={
//   "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
// }
