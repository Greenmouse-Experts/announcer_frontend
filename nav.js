document.addEventListener("DOMContentLoaded", function () {
   const subHeading = document.getElementById("subHeading");
   const heading = document.getElementById("heading");
   const paragraph = document.getElementById("paragraph");

   const heroContents = [
      {
         subHeading: "WELCOME TO ANNOUNCERS",
         heading: "ID-Management Solutions",
         paragraph: "The Best Digital Solutions to all kinds of publicity with speed, accuracy and best quality service delivery.",
      },
      {
         subHeading: "YOUR TRUSTED PARTNER",
         heading: "Innovative Marketing Tools",
         paragraph: "Unlock your business potential with cutting-edge marketing tools designed for efficiency and growth.",
      },
      {
         subHeading: "EXPLORE NEW HORIZONS",
         heading: "Comprehensive Analytics",
         paragraph: "Gain insights into your audience and improve your strategies with our comprehensive analytics solutions.",
      },
   ];

   let currentIndex = 0;

   function changeHeroContent() {
      const content = heroContents[currentIndex];
      subHeading.textContent = content.subHeading;
      heading.textContent = content.heading;
      paragraph.textContent = content.paragraph;

      currentIndex = (currentIndex + 1) % heroContents.length;
   }

   // Initial content load
   changeHeroContent();

   // Change content every 3 seconds
   setInterval(changeHeroContent, 3000);

});
