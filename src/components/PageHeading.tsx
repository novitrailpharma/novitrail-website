import React from "react";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface PageHeadingProps {
  title: string;
  description?: string;
  breadcrumb: BreadcrumbItem[];
  photo: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({
                                                   title,
                                                   description,
                                                   breadcrumb,
                                                   photo,
                                                 }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-800 to-novitrail-blue text-white">
      {/* Background Effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>

      {/* Content */}
      <div className="relative text-center py-20 px-4 sm:py-28 sm:px-8 sm:pt-32">
        {/* Breadcrumb */}
        <nav className="mb-4 text-gray-200 text-sm sm:text-base">
          <ul className="flex justify-center space-x-3">
            {breadcrumb.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">›</span>}
                <a href={item.link} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wider">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            {description}
          </p>
        )}
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32 sm:h-40"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,213.3C672,213,768,203,864,192C960,181,1056,171,1152,186.7C1248,203,1344,245,1392,266.7L1440,288L1440,320L0,320Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageHeading;
