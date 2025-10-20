// import React from "react";
// import Image from "next/image";

// const DoubleImage = () => {
//   return (
//     <section className="bg-background-subtle py-16 md:py-24">
//       <div className="container">
//         <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-5 md:gap-8">
//           {/* Left Image */}
//           <div className="relative h-[421] w-[316] overflow-hidden rounded-lg md:col-span-2">
//             <Image
//               src="/images/island-shore.jpg" // Replace with your actual image path
//               fill
//               alt="Crystal clear water on the shore"
//               className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </div>

//           {/* Right Image */}
//           <div className="relative h-[592] w-[896] overflow-hidden rounded">
//             <Image
//               src="/images/island-shore.jpg" // Replace with your actual image path
//               alt="View from inside a sea cave"
//               fill
//               className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DoubleImage;

import React from "react";
import Image from "next/image";

const DoubleImage = () => {
  return (
    <section className="bg-background-subtle py-16 md:py-24">
      <div className="container">
        {/* Layout Strategy:
          - Mobile (default): A single-column flexbox (`flex-col`) to stack the images.
          - Desktop (`md:`): Switches to a row (`md:flex-row`), aligns items to the top (`md:items-start`),
            and centers the content horizontally (`md:justify-center`).
        */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center md:gap-8">
          {/* Left Image */}
          {/* - On mobile, it's full-width up to a max of 316px.
            - On desktop, it uses the exact dimensions provided. `flex-shrink-0` prevents it from shrinking.
          */}
          <div className="relative h-96 w-full max-w-[316px] overflow-hidden rounded-lg md:h-[421px] md:w-[316px] md:flex-shrink-0">
            <Image
              src="/images/island-shore.jpg" // Replace with your actual image path
              alt="Crystal clear water on the shore"
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Right Image */}
          {/* - On mobile, it's full-width up to a max of 896px.
            - On desktop, it uses the exact dimensions provided.
          */}
          <div className="relative h-96 w-full max-w-[896px] overflow-hidden rounded-lg md:h-[592px] md:w-[896px]">
            <Image
              src="/images/island-shore.jpg" // Replace with your actual image path
              alt="View from inside a sea cave"
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubleImage;
