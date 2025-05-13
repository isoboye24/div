import React from 'react';
import {
  faFacebookF,
  faInstagram,
  faXing,
} from '@fortawesome/free-brands-svg-icons';
import SocialMedia from '../shared/footer/social-media';

const AboutMeText = () => {
  const color = '#05bd9e';
  return (
    <div className="text-justify">
      <h2 className="text-center font-semibold text-1xl md:text-2xl lg:text-3xl mb-5">
        I am Isoboye Vincent Dan-Obu
      </h2>
      <p className="text-gray-500">
        I am a Web Developer located in Baunatal, Hessen, Germany. I am looking
        to take on more work to increase my skills as a Software Developer.
      </p>
      <div className="mt-5">
        <div className="grid grid-cols-[1fr_3fr]">
          <h3>Phone</h3>
          <p className="text-gray-500">+49 151 205 68192</p>
        </div>
        <div className="grid grid-cols-[1fr_3fr] mt-2">
          <h3>Email</h3>
          <p className="text-gray-500">isoboyedanobu@gmail.com</p>
        </div>
        <div className="grid grid-cols-[1fr_3fr] mt-2">
          <h3>Address</h3>
          <p className="text-gray-500">
            Akazienallee 68, 34225 Baunatal, Hessen, Germany
          </p>
        </div>
        <div className="grid grid-cols-[1fr_3fr] mt-2">
          <h3>Social</h3>
          <div className="flex gap-7 mt-3">
            <div className="">
              <SocialMedia
                icon={faFacebookF}
                bgColor={color}
                size={13}
                url="https://www.facebook.com/isoboye.vincent/"
              />
            </div>
            <div className="">
              <SocialMedia
                icon={faInstagram}
                bgColor={color}
                size={13}
                url="https://www.instagram.com/isoboye_vincent/"
              />
            </div>
            <div className="">
              <SocialMedia
                icon={faXing}
                bgColor={color}
                size={13}
                url="https://www.xing.com/profile/IsoboyeVincent_DanObu/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
