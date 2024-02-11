import React from "react";
import Header from "./Header";

const Roles = () => {
  return (
    <div className="overflow-hidden py-8 my-10">
      <Header
        title="Découvrez votre rôle !"
        content="Soyez mousquetaire et ramenez le collier à la Reine, ou soyez espion et sabotez la mission sans vous faire repérer !"
      />
      <div className="my-10 flex w-full gap-3">
        <div className="w-1/2 flex justify-end">
          <div className="w-[calc(100%-75px)] relative">
            <img src="/roles/musk3.jpg" className="w-full z-30 relative" />
            <img
              src="/roles/musk1.jpg"
              className="w-full absolute top-0 -left-4 -rotate-6 z-20"
            />
            <img
              src="/roles/musk2.jpg"
              className="w-full absolute top-0 -left-8 -rotate-12 z-10"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-begin">
          <div className="w-[calc(100%-75px)] relative">
            <img src="/roles/spy3.jpg" className="w-full z-30 relative" />
            <img
              src="/roles/spy1.jpg"
              className="w-full absolute top-0 left-4 rotate-6 z-20"
            />
            <img
              src="/roles/spy2.jpg"
              className="w-full absolute top-0 left-8 rotate-12 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
