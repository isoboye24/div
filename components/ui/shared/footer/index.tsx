import BottomFooter from './bottom-footer';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import SocialMedia from './social-media';
import {
  faFacebookF,
  faInstagram,
  faXing,
} from '@fortawesome/free-brands-svg-icons';
import Legal from './legal';
import QuickLinks from './quick-links';

const Footer = () => {
  const color = '#e78d00';
  return (
    <>
      <footer className="border-t footer-bg md:px-9 sm:px-4 pt-9 pb-1">
        <div className="grid gap-4 flex-rows-3 md:grid-cols-5 p-4 mb-6">
          <div className="text-gray-400  px-3 mb-5 sm:mb-0 md:col-span-2">
            <div className="flex justify-center items-center">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Logo"
                className="mb-8"
              />
            </div>
            <p className="px-2 lg:px-15 text-justify text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className=" hidden md:block">
            <Legal />
          </div>
          <div className=" hidden md:block">
            <div className="text-start">
              <QuickLinks />
            </div>
          </div>
          <div className="sm:block md:hidden grid gap-2 grid-cols-2 px-5 md:px-0 lg:px-10">
            <div className="">
              <Legal />
            </div>

            <div className="px-5 sm:px-0 lg:text-center">
              <div className="text-start">
                <QuickLinks />
              </div>
            </div>
          </div>
          <div className="text-center ">
            <div className="justify-center">
              <h2 className="mb-6 text-gray-300">Follow me on:</h2>
              <div className="flex items-center justify-center gap-5">
                <SocialMedia
                  icon={faFacebookF}
                  bgColor={color}
                  size={20}
                  url="https://www.facebook.com/isoboye.vincent/"
                />
                <SocialMedia
                  icon={faInstagram}
                  bgColor={color}
                  size={20}
                  url="https://www.instagram.com/isoboye_vincent/"
                />
                <SocialMedia
                  icon={faXing}
                  bgColor={color}
                  size={20}
                  url="https://www.xing.com/profile/IsoboyeVincent_DanObu/"
                />
              </div>
            </div>
          </div>
        </div>

        <BottomFooter />
      </footer>
    </>
  );
};

export default Footer;
