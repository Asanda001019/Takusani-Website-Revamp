import React from 'react';

const OurService = () => {
  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 pt-28">
        {[
          {
            title: "For Developers",
            description: "Prototype ideas online, without depending on your local environment.",
            icon: (
              <svg
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
              >
                <path
                  d="M8.50141 14.75C8.3114 14.75 8.12141 14.68 7.97141 14.53L5.97141 12.53C5.68141 12.24 5.68141 11.7599 5.97141 11.4699L7.97141 9.46994C8.26141 9.17994 8.7414 9.17994 9.0314 9.46994C9.3214 9.75994 9.3214 10.24 9.0314 10.53L7.5614 12L9.0314 13.4699C9.3214 13.7599 9.3214 14.24 9.0314 14.53C8.8814 14.68 8.69141 14.75 8.50141 14.75Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16.5014 14.75C16.3114 14.75 16.1214 14.68 15.9714 14.53C15.6814 14.24 15.6814 13.7599 15.9714 13.4699L17.4414 12L15.9714 10.53C15.6814 10.24 15.6814 9.75994 15.9714 9.46994C16.2614 9.17994 16.7414 9.17994 17.0314 9.46994L19.0314 11.4699C19.3214 11.7599 19.3214 12.24 19.0314 12.53L17.0314 14.53C16.8814 14.68 16.6914 14.75 16.5014 14.75Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.5021 15.0801C11.4021 15.0801 11.3021 15.0601 11.2121 15.0201C10.8321 14.8601 10.6521 14.4201 10.8221 14.0301L12.8221 9.36004C12.9821 8.98004 13.4221 8.80002 13.8021 8.97002C14.1821 9.13002 14.3621 9.57008 14.1921 9.96008L12.1921 14.6301C12.0721 14.9101 11.7921 15.0801 11.5021 15.0801Z"
                  fill="currentColor"
                ></path>
              </svg>
            ),
          },
          {
            title: "Content Creators",
            description:
              "Deliver high-quality, engaging blogs, articles, and video tutorials to your audience.",
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
              >
                <path
                  d="M7.55556 4.22222C7.55556 2.99492 8.55048 2 9.77778 2C11.0051 2 12 2.99492 12 4.22222V5.44444C12 5.99673 12.4477 6.44444 13 6.44444H16.5556C17.1078 6.44444 17.5556 6.89216 17.5556 7.44444V11C17.5556 11.5523 18.0033 12 18.5556 12H19.7778C21.0051 12 22 12.9949 22 14.2222C22 15.4496 21.0051 16.4444 19.7778 16.4444H18.5556C18.0033 16.4444 17.5556 16.8922 17.5556 17.4444V21C17.5556 21.5523 17.1078 22 16.5556 22H13C12.4477 22 12 21.5523 12 21V19.7778C12 18.5504 11.0051 17.5556 9.77778 17.5556C8.55048 17.5556 7.55556 18.5504 7.55556 19.7778V21C7.55556 21.5523 7.10784 22 6.55556 22H3C2.44772 22 2 21.5523 2 21V17.4444C2 16.8922 2.44772 16.4444 3 16.4444H4.22222C5.44952 16.4444 6.44444 15.4496 6.44444 14.2222C6.44444 12.9949 5.44952 12 4.22222 12H3C2.44772 12 2 11.5523 2 11V7.44444C2 6.89216 2.44772 6.44444 3 6.44444H6.55556C7.10784 6.44444 7.55556 5.99673 7.55556 5.44444V4.22222Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                ></path>
              </svg>
            ),
          },
          {
            title: "Educators Teaching PHP",
            description:
              "Easily create and share coding assignments and projects with your students.",
            icon: (
              <svg
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
              >
                <path
                  d="M12.6586 11.62C12.6286 11.62 12.6086 11.62 12.5786 11.62C12.5286 11.61 12.4586 11.61 12.3986 11.62C9.49859 11.53 7.30859 9.25 7.30859 6.44C7.30859 3.58 9.63859 1.25 12.4986 1.25C15.3586 1.25 17.6886 3.58 17.6886 6.44C17.6786 9.25 15.4786 11.53 12.6886 11.62C12.6786 11.62 12.6686 11.62 12.6586 11.62ZM12.4986 2.75C10.4686 2.75 8.80859 4.41 8.80859 6.44C8.80859 8.44 10.3686 10.05 12.3586 10.12C12.4086 10.11 12.5486 10.11 12.6786 10.12C14.6386 10.03 16.1786 8.42 16.1886 6.44C16.1886 4.41 14.5286 2.75 12.4986 2.75Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.6716 22.55C10.7116 22.55 8.74156 22.05 7.25156 21.05C5.86156 20.13 5.10156 18.87 5.10156 17.5C5.10156 16.13 5.86156 14.86 7.25156 13.93C10.2516 11.94 15.1116 11.94 18.0916 13.93C19.4716 14.85 20.2416 16.11 20.2416 17.48C20.2416 18.85 19.4816 20.12 18.0916 21.05C16.5916 22.05 14.6316 22.55 12.6716 22.55ZM8.08156 15.19C7.12156 15.83 6.60156 16.65 6.60156 17.51C6.60156 18.36 7.13156 19.18 8.08156 19.81C10.5716 21.48 14.7716 21.48 17.2616 19.81C18.2216 19.17 18.7416 18.35 18.7416 17.49C18.7416 16.64 18.2116 15.82 17.2616 15.19C14.7716 13.53 10.5716 13.53 8.08156 15.19Z"
                  fill="currentColor"
                ></path>
              </svg>
            ),
          },
          {
            title: "Open Source Maintainers",
            description:
              "For issue reproduction while letting your users try your work without installing it.",
            icon: (
              <svg
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
              >
                <path
                  d="M15.2013 6.29998C15.0181 6.48691 14.9155 6.73823 14.9155 6.99998C14.9155 7.26173 15.0181 7.51305 15.2013 7.69998L16.8013 9.29998C16.9882 9.48321 17.2396 9.58584 17.5013 9.58584C17.7631 9.58584 18.0144 9.48321 18.2013 9.29998L21.4602 6.04107C21.7073 5.79397 22.1242 5.87146 22.229 6.20485C22.52 7.13078 22.583 8.11721 22.4078 9.07913C22.1892 10.279 21.61 11.3838 20.7476 12.2463C19.8852 13.1087 18.7804 13.6878 17.5805 13.9064C16.4942 14.1044 15.4087 13.9315 14.5223 13.4036C13.9127 12.9678 13.4186 12.4026 13.1369 11.7612L12.1943 10.2951C11.9866 9.96969 11.6539 9.80709 11.3113 9.85192C10.9686 9.89676 10.6615 10.1497 10.4998 10.4881L9.65813 11.9536C9.53225 12.1748 9.23175 12.2632 8.99075 12.1455C8.74975 12.0279 8.66125 11.7268 8.79975 11.4678L9.64175 9.97478C9.74975 9.78328 9.83375 9.57348 9.88375 9.34898L10.1998 7.60798C10.2835 7.33118 10.0841 7.01502 9.80835 6.93192C9.53259 6.84883 9.21623 7.0478 9.13326 7.3238L8.78226 8.808C8.74726 8.94598 8.67226 9.07498 8.57726 9.13098C8.42326 9.20298 8.24226 9.25598 8.06026 9.25598C7.87826 9.25598 7.69626 9.20298 7.54226 9.13098C7.44726 9.07498 7.37226 8.94598 7.33726 8.808L7.01826 7.3238C6.93526 7.0478 6.61925 6.84883 6.34349 6.93192C6.08411 7.01502 5.88476 7.33118 5.96842 7.60798L6.28442 9.34898C6.33442 9.57348 6.41842 9.78328 6.52642 9.97478L7.36842 11.4678C7.50642 11.7268 7.41792 12.0279 7.17692 12.1455C6.93592 12.2632 6.60325 12.1748 6.47742 11.9536L5.63542 10.4881C5.47342 10.1497 5.16642 9.89676 4.82342 9.85192C4.48042 9.80709 4.14742 9.96969 3.93942 10.2951L2.99642 11.7612C2.71442 12.4026 2.22042 12.9678 1.61042 13.4036C0.724417 13.9315 -0.361582 14.1044 -1.44759 13.9064C-2.6475 13.6878 -3.7523 13.1087 -4.61472 12.2463C-5.47712 11.3838 -6.05632 10.279 6.99149 9.07913C7.16755 8.11721 7.23155 7.13078 7.52255 6.20485C7.62736 5.87146 8.04416 5.79397 8.29142 6.04107L11.5503 9.29998C11.7372 9.48321 11.9885 9.58584 12.2503 9.58584C12.5121 9.58584 12.7634 9.48321 12.9503 9.29998L14.5503 7.69998C14.7335 7.51305 14.8361 7.26173 14.8361 6.99998C14.8361 6.73823 14.7335 6.48691 14.5503 6.29998H15.2013Z"
                  fill="currentColor"
                ></path>
              </svg>
            ),
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:bg-blue-100 hover:scale-105 transition duration-300"
          >
            <div className="text-center mb-4">
              <div className="text-5xl text-gray-700">{service.icon}</div>
            </div>
            <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-center text-gray-600 mb-4">
              {service.description}
            </p>
            <div className="text-center">
              <button className="text-blue-600 font-semibold py-2 px-4 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
