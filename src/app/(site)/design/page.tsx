'use client';
import React, { useState } from 'react';
import DesignHeader from "@/components/Design/DesignHeader";
import DesignDescription from "@/components/Design/DesignDescription";
import DesignStyle from "@/components/Design/DesignStyle";
import DesignColor from "@/components/Design/DesignColor";
import DesignButton from "@/components/Design/DesignButton";
import DesignRender from "@/components/Design/DesignRender";
import CollectionRender from "@/components/Design/CollectionRender"; 
import FavoritesRender from "@/components/Design/FavoritesRender"; 

const pageTitle = `Create a Design`;
const pageDescription = `Design your own tattoos!`;

const DesignPage = () => {
  const [selectedTab, setSelectedTab] = useState('design');

  return (
    <>
      <div className="min-h-screen h-screen flex flex-col overflow-hidden">
        <DesignHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="flex flex-grow overflow-hidden">
          <div className="bg-[#252627] w-1/4 p-6 flex flex-col overflow-y-auto">
            <DesignDescription />
            <DesignStyle />
            <DesignColor />
            <DesignButton />
          </div>

          <div className="bg-white w-3/4 flex flex-col overflow-hidden">
            {selectedTab === 'design' && <DesignRender />}
            {selectedTab === 'mycollection' && <CollectionRender />}
            {selectedTab === 'favorites' && <FavoritesRender />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
