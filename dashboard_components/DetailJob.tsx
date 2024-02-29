import { Card } from "@tremor/react";
import React from "react";

export const DetailJob = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          {/* <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Reacties</h1>
              <span className="text-xl">0</span>
            </div>
          </div> */}
          <Card className="flex-1 flex flex-col gap-2">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Reacties
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              0
            </p>
          </Card>

          <Card className="flex-1 flex flex-col gap-2">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Matches
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              0
            </p>
          </Card>
          {/* <div className="flex-1 bg-white p-4 shadow-md rounded-lg">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Matches</h1>
              <span className="text-xl">0</span>
            </div>
          </div> */}
        </div>
        {/* <div className="bg-white p-4 shadow-md rounded-lg flex flex-row items-center gap-8">
          <span className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
            <img src="https://owcaxhtzilfnrznkxqbw.supabase.co/storage/v1/object/public/job_profile_image/0155c42d-e89f-45b0-a142-51eab273974c-0.8570850253916673.png" />
          </span>
          <div className="flex flex-col gap-2">
            <div>
              <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                Inactief
              </span>
            </div>
            <h3 className="text-xl font-bold">Socialmedia marketing</h3>
            <span className="text-sm truncate">
              Lorem ipsum dolor sit amet, consectetur adi
            </span>
            <span className="text-sm">Aangemaakt op: 2024-02-28</span>
          </div>
        </div> */}

        <Card className="bg-white p-4 shadow-md rounded-lg flex flex-row items-center gap-8">
          <span className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
            <img src="https://owcaxhtzilfnrznkxqbw.supabase.co/storage/v1/object/public/job_profile_image/0155c42d-e89f-45b0-a142-51eab273974c-0.8570850253916673.png" />
          </span>
          <div className="flex flex-col gap-2">
            <div>
              <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                Inactief
              </span>
            </div>
            <h3 className="text-xl font-bold">Socialmedia marketing</h3>
            <span className="text-sm truncate">
              Lorem ipsum dolor sit amet, consectetur adi
            </span>
            <span className="text-sm">Aangemaakt op: 2024-02-28</span>
          </div>
        </Card>

        <Card className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">Algemene informatie</h1>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Beschrijving</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
              lacus viverra vitae congue eu consequat ac felis donec. Malesuada
              n
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Salaris</span>
            <span>€20 per uur</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Werkuren</span>
            <span>32 tot 40 uren per week</span>
          </div>
        </Card>
        {/* <div className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">Algemene informatie</h1>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Beschrijving</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
              lacus viverra vitae congue eu consequat ac felis donec. Malesuada
              n
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Salaris</span>
            <span>€20 per uur</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Werkuren</span>
            <span>32 tot 40 uren per week</span>
          </div>
        </div> */}

        {/* <div className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">Skills</h1>
          <div className="flex flex-col gap-2">
            <span>- Anderen aansturen</span>
            <span>- Plannen en organiseren</span>
            <span>- Presenteren</span>
            <span>- Aandacht voor anderen</span>
            <span>- Samenwerken en overleggen</span>
          </div>
        </div> */}

        <Card className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">Skills</h1>
          <div className="flex flex-col gap-2">
            <span>- Anderen aansturen</span>
            <span>- Plannen en organiseren</span>
            <span>- Presenteren</span>
            <span>- Aandacht voor anderen</span>
            <span>- Samenwerken en overleggen</span>
          </div>
        </Card>

        <Card  className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-4">
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Locatie van de baan</h1>
            <div className="flex flex-col gap-2">
              <span>Anthony Fokkerweg 1</span>
              <span>Amsterdam</span>
              <span>1059 CM</span>
            </div>
          </div>
          <span>Baan is op adres van het bedrijf</span>

        </Card>
        {/* <div className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Locatie van de baan</h1>
            <div className="flex flex-col gap-2">
              <span>Anthony Fokkerweg 1</span>
              <span>Amsterdam</span>
              <span>1059 CM</span>
            </div>
          </div>
          <span>Baan is op adres van het bedrijf</span>
        </div> */}
      </div>
    </>
  );
};
