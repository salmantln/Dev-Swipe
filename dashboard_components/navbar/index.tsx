// import navbarimage from '/public/img/layout/Navbar.png';
// import { RiMoonFill, RiSunFill } from 'react-icons/ri';
// import Configurator from './Configurator';

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) => {
  const { onOpenSidenav, brandText, mini, hovered } = props;
  // const [darkmode, setDarkmode] = React.useState(
  //   document.body.classNameList.contains('dark'),
  // );
  return (
    // <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
    //   <div className="ml-[6px]">
    //     <div className="h-6 w-[224px] pt-1">
    //       <a
    //         className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
    //         href=" "
    //       >
    //         Pages
    //         <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
    //           {' '}
    //           /{' '}
    //         </span>
    //       </a>
    //       <NavLink
    //         className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
    //         href="#"
    //       >
    //         {brandText}
    //       </NavLink>
    //     </div>
    //     <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
    //       <NavLink
    //         href="#"
    //         className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
    //       >
    //         {brandText}
    //       </NavLink>
    //     </p>
    //   </div>

    //   <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
    //     <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
    //       <p className="pl-3 pr-2 text-xl">
    //         <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
    //       </p>
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
    //       />
    //     </div>
    //     <span
    //       className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
    //       onClick={onOpenSidenav}
    //     >
    //       <FiAlignJustify className="h-5 w-5" />
    //     </span>
    //     {/* start Notification */}
    //     <Dropdown
    //       button={
    //         <p className="cursor-pointer">
    //           <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
    //         </p>
    //       }
    //       animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
    //       classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
    //     >
    //       <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
    //         <div className="flex items-center justify-between">
    //           <p className="text-base font-bold text-navy-700 dark:text-white">
    //             Notification
    //           </p>
    //           <p className="text-sm font-bold text-navy-700 dark:text-white">
    //             Mark all read
    //           </p>
    //         </div>

    //         <button className="flex w-full items-center">
    //           <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
    //             <BsArrowBarUp />
    //           </div>
    //           <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
    //             <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
    //               New Update: Horizon UI Dashboard PRO
    //             </p>
    //             <p className="font-base text-left text-xs text-gray-900 dark:text-white">
    //               A new update for your downloaded item is available!
    //             </p>
    //           </div>
    //         </button>

    //         <button className="flex w-full items-center">
    //           <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
    //             <BsArrowBarUp />
    //           </div>
    //           <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
    //             <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
    //               New Update: Horizon UI Dashboard PRO
    //             </p>
    //             <p className="font-base text-left text-xs text-gray-900 dark:text-white">
    //               A new update for your downloaded item is available!
    //             </p>
    //           </div>
    //         </button>
    //       </div>
    //     </Dropdown>
    //     {/* start Horizon PRO */}
    //     <Dropdown
    //       button={
    //         <p className="cursor-pointer">
    //           <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
    //         </p>
    //       }
    //       classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
    //       animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
    //     >
    //       <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
    //         {/* <div
    //           style={{
    //             backgroundImage: `url(${navbarimage.src})`,
    //             backgroundRepeat: 'no-repeat',
    //             backgroundSize: 'cover',
    //           }}
    //           className="mb-2 aspect-video w-full rounded-lg"
    //         /> */}
    //         <a
    //           target="blank"
    //           href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
    //           className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
    //         >
    //           Buy Horizon UI PRO
    //         </a>
    //         <a
    //           target="blank"
    //           href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
    //           className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
    //         >
    //           See Documentation
    //         </a>
    //         <a
    //           target="blank"
    //           href="https://horizon-ui.com/?ref=live-free-tailwind-react"
    //           className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white"
    //         >
    //           Try Horizon Free
    //         </a>
    //       </div>
    //     </Dropdown>
    //     <div
    //       className="cursor-pointer text-gray-600"
    //       onClick={() => {
    //         if (darkmode) {
    //           document.body.classNameList.remove('dark');
    //           setDarkmode(false);
    //         } else {
    //           document.body.classNameList.add('dark');
    //           setDarkmode(true);
    //         }
    //       }}
    //     >
    //       {darkmode ? (
    //         <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
    //       ) : (
    //         <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
    //       )}
    //     </div>
    //     {/* Profile & Dropdown */}
    //     {/* <Dropdown
    //       button={
    //         <Image
    //           width="2"
    //           height="20"
    //           className="h-10 w-10 rounded-full"
    //           src={avatar}
    //           alt="Elon Musk"
    //         />
    //       }
    //       classNames={'py-2 top-8 -left-[180px] w-max'}
    //     >
    //       <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
    //         <div className="ml-4 mt-3">
    //           <div className="flex items-center gap-2">
    //             <p className="text-sm font-bold text-navy-700 dark:text-white">
    //               👋 Hey, Adela
    //             </p>{' '}
    //           </div>
    //         </div>
    //         <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

    //         <div className="ml-4 mt-3 flex flex-col">
    //           <a
    //             href=" "
    //             className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
    //           >
    //             Profile Settings
    //           </a>
    //           <a
    //             href=" "
    //             className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
    //           >
    //             Newsletter Settings
    //           </a>
    //           <a
    //             href=" "
    //             className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
    //           >
    //             Log Out
    //           </a>
    //         </div>
    //       </div>
    //     </Dropdown> */}
    //   </div>
    // </nav>


<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
  <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">
    <div className="flex items-center justify-between">
      <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
      <div className="md:hidden">
        <button type="button" className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
        <a className="font-medium text-blue-600 md:py-6 dark:text-blue-500" href="#" aria-current="page">Landing</a>
        <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Account</a>
        <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Work</a>
        <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">Blog</a>

        <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
          <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
            Dropdown
            <svg className="ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-5 before:start-0 before:w-full before:h-5">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              About
            </a>
            <div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
              <button type="button" className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Sub Menu
                <svg className="md:-rotate-90 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  About
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Downloads
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Team Account
                </a>
              </div>
            </div>

            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Downloads
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Team Account
            </a>
          </div>
        </div>

        <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Log in
        </a>
      </div>
    </div>
  </nav>
</header>
  );
};

export default Navbar;
